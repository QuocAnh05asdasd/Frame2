import { Layout, Menu } from "antd";
import { Outlet, Link, Navigate, useNavigate } from "react-router-dom";
import {
  DashboardOutlined,
  UserOutlined,
  ShoppingCartOutlined,
  LogoutOutlined,
} from "@ant-design/icons";
import { useUser } from "../contexts/userContext";

const { Header, Sider, Content } = Layout;

const AdminLayout = () => {
  const { user, logout } = useUser(); // lay du lieu trong context
  console.log(user);

  // const user = JSON.parse(localStorage.getItem("user") || "{}");

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  // const nav = useNavigate();
  // const logout = () => {
  //   localStorage.removeItem("user");
  //   nav("/login");
  // };
  return (
    <Layout style={{ minHeight: "100vh" }}>
      {/* Sidebar */}
      <Sider collapsible>
        <div
          className="logo"
          style={{
            height: 64,
            textAlign: "center",
            color: "white",
            fontSize: 20,
            lineHeight: "64px",
          }}
        >
          Admin Panel
        </div>
        <Menu theme="dark" mode="inline">
          <Menu.Item key="dashboard" icon={<DashboardOutlined />}>
            <Link to="/">Home</Link>
          </Menu.Item>
          <Menu.Item key="products" icon={<UserOutlined />}>
            <Link to="/admin/products">Products</Link>
          </Menu.Item>
          <Menu.Item key="product-add" icon={<UserOutlined />}>
            <Link to="/admin/product/add">Add Product</Link>
          </Menu.Item>
          <Menu.Item key="users" icon={<UserOutlined />}>
            <Link to="/admin/users">Users</Link>
          </Menu.Item>
          <Menu.Item key="orders" icon={<ShoppingCartOutlined />}>
            <Link to="/admin/orders">Orders</Link>
          </Menu.Item>
          <Menu.Item
            key="logout"
            icon={<LogoutOutlined />}
            danger
            onClick={logout}
          >
            Logout
          </Menu.Item>
        </Menu>
      </Sider>

      {/* Main Content */}
      <Layout>
        <Header
          style={{ background: "#fff", padding: "0 20px", textAlign: "right" }}
        >
          <span>Admin Dashboard {user?.email}</span>
        </Header>
        <Content style={{ margin: "16px", padding: 24, background: "#fff" }}>
          <Outlet /> {/* Render nội dung trang con */}
        </Content>
      </Layout>
    </Layout>
  );
};

export default AdminLayout;
