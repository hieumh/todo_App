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
  Typography,
} from "antd";
import React, { useState } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import * as actionTypes from "../../constant/ActionTypes";
import ModalSubTask from "../../container/form/ModalSubTask.js/index.js";
import { connect } from "react-redux";

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

function CreateOrEditTask({eventCalendar, selectedTask, setSelectedTask, addSubTask, updateSubTask}) {
  const [eventCalendar, setEventCalendar] = useState([]);
  const [selectedTask, setSelectedTask] = useState(null);
  const [form] = Form.useForm();

  function handleRangeChange(event) {
    const newEvent = {
      ...event,
      id: eventCalendar.length,
      title: actionTypes.DEFAULT_NAME_TASK + " " + (eventCalendar.length + 1),
      status: "Start",
    };
    setEventCalendar((prev) => [...prev, newEvent]);
  }

  function handleSelectEvent(event) {
    setSelectedTask(event);
  }

  function handleSubmit(value) {
    console.log("This is submit:", value);
  }

  function updateSubTask(updateValue) {
    setSelectedTask(null);
    const newEventCalendar = [...eventCalendar];
    newEventCalendar[updateValue.id] = {
      ...updateValue,
    };
    setEventCalendar(newEventCalendar);
  }

  return (
    <div>
      <Card>
        <Form
          form={form}
          // onValuesChange={handleValuesFormChange}
          onFinish={handleSubmit}
        >
          <Typography.Title level={4}>Name of the task</Typography.Title>
          <Form.Item name="nameTask">
            <Input placeholder="Name task" />
          </Form.Item>

          <Row>
            <Col span="8">
              <Form.Item name="status" label="Status">
                <Select defaultValue="Start" style={{ width: 120 }}>
                  <Select.Option value="Start">Start</Select.Option>
                  <Select.Option value="Inprogress">Inprogress</Select.Option>
                  <Select.Option value="End">End</Select.Option>
                  <Select.Option value="Failed">Failed</Select.Option>
                </Select>
              </Form.Item>
            </Col>
            <Col span="8">
              <Form.Item name="statusHower" label="Status eisenhower">
                <Select defaultValue="Do" style={{ width: 120 }}>
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

          <Table
            columns={columns}
            dataSource={eventCalendar}
            pagination={{ defaultPageSize: 5 }}
          />
          <Divider />
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
            />
            <Row style={{ marginTop: "20px" }}>
              <Col span={24} style={{ textAlign: "right" }}>
                <Form.Item>
                  <Button type="primary" htmlType="submit">
                    Save
                  </Button>
                </Form.Item>
              </Col>
            </Row>
          </>
        </Form>
      </Card>
      {selectedTask ? (
        <ModalSubTask
          selectedTask={selectedTask}
          setSelectedTask={setSelectedTask}
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
    eventCalendar: state.tasks.subTasks,
    selectedTask: state.tasks.selectedTask || null,
  }),
  {
    addSubTask,
    updateSubTask,
    setSelectedTask,
  }
)(CreateOrEditTask)