import React from "react";
import "./App.css";
import "antd/dist/reset.css";
import { Menu } from "antd";
import { Route, Routes, useNavigate } from "react-router-dom";
import {
  DashboardOutlined,
  HomeOutlined,
  PoweroffOutlined,
  UnorderedListOutlined,
  UserOutlined,
} from "@ant-design/icons";

const App = () => {
  return (
    <div className="flex flex-col flex-1 h-screen">
      <Header />
      <div className="flex flex-row flex-1">
        <SideMenu />
        <Content />
      </div>
      <Footer />
    </div>
  );
};

function Header() {
  return (
    <div className="h-16 bg-blue-300 text-white flex justify-center items-center font-bold">
      Header
    </div>
  );
}
function Footer() {
  return (
    <div className="h-16 bg-gray-400 text-black flex justify-center items-center font-bold">
      Footer
    </div>
  );
}

function SideMenu() {
  const navigate = useNavigate();
  return (
    <Menu
      onClick={({ key }) => {
        if (key === "sign-out") {
          // sign out feature here!
        } else {
          navigate(key);
        }
      }}
      defaultSelectedKeys={[window.location.pathname]}
      items={[
        { label: "Home", key: "/", icon: <HomeOutlined /> },
        {
          label: "Dashboard",
          key: "/dashboard",
          icon: <DashboardOutlined />,
        },
        {
          label: "User List",
          key: "/user-list",
          icon: <UnorderedListOutlined />,
          children: [
            { label: "Active Users", key: "/active-users" },
            { label: "Disabled Users", key: "/disabled-users" },
          ],
        },
        { label: "Profile", key: "/profile", icon: <UserOutlined /> },
        {
          label: "Sign Out",
          key: "sign-out",
          icon: <PoweroffOutlined />,
          danger: true,
        },
      ]}
    ></Menu>
  );
}
function Home() {
  return <h1>Home Component</h1>;
}
function Content() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/dashboard" element={<div>Dashboard</div>}></Route>
        <Route
          path="/active-users"
          element={<div>Active User List</div>}
        ></Route>
        <Route
          path="/disabled-users"
          element={<div>Disabled User List</div>}
        ></Route>
        <Route path="/profile" element={<div>Profile</div>}></Route>
      </Routes>
    </div>
  );
}

export default App;
