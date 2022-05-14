import {
  Button,
  Card,
  Col,
  DatePicker,
  Form,
  Input,
  Modal,
  Row,
  Select,
} from "antd";
import React, { useEffect } from "react";
import moment from "moment";
// import { removeTargetSubTask } from "../../../actions/createOrEditTaskActions";

export default function ModalSubTask({
  selectedSubTask,
  setSelectedSubTask,
  updateSubTask,
  taskInfo,
  removeTargetSubTask,
}) {
  const [form] = Form.useForm();

  function handleFinish(value) {
    updateSubTask({
      ...selectedSubTask,
      ...value,
    });
  }

  function handleDelete() {
    const subTask = form.getFieldsValue(true);
    removeTargetSubTask({
      ...subTask,
      start: moment(subTask.start).toString(),
      end: moment(subTask.end).toString(),
      id: taskInfo.id,
    });
    setSelectedSubTask(null);
  }

  useEffect(() => {
    form.setFieldsValue({
      ...selectedSubTask,
      start: moment(selectedSubTask.start),
      end: moment(selectedSubTask.end),
    });
  }, []);

  return (
    <Modal
      title="Update Subtask"
      visible={true}
      onOk={() => updateSubTask(form)}
      onCancel={() => setSelectedSubTask(null)}
      footer={null}
    >
      <Form
        form={form}
        onFinish={handleFinish}
        labelAlign="left"
        labelCol={{ span: 5 }}
      >
        <Form.Item label="Name task" name="title">
          <Input />
        </Form.Item>
        <Form.Item label="Start" name="start">
          <DatePicker
            format="YYYY-MM-DD HH:mm:ss"
            showTime={{ defaultValue: moment("00:00:00", "HH:mm:ss") }}
          />
        </Form.Item>
        <Form.Item label="End" name="end">
          <DatePicker
            format="YYYY-MM-DD HH:mm:ss"
            showTime={{ defaultValue: moment("00:00:00", "HH:mm:ss") }}
          />
        </Form.Item>
        <Form.Item label="Status" name="status">
          <Select style={{ width: 120 }}>
            <Select.Option value="Start">Start</Select.Option>
            <Select.Option value="Inprogress">Inprogress</Select.Option>
            <Select.Option value="End">End</Select.Option>
            <Select.Option value="Failed">Failed</Select.Option>
          </Select>
        </Form.Item>

        <Row>
          <Col offset="16" span="4">
            <Form.Item>
              <Button onClick={handleDelete}>Delete</Button>
            </Form.Item>
          </Col>
          <Col span="4">
            <Form.Item>
              <Button type="primary" htmlType="submit">
                Update
              </Button>
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </Modal>
  );
}
