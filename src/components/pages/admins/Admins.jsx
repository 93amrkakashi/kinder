import React from 'react'
import { Link } from 'react-router-dom'
import { useUsers } from '../../../utils/hooks/users'

function Admins() {
  const { users, isLoading } = useUsers()
  const admins = users?.filter((user) => user?.admin == "true")
  // console.log(admins)
  return (
    <div>

        <table>
          <thead>
            <tr className="table-headers">
              <th>Admin name</th>
              <th>Phone number</th>
              <th>Email</th>
              {/* <th>Admin?</th> */}
            </tr>
          </thead>
          <tbody>
            {admins?.map((admin) => <tr key={admin?.id}>
              <td>
              <Link to={`/users/${admin?.id}`}>
              {`${admin?.firstName} ${admin?.lastName}`}
              </Link>

              </td>
              <td>{admin?.phone}</td>
              <td>{admin?.email}</td>
              {/* {admin?.admin === true ? <td className="ok">Yes</td> : <td className="no">No</td>} */}
            </tr>)}

              {/* <td>
                <Link to={`/admin/childerns/${parent?.id}`}>
                  {parent?.sonName}
                </Link>
              </td> */}
            
          </tbody>
        </table>
      </div>
  )
}

export default Admins