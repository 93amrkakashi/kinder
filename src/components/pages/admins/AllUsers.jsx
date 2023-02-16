import React from "react";
import { Link } from "react-router-dom";
import { useUsers } from "../../../utils/hooks/users";

function AllUsers() {
  const { users, isLoading } = useUsers();
  // console.log(users)
  return (
    <div>
      <div>
        <table>
          <thead>
            <tr className="table-headers">
              <th>User name</th>
              <th>Phone number</th>
              <th>Email</th>
              <th>Admin?</th>
            </tr>
          </thead>
          <tbody>
            {users?.map((user) => (
              <tr>
                <td>
                  <Link to={`/users/${user?.id}`}>
                    {`${user?.firstName} ${user?.lastName}`}
                  </Link>
                </td>
                <td>{user?.phone}</td>
                <td>{user?.email}</td>
                {user?.admin == "true" ? 
                  <td className="ok">Yes</td>
                : 
                  <td className="no">No</td>
                }
              </tr>
            ))}

            {/* <td>
                <Link to={`/admin/childerns/${parent?.id}`}>
                  {parent?.sonName}
                </Link>
              </td> */}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default AllUsers;
