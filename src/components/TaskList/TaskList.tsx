import {} from "react";

import TaskItem from "../TaskItem/TaskItem";
import { TaskListProps } from "./task.list";

const styles = {
  taskList: `list-none`,
};

export default function TaskList({
  tasks,
  onDeleteTask,
  onCheckTask,
}: TaskListProps) {
  return (
    <ul className={styles.taskList}>
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
