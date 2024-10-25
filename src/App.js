
import CreateTeam from "./Component/createTeam/CreateTeam";
import Team from "./Pages/TeamCreation/Team";
import { createBrowserRouter,RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path:"/",
    element:<Team/>
  },{
    path:"/create",
    element:<CreateTeam/>
  }
])

function App() {
  return (
   <div>
    <RouterProvider router={router}/>
    </div>
  );
}

export default App;
