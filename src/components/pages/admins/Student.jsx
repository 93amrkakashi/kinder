import React from "react";
import { useParams } from "react-router-dom";
import { useStudent } from "../../../utils/hooks/students";

function Student() {
  const { id } = useParams();

  const { student, isLoading } = useStudent(id);
  console.log(student);
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
      {student?.payment ?<p className="ok">Payment : Yes</p> : <p className="no">Payment : No</p>}

    </div>
  );
}

export default Student;
