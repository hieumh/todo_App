export type TaskModel = {
  id?: string;
  name: string;
  status: 'Start' | 'InProgress' | 'End' | 'Failed';
  statusHower: 'Do' | 'Schedule' | 'Delegate' | 'Delete';
};

export type SubtaskModel = {
  id?: string;
  taskId: string;
  status: 'Start' | 'InProgress' | 'End' | 'Failed';
  start: Date;
  end: Date;
  name: string;
};

export type StepModel = {
  id?: string;
  subtaskId: string;
  start: Date;
  end: Date;
  name: string;
};
