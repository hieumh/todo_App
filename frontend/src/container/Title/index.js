import { UnorderedListOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Col, Dropdown, Image, Menu, Row, Typography } from "antd";
import { Header } from "antd/lib/layout/layout";
import React from "react";
import firebase from "firebase/compat/app";
import { connect } from "react-redux";

const menu = (
  <Menu>
    <Menu.Item>
      <Button type="text">Profile</Button>
    </Menu.Item>
    <Menu.Item>
      <Button type="text" onClick={() => firebase.auth().signOut()}>
        Sign out
      </Button>
    </Menu.Item>
  </Menu>
);

function Title({ userInfor }) {
  console.log("this is userInfor:", userInfor);
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
        <Col span={4} offset={10}>
          <Dropdown
            overlay={menu}
            placement="bottom"
            arrow={{ pointAtCenter: true }}
          >
            <Button
              size="large"
              type="link"
              className="text-black py-[4px]"
              icon={
                <Image
                  src={userInfor.photoURL}
                  height="28px"
                  className="rounded-full mr-4 mt-2 h-[28px] w-[28px]"
                  preview={false}
                />
              }
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

export default connect((state) => ({
  userInfor: state.account._delegate,
}))(Title);
