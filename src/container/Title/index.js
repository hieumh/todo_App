import { UnorderedListOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Col, Dropdown, Menu, Row, Typography } from "antd";
import { Header } from "antd/lib/layout/layout";
import React from "react";
import firebase from "firebase/compat/app";

const menu = (
  <Menu>
    <Menu.Item>
      <Button type="text">Profile</Button>
    </Menu.Item>
    <Menu.Item>
      <Button type="text" onClick={() => firebase.auth().signOut()}>Sign out</Button>
    </Menu.Item>
  </Menu>
);

export default function Title() {
  return (
    <Header style={{ backgroundColor: "white" }}>
      <Row>
        <Col span="10">
          <UnorderedListOutlined
            style={{ fontSize: "24px", display: "inline" }}
          />
          <Typography.Title
            level={3}
            style={{ margin: "auto 16px", display: "inline" }}
          >
            Management all the task
          </Typography.Title>
        </Col>
        <Col span={3} offset={11}>
          <Dropdown
            overlay={menu}
            placement="bottom"
            arrow={{ pointAtCenter: true }}
          >
            <Button
              size="large"
              shape="round"
              icon={<UserOutlined />}
              onClick={() => this.enterLoading(2)}
            >
              {firebase.auth().currentUser.displayName}
            </Button>
          </Dropdown>
        </Col>
      </Row>
    </Header>
  );
}
