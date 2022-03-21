import { Layout, Menu, Typography } from "antd";
import React from "react";
import { Link } from "react-router-dom";

const { Sider, Header } = Layout;
const { SubMenu, Item } = Menu;

export default function Sidebar() {
  return (
    <Sider width={200} style={{ overflowY: "auto", overflowX: "hidden" }}>
      <Header>
        <Typography.Text level={3} style={{ color: "white" }}>
          ToDo App
        </Typography.Text>
      </Header>
      <Menu mode="inline" style={{ height: "100%", borderRight: 0 }}>
        <Item key="tasks"><Link to="/">Tasks management</Link></Item>
        <Item key="tasks"><Link to="/statistics">Statistics</Link></Item>


        <SubMenu key={"List Tasks"} title="List Tasks">
          <Item key="1">Task 1</Item>
          <Item key="2">Task 2</Item>
          <Item key="3">Task 3</Item>
        </SubMenu>
      </Menu>
    </Sider>
  );
}
