import {
  Button,
  Card,
  Col,
  Divider,
  Form,
  Input,
  Row,
  Select,
  Table,
  Tree,
  Typography,
} from "antd";
import React, { useEffect, useMemo, useState } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import * as actionTypes from "../../constant/ActionTypes";
import ModalSubTask from "../../container/form/ModalSubTask.js/index.js";
import {
  getTaskById,
  createSubTask,
  setSelectedSubTask,
  updateTargetSubTask,
  resetSelectedTask,
  updateTargetTask,
  addTask,
} from "../../actions/createOrEditTaskActions";
import { removeTargetSubTask } from "../../actions/createOrEditTaskActions";
import { connect } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { CarryOutOutlined, FormOutlined } from "@ant-design/icons";
import StepOfWorkCard from "./StepOfWorkCard";

const localizer = momentLocalizer(moment);

const columns = [
  { title: "Name task", dataIndex: "title" },
  {
    title: "Start time",
    dataIndex: "start",
    render: (time) => moment(time).format("MMMM Do YYYY, h:mm:ss a"),
  },
  {
    title: "End time",
    dataIndex: "end",
    render: (time) => moment(time).format("MMMM Do YYYY, h:mm:ss a"),
  },
  { title: "Status", dataIndex: "status" },
];


function CreateOrEditTask({
  taskInfo,
  eventCalendar,
  selectedSubTask,
  setSelectedSubTask,
  createSubTask,
  updateTargetSubTask,
  getTaskById,
  resetSelectedTask,
  updateTargetTask,
  removeTargetSubTask,
  addTask,
}) {
  const [form] = Form.useForm();
  const [firstLoad, setFirstLoad] = useState(true);
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    if (!searchParams.get("id")) {
      form.resetFields();
      resetSelectedTask();
    }
    setFirstLoad(false);
  }, []);

  useEffect(() => {
    if (firstLoad) return;

    if (!searchParams.get("id") && taskInfo.id) {
      setSearchParams({ id: taskInfo.id });
    }

    if (taskInfo.id === searchParams.get("id")) {
      form.setFieldsValue({
        ...taskInfo,
      });
    }
  }, [searchParams.get("id"), taskInfo.id, firstLoad]);

  useEffect(() => {
    getTaskById(searchParams.get("id"));
  }, [searchParams.get("id")]);

  function handleRangeChange(event) {
    createSubTask({
      id: taskInfo.id,
      data: {
        id: taskInfo.id,
        end: moment(event.end).toString(),
        start: moment(event.start).toString(),
        title: actionTypes.DEFAULT_NAME_TASK + " " + (eventCalendar.length + 1),
        status: "Start",
      },
    });
  }

  function handleSelectEvent(event) {
    setSelectedSubTask(event);
  }

  function handleSubmit(value) {
    if (searchParams.get("id")) {
      updateTargetTask({
        ...taskInfo,
        nameTask: value.nameTask,
        status: value.status,
        statusHower: value.statusHower,
      });
    } else {
      addTask({
        ...taskInfo,
        nameTask: value.nameTask,
        status: value.status,
        statusHower: value.statusHower,
      });
    }
  }

  function updateSubTask(updateValue) {
    setSelectedSubTask(null);
    updateTargetSubTask({
      ...updateValue,
      start: moment(updateValue.start).toString(),
      end: moment(updateValue.end).toString(),
      id: taskInfo.id,
      subId: updateValue.subId,
    });
  }

  return (
    <div>
      <Card>
        <Form
          form={form}
          // onValuesChange={handleValuesFormChange}
          fields={[
            {
              name: ["status"],
              value: "Start",
            },
            {
              name: ["statusHower"],
              value: "Do",
            },
          ]}
          onFinish={handleSubmit}
        >
          <Typography.Title level={4}>Name of the task</Typography.Title>
          <Form.Item name="nameTask">
            <Input placeholder="Name task" required />
          </Form.Item>

          <Row>
            <Col span="8">
              <Form.Item name="status" label="Status">
                <Select style={{ width: 120 }}>
                  <Select.Option value="Start">Start</Select.Option>
                  <Select.Option value="Inprogress">Inprogress</Select.Option>
                  <Select.Option value="End">End</Select.Option>
                  <Select.Option value="Failed">Failed</Select.Option>
                </Select>
              </Form.Item>
            </Col>
            <Col span="8">
              <Form.Item name="statusHower" label="Status eisenhower">
                <Select style={{ width: 120 }}>
                  <Select.Option value="Do">Do</Select.Option>
                  <Select.Option value="Schedule">Schedule</Select.Option>
                  <Select.Option value="Delegate">Delegate</Select.Option>
                  <Select.Option value="Delete">Delete</Select.Option>
                </Select>
              </Form.Item>
            </Col>
          </Row>

          <Divider />
          <Typography.Title level={4}>Step of work</Typography.Title>

          {/* <Table
            columns={columns}
            dataSource={eventCalendar}
            pagination={{ defaultPageSize: 5 }}
          /> */}

          <StepOfWorkCard subTasks={eventCalendar}/>

          <Divider />

          {taskInfo.id ? (
            <>
              <Typography.Title level={5}>Specify the time</Typography.Title>
              <Calendar
                selectable
                localizer={localizer}
                events={eventCalendar}
                onSelectSlot={handleRangeChange}
                onSelectEvent={handleSelectEvent}
                defaultView={"month"}
                step={60}
                startAccessor="start"
                endAccessor="end"
                style={{ height: 500 }}
              />{" "}
            </>
          ) : null}
          <Row style={{ marginTop: "20px" }}>
            <Col span={24} style={{ textAlign: "right" }}>
              <Form.Item>
                <Button type="primary" htmlType="submit">
                  Save
                </Button>
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </Card>
      {selectedSubTask ? (
        <ModalSubTask
          removeTargetSubTask={removeTargetSubTask}
          taskInfo={taskInfo}
          selectedSubTask={selectedSubTask}
          setSelectedSubTask={setSelectedSubTask}
          updateSubTask={updateSubTask}
        />
      ) : (
        <></>
      )}
    </div>
  );
}

export default connect(
  (state) => ({
    eventCalendar: state.selectedTask?.subTasks || null,
    selectedSubTask: state.selectedTask?.selectedSubTask || null,
    taskInfo: state.selectedTask || null,
  }),
  {
    createSubTask,
    getTaskById,
    resetSelectedTask,
    setSelectedSubTask,
    updateTargetSubTask,
    updateTargetTask,
    removeTargetSubTask,
    addTask,
  }
)(CreateOrEditTask);
