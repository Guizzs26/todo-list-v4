import { TaskEntity } from "../TaskItem/task.item";

export type TaskListProps = {
  tasks: TaskEntity[];
  onDeleteTask: (id: string) => void;
  onCheckTask: (id: string) => void;
};
