import React from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { useLogin } from "../../utils/hooks/auth";
import { emailValidate, passwordValidate } from "../../utils/hooks/validations";
import { root } from "../../utils/routes";
import Navbar from "../layout/Navbar";
// import { useLogin } from "../assets/hooks/auth";
// import { notifygood } from "../../hooks/notify";
// import { emailValidate, passwordValidate } from "../assets/hooks/validations";
// import { Navbar } from "../layers/Navbar";
import { register as reg} from "../../utils/routes";

function Login() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const { login, isLoading } = useLogin();

      const navigate = useNavigate()
  async function handleLogin(data) {
    const sucsess = await login({
      email: data.email,
      password: data.password,
      // redirectTo:data.redirectTo
    });
    if (!sucsess) {
      return;
    } else {
      navigate(root)
      return reset();
    }
  }

  return (
    <>
      <Navbar />
      <div className="login">
        <div className="login-card">
          <h2>Log In</h2>
          <form onSubmit={handleSubmit(handleLogin)}>
            <label> Email</label>
            <input
              type="email"
              placeholder="your Email"
              {...register("email", emailValidate)}
            />
            {errors.email ? <span>{errors.email.message}</span> : null}

            <label> Password</label>
            <input
              type="password"
              placeholder="your Password"
              {...register("password", passwordValidate)}
            />
            {errors.password ? <span>{errors.password.message}</span> : null}

            <button className="login-btn" type="submit">
              Log In
            </button>
          </form>
          <p>
            dont have an account ?<Link to={reg}>Rigster</Link>
          </p>
        </div>
      </div>
    </>
  );
}

export default Login;





