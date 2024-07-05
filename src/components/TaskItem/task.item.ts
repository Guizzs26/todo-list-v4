export type TaskEntity = {
  id: string;
  taskDescription: string;
  isCompleted: boolean;
};

export type TaskItemProps = {
  task: TaskEntity;
  onDeleteTask: (id: string) => void;
  onCheckTask: (id: string) => void;
};
