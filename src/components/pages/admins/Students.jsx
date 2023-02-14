import React, { useContext } from "react";
import { StudentContext } from "../../../context";
import Table from "../../layout/Table";


function Students() {
  const { students,search } = useContext(StudentContext)
  return (
    <div>
      <Table students={students} search={search} />
    </div>
  );
}

export default Students;
