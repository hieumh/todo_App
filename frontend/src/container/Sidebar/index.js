import { Layout, Menu, Typography } from "antd";
import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

const { Sider, Header } = Layout;
const { SubMenu, Item } = Menu;

function Sidebar({ tasks }) {
  return (
    <Sider width={200} style={{ overflowY: "auto", overflowX: "hidden" }}>
      <Header>
        <Typography.Text level={3} style={{ color: "white" }}>
          ToDo App
        </Typography.Text>
      </Header>
      <Menu mode="inline" style={{ height: "100%", borderRight: 0 }}>
        <Item key="tasks">
          <Link to="/">Tasks management</Link>
        </Item>
        <Item key="statistics">
          <Link to="/statistics">Statistics</Link>
        </Item>

        <SubMenu key={"List Tasks"} title="List Tasks">
          {tasks?.map((task, index) => (
            <Item key={index}>
              <Link to={"/create-or-edit-task?id=" + task.id}>
                {task.nameTask}
              </Link>
            </Item>
          ))}
        </SubMenu>
      </Menu>
    </Sider>
  );
}

export default connect((state) => ({
  tasks: state.tasks,
}))(Sidebar);
