import { useRoutes } from "react-router";
import ProductList from "./pages/product/list";
import ProductAdd from "./pages/product/add";
import ProductEdit from "./pages/product/edit";
import "antd/dist/reset.css"; // Ant Design v5 reset styles
import Register from "./pages/auth/register";
import UserList from "./pages/user/list";
import Login from "./pages/auth/login";
import AdminLayout from "./layouts/Admin";
import ClientLayout from "./layouts/Client";
import { Homepage } from "./pages/Homepage";

function App() {
  const element = useRoutes([
    {
      path: "/admin",
      element: <AdminLayout />,
      children: [
        {
          path: "users", // /admin/users
          element: <UserList />,
        },
        {
          path: "products",
          element: <ProductList />,
        },
        {
          path: "product/add",
          element: <ProductAdd />,
        },
        {
          path: "product/:id/edit",
          element: <ProductEdit />,
        },
      ],
    },
    {
      path: "",
      element: <ClientLayout />,
      children: [
        {
          path: "",
          element: <Homepage />,
        },
        {
          path: "register",
          element: <Register />,
        },
        {
          path: "login",
          element: <Login />,
        },
      ],
    },
  ]);
  return <main>{element}</main>;
}

export default App;
