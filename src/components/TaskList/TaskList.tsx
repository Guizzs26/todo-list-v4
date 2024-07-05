import {} from "react";

import TaskItem from "../TaskItem/TaskItem";
import { TaskListProps } from "./task.list";

const style = {
  taskList: `list-none`,
};

export default function TaskList({
  tasks,
  onDeleteTask,
  onCheckTask,
}: TaskListProps) {
  return (
    <ul className={style.taskList}>
      {tasks.map((task) => (
        <TaskItem
          task={task}
          onDeleteTask={onDeleteTask}
          onCheckTask={onCheckTask}
          key={task.id}
        />
      ))}
    </ul>
  );
}
