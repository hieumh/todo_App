import {
  DeleteOutlined,
  EditOutlined,
  PlusSquareOutlined,
} from "@ant-design/icons";
import { Button, Card, Col, Collapse, Divider, Row, Typography } from "antd";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import useShowTime from "../../hook/useShowTime";
import moment from "moment";
import { connect } from "react-redux";
import { getAllTasks, removeTargetTask } from "../../actions/taskManagementActions";

function TaskManagement({ tasks, getAllTasks, removeTargetTask }) {
  const time = useShowTime();

  useEffect(() => {
    getAllTasks();
  }, []);

  function handleRemoveTask(task) {
    removeTargetTask(task);
  }

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
          {tasks?.map((task, index) => (
            <Collapse.Panel
              key={index}
              header={task.nameTask}
              extra={
                <>
                  <Link to={"/create-or-edit-task?id=" + task.id}>
                    <EditOutlined style={{ fontSize: "24px" }} />
                  </Link>
                  <Button type="link" onClick={() => handleRemoveTask(task)}>
                    <DeleteOutlined style={{ fontSize: "24px" }} />
                  </Button>
                </>
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
          ))}
        </Collapse>
      </Card>
    </div>
  );
}

export default connect(
  (state) => ({
    tasks: state.tasks,
  }),
  {
    getAllTasks,
    removeTargetTask
  }
)(TaskManagement);
