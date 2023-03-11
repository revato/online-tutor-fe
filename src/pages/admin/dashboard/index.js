import { Menu, Badge, Space, Typography } from "antd";
import {
  MailOutlined,
  BellFilled,
  AppstoreOutlined,
  ShopOutlined,
  ShoppingCartOutlined,
  UserOutlined,
} from "@ant-design/icons";
import React from "react";
import logo from "./../../../images/logo.png";

function Dashboard() {
  return (
    <div className="App">
      <div className="appHeader">
        <img src={logo} alt="" height={49} width={49} />
        <Typography.Title>Admin Dashboard</Typography.Title>
        <Space>
          <Badge count={10} dot>
            <MailOutlined style={{ fontSize: 24 }} />
          </Badge>
          <Badge count={20}>
            <BellFilled style={{ fontSize: 24 }} />
          </Badge>
        </Space>
      </div>
      <Space className="sideMenuAndPageContent">
        <div className="sideMenu">
          <Menu
            onClick={(item) => {
              //item.key TBD...
            }}
            items={[
              {
                label: "Dashboard",
                icon: <AppstoreOutlined />,
                key: "/",
              },
              {
                label: "Inventory",
                icon: <ShopOutlined />,
                key: "/inventory",
              },
              {
                label: "Orders",
                icon: <ShoppingCartOutlined />,
                key: "/orders",
              },
              {
                label: "Customer",
                icon: <UserOutlined />,
                key: "/customer",
              },
            ]}
          ></Menu>
        </div>
        <div className="pageContent">Page Content</div>
      </Space>
      <div className="appFooter">
        <Typography.Link href="tel:123456789">+123456789</Typography.Link>
        <Typography.Link href="https://www.google.com/" target={"_blank"}>
          Privacy Policy
        </Typography.Link>
        <Typography.Link href="https://www.google.com/" target={"_blank"}>
          Terms of Use
        </Typography.Link>
      </div>
    </div>
  );
}

export default Dashboard;
