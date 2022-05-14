import {
  CalendarOutlined,
  CaretRightOutlined,
  PlusCircleOutlined,
} from "@ant-design/icons";
import { Collapse, Button } from "antd";
import moment from "moment";

// push all data into here
// this component will distract that data
export default function StepOfWorkCard({ subTasks }) {

  function addStepOfSubTask(subTask) {
    // subTasks
  }
  
  return (
    <Collapse
      ghost
      expandIcon={({ isActive }) => (
        <CaretRightOutlined rotate={isActive ? 90 : 0} />
      )}
    >
      {subTasks?.map((subTask, index) => (
        <Collapse.Panel
          header={
            <div className="grid w-full grid-cols-12">
              <div className="col-span-1">{subTask?.title}</div>
              <div className="col-start-11 col-end-13 flex justify-end gap-2">
                <div className="rounded-[20px] px-[6px] bg-[#2196F3] text-white">
                  <span className="inline-block">{subTask?.status}</span>
                </div>
                <CalendarOutlined className="mt-[4px]" />
                <div className="text-right">
                  {moment(subTask?.end).format("MMM Do")}
                </div>
              </div>
            </div>
          }
          key={index}
        >
          {subTask?.steps?.map((step, id) => (
            <div key={id}>{step.title}</div>
          ))}

          <Button type="dashed" className="w-full" icon={<PlusCircleOutlined />} size="large" onClick={() => addStepOfSubTask(subTask)}>
            Add step
          </Button>
        </Collapse.Panel>
      ))}
    </Collapse>
  );
}
