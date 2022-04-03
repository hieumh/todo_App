import { EditOutlined, PlusSquareOutlined } from "@ant-design/icons";
import { Card, Col, Collapse, Divider, Row, Typography } from "antd";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import useShowTime from "../../hook/useShowTime";
import moment from "moment";
import { connect } from "react-redux";

// list task:
// task {
//     nameTask:""
//     id: ""
//     start: ""
//     end: ""
//     status: done | failed | inProgress
//     selectedSubTask:{} | null
//     subtask: [{
//     title: "",
//     id: "",
//     start: ""
//     end: ""
//     status: done | failed | inProgress
//     },]

//     }

function TaskManagement({ tasks }) {
  const time = useShowTime();
  // const tasks = [
  //   {
  //     nameTask: "hello world",
  //     // id: "",
  //     start: new Date(),
  //     end: new Date(),
  //     status: "done",
  //     subTasks: [
  //       {
  //         title: "hello",
  //         id: "0",
  //         start: new Date(),
  //         end: new Date(),
  //         status: "failed",
  //       },
  //       {
  //         title: "world",
  //         id: "1",
  //         start: new Date(),
  //         end: new Date(),
  //         status: "failed",
  //       },
  //     ],
  //   },
  // ];

  return (
    <div>
      <Card
        extra={
          <Link to="/create-or-edit-task">
            <PlusSquareOutlined
              title="Create Task"
              style={{ fontSize: "36px" }}
            />
          </Link>
        }
        title={
          <>
            <Typography.Title level={4}>Make a day</Typography.Title>
            <Typography.Text disabled>Time: {time}</Typography.Text>
          </>
        }
      >
        <Collapse>
          {tasks?.map && tasks?.map((task, index) => (
            <Collapse.Panel
              key={index}
              header={task.nameTask}
              extra={
                <Link to={"/create-or-edit-task?id=" + index}>
                  <EditOutlined style={{ fontSize: "24px" }} />
                </Link>
              }
            >
              {task?.subTasks?.map((sub, j) => (
                <div key={j}>
                  <Row>
                    <Col flex={2}>{sub.title}</Col>
                    <Col flex={1}>
                      {moment(sub.start).format("MMMM Do YYYY")}
                    </Col>
                    <Col flex={1}>{moment(sub.end).format("MMMM Do YYYY")}</Col>
                    <Col flex={1}>{sub.status}</Col>
                  </Row>
                  <Divider />
                </div>
              ))}
            </Collapse.Panel>
          )) || null }
        </Collapse>
      </Card>
    </div>
  );
}

export default connect(
  (state) => ({
    tasks: state.tasks,
  }),
)(TaskManagement);
