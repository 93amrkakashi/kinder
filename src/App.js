import { useState } from "react";
import { RouterProvider } from "react-router-dom";
import { StudentContext } from "./context";
import { useParents, useStudents } from "./utils/hooks/students";

import { routes } from "./utils/routes";

function App() {
  const [search, setsearch] = useState(null)
  const { students, isLoading } = useStudents(search);
  const { parents } = useParents(search);

  return (
    <>
      <StudentContext.Provider value={{students,parents,search,setsearch}}>
        <RouterProvider router={routes} />
      </StudentContext.Provider>
    </>
  );
}

export default App;
