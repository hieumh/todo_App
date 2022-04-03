import { UnorderedListOutlined } from "@ant-design/icons";
import { Col, Row, Typography } from "antd";
import { Header } from "antd/lib/layout/layout";
import React from "react";

export default function Title() {
  return (
    <Header style={{ backgroundColor: "white" }}>
      <Row>
        <Col span="1">
          <UnorderedListOutlined style={{ fontSize: "24px" }} />
        </Col>
        {/* <Col span="9"> */}
          <Typography.Title level={3} style={{ margin: "auto 0" }}>
            Management all the task
          </Typography.Title>
        {/* </Col> */}
      </Row>
    </Header>
  );
}
