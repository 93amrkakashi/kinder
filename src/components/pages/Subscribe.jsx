import React from "react";
import { useForm } from "react-hook-form";
import { useAddStudent } from "../../utils/hooks/students";
import { ageChildValidate, ageValidate, emailValidate, genderValidate, IDValidate, nameValidate, phoneValidate, photoValidate } from "../../utils/hooks/validations";
import Navbar from "../layout/Navbar";

function Subscribe() {
  function handlepic(e) {
    setFile(e.target.files[0]);
  }
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const { addStudent, setFile, isLoading } = useAddStudent();
  async function handleAdd(data) {
    await addStudent({
      fatherName: data.fatherName,
      fatherAge: data.fatherAge,
      fatherGender: data.gender,
      fatherEmail: data.fatherEmail,
      fatherPhone: data.fatherPhone,
      fatherID: data.fatherID,
      sonName: data.sonName,
      sonAge: data.sonAge,
      sonGender: data.Sgender,
    });
    console.log(errors);

    reset();
  }

  return (
    <div>
      <Navbar />
      <div className="subscribe">
        <form onSubmit={handleSubmit(handleAdd)}>
          <div className="father">
            <h3>Father's information</h3>
            <div className="feild">
              <label>Full name : </label>
              <input
                {...register("fatherName", nameValidate)}
                type="text"
              />
            {errors.fatherName ? <span>{errors.fatherName.message}</span> : null}
            </div>
            <div className="feild">
              <label> Age : </label>
              <input {...register("fatherAge", ageValidate)} type="number" />
              {errors.fatherAge ? <span>{errors.fatherAge.message}</span> : null}
            </div>

            <div className="feild">
              <label> Gender : </label>
              <input {...register("gender", genderValidate)} type="radio" value={"male"} />
              <label>Male</label>
              <input {...register("gender", genderValidate)} type="radio" value={"female"} />
              <label>Female</label>
              {errors.gender ? <span>{errors.gender.message}</span> : null}
            </div>

            <div className="feild">
              <label> Email : </label>
              <input {...register("fatherEmail", emailValidate)} type="email" />
            {errors.fatherEmail ? <span>{errors.fatherEmail.message}</span> : null}
            </div>

            <div className="feild">
              <label> phone number : </label>
              <input {...register("fatherPhone", phoneValidate)} type="text" />
            {errors.fatherPhone ? <span>{errors.fatherPhone.message}</span> : null}
            </div>

            <div className="feild">
              <label> ID :</label>
              <input {...register("fatherID", IDValidate)} type="text" />
            {errors.fatherID ? <span>{errors.fatherID.message}</span> : null}

            </div>
          </div>

          <hr />

          <div className="son">
            <h3>Your child information</h3>
            <div className="feild">
              <label> Name : </label>
              <input {...register("sonName", nameValidate)} type="text" />
            {errors.sonName ? <span>{errors.sonName.message}</span> : null}

            </div>
            <div className="feild">
              <label> Age : </label>
              <input {...register("sonAge", ageChildValidate)} type="number" />
            {errors.sonAge ? <span>{errors.sonAge.message}</span> : null}

            </div>

            <div className="feild">
              <label> Gender : </label>
              <input {...register("Sgender", genderValidate)} type="radio" value={"male"} />
              <label>Male</label>
              <input {...register("Sgender",genderValidate)} type="radio" value={"female"} />
              <label>Female</label>
            {errors.Sgender ? <span>{errors.Sgender.message}</span> : null}

            </div>

            <div className="feild">
              <label>Son photo : </label>
              <input {...register("photo", photoValidate)} type="file" accept="image/*" onChange={handlepic} />
            {errors.photo ? <span>{errors.photo.message}</span> : null}
            </div>
          </div>

          <button disabled={isLoading} type="submit">
            add student
          </button>
        </form>
        {/* {errors.fatherEmail &&<span>{errors.fatherEmail.message}</span> } */}
        {/* <span>{errors.fatherEmail.message}</span> */}
      </div>
    </div>
  );
}

export default Subscribe;
