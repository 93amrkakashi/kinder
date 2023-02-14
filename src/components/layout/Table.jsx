import React, { useContext } from "react";
import { Link } from "react-router-dom";
// import { StudentContext } from "../../context";
// import { StudentContext } from "../../../context";
function Table({ students,search }) {
  // const { students,search,parents } = useContext(StudentContext)

  return (
    <div>
          <table>
        <thead>
          <tr class="table-headers">
            <th>Student name</th>
            <th>Age</th>
            <th>Gender</th>
            <th>Class</th>
            <th>Parent name</th>
            <th>payment status</th>
            
          </tr>
        </thead>
        <tbody>
          {!search ? students?.map((student) => (
            <tr key={student?.ID}>
              <td><Link to={`/admin/childerns/${student?.id}`}>{student?.sonName}</Link></td>
              <td>{student?.sonAge} Years</td>
              <td>{student?.sonGender}</td>
              {student?.sonAge <= "4" && <td >Infants</td>}
              {student?.sonAge > "4" && student?.sonAge <= "6" && <td >Kids</td>}
              {student?.sonAge > "6" && <td >Early Kindergarten</td>}
            
              <td>{student?.fatherName}</td>
              {student?.payment ?<td className="ok">Yes</td> : <td className="no">No</td>}
              
            </tr>
          )):students?.map((element) => 
           {if(element?.sonName === search) return <tr key={element?.ID}>
              <td><Link to={`/admin/childerns/${element?.id}`}>{element?.sonName}</Link></td>
           <td>{element?.sonAge} Years</td>
           <td>{element?.sonGender}</td>
           {element?.sonAge <= "4" && <td >Infants</td>}
              {element?.sonAge > "4" && element?.sonAge <= "6" && <td >Kids</td>}
              {element?.sonAge > "6" && <td >Early Kindergarten</td>}
           <td>{element?.fatherName}</td>
           {element?.payment ?<td className="ok">Yes</td> : <td className="no">No</td>}

         </tr>}) }
        </tbody>
      </table>
    </div>
  )
}

export default Table