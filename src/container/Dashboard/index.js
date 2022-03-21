import React from "react";
import { Layout } from "antd";
import Sidebar from "../Sidebar";
import Title from "../Title";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import routes from "../../routes";

const { Content } = Layout;

export default function Dashboard() {
  return (
    <Router>
      <Layout style={{ height: "100%" }}>
        <Sidebar />
        <Layout>
          <Title />
          <Content
            style={{
              backgroundColor: "#ececec",
              padding: "30px",
              overflow: "auto",
            }}
          >
            <Routes>
              {routes.map(({ element, pathname }) => {
                return <Route key={pathname} exact path={pathname} element={element} />;
              })}
            </Routes>
          </Content>
        </Layout>
      </Layout>
    </Router>
  );
}
