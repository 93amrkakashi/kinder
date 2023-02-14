import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { useRegister } from "../../utils/hooks/auth";
import {
  emailValidate,
  passwordValidate,
  phoneValidate,
  usernameValidate,
} from "../../utils/hooks/validations";
import { login } from "../../utils/routes";
import Navbar from "../layout/Navbar";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";

function Register() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const { register: signup, isLoading } = useRegister();
  async function handleregister(data) {
    const sucsess = await signup({
      username: data.username,
      email: data.email,
      password: data.password,
      phone: data.phone,
    });
    reset();
    console.log(data);
  }
  return (
    <>
      <Navbar />
      <div className="regster">
        <div className="login-card">
          <h2>Regster</h2>
          <form onSubmit={handleSubmit(handleregister)}>
            <label> User Name</label>
            <input
              type="text"
              placeholder="your User Name"
              {...register("username", usernameValidate)}
            />
            {errors.username ? <span>{errors.username.message}</span> : null}

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

            <PhoneInput
              placeholder="Enter phone number"
              defaultCountry="EG"
              {...register("phone", phoneValidate)}
            />
            {errors.phone ? <span>{errors.phone.message}</span> : null}

            <button className="login-btn" type="submit">
              Rigster
            </button>
          </form>
          <p>
            You are a user ?{"  "}
            <Link to={login}>Login</Link>
          </p>
        </div>
      </div>
    </>
  );
}

export default Register;
