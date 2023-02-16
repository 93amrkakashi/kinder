import { doc, updateDoc } from "firebase/firestore";
import React from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import { db } from "../../../firebase";
import { useStudent } from "../../../utils/hooks/students";

function Student() {
  const { id } = useParams();

  const { student, isLoading } = useStudent(id);
  console.log(student);


  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  async function updateUser(data) {
    const docRef = doc(db, "students", student?.id);
    await updateDoc(docRef, {
      payment: data.pay,
    });
    // console.log(data);
    // navigate(0);
  }
  if (isLoading) return "loading data ...";
  return (
    <div className="student-info">
      <img width={"180px"} src={student.picture} alt="" />

      <p>Student name : {student.sonName}</p>
      <p>Student age : {student.sonAge} years</p>
      <p>Student gender : {student.sonGender}</p>
      <p>Parent name : {student.fatherName}</p>
      <p>Parent gender : {student.fatherGender}</p>
      <p>Parent email : {student.fatherEmail}</p>
      <p>Parent phone number : {student.fatherPhone}</p>

      {student?.sonAge <= "4" && <p>Class : Infants</p>}
      {student?.sonAge > "4" && student?.sonAge <= "6" && <p>Class : Kids</p>}
      {student?.sonAge > "6" && <p>Class : Early Kindergarten</p>}
      {student?.payment == "true" ?<p className="ok">Payment : Yes</p> : <p className="no">Payment : No</p>}



      <form onSubmit={handleSubmit(updateUser)}>
              <div className="feild-2">
                <input {...register("pay")} type="radio" value={true} />
                <label>Paid</label>
              </div>

              <div className="feild-2">
                <input {...register("pay")} type="radio" value={false} />
                <label>Not paid</label>
              </div>
              <button type="submit">edit payment</button>
            </form>
    </div>
  );
}

export default Student;
