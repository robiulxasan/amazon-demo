import { createBrowserRouter } from "react-router-dom";
import ManageInventory from "../components/ManageInventory/ManageInventory";
import Review from "../components/Review/Review";
import Shop from "../components/Shop/Shop";
import Main from "../Layout/Main";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Shop/>,
      },
      {
        path: "/review",
        element: <Review />,
      },
      {
        path: "/manageInventory",
        element: <ManageInventory />,
      },
    ],
  },
]);
export default router;
