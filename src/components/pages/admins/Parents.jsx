import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { StudentContext } from "../../../context";
import Table from "../../layout/Table";


function Parents() {
  const { parents, search } = useContext(StudentContext)
// console.log(search)
//   console.log(students?.filter((el) => el?.fatherName === search));

  return (
    <div>
      {/* <Table students={parents} search={search} /> */}

      <table>
        <thead>
          <tr className="table-headers">
            <th>Parent name</th>
            <th>Phone number</th>
            <th>Email</th>
            <th>Children</th>
          </tr>
        </thead>
        <tbody>
          {!search?parents?.map((parent) => (
            <tr>
              <td>{parent?.fatherName}</td>
              <td>{parent?.fatherPhone}</td>
              <td>{parent?.fatherEmail}</td>
              <td><Link to={`/admin/childerns/${parent?.id}`}> {parent?.sonName}</Link></td>
            </tr>
          )):parents?.map((el) => 
          {if(el.fatherName === search) return <tr key={el?.ID}>
          <td>{el?.fatherName}</td>
          <td>{el?.fatherPhone} Years</td>
          <td>{el?.fatherEmail}</td>
          <td><Link to={`/admin/childerns/${el?.id}`}> {el?.sonName}</Link></td>

        </tr>}) }
        </tbody>
      </table>
    </div>
  );
}

export default Parents;
