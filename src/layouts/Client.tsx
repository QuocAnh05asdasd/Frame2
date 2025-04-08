import { Layout, Menu } from "antd";
import { Link, Outlet } from "react-router-dom";
import { useUser } from "../contexts/userContext";
const { Header } = Layout;

const ClientLayout = () => {
  const { user } = useUser(); // lay du lieu trong context
  // console.log(user);

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Header>
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["1"]}>
          <Menu.Item key="1">
            <Link to="/">React Antd</Link>
          </Menu.Item>
          <Menu.Item key="2">
            <Link to="/admin">Admin</Link>
          </Menu.Item>
          <Menu.Item key="4">
            <Link to="/register">Register</Link>
          </Menu.Item>
          <Menu.Item key="6">
            <Link to="/login">Login</Link>
          </Menu.Item>
        </Menu>
      </Header>
      <main style={{ padding: "0 100px" }}>
        {/* Email User: {user?.email} */}
        <Outlet />
      </main>
    </Layout>
  );
};

export default ClientLayout;
