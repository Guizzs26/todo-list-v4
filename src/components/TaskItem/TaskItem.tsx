import { FaRegTrashAlt } from "react-icons/fa";

import { TaskItemProps } from "./task.item";

const styles = {
  li: ` flex justfify-between items-center px-5 py-2.5 mb-7 relative`,
  todoItemAfter: `w-[88%] h-[1.05px] absolute left-[10%] bottom-[-0.4rem] opacity-80 bg-[#e9ecef]`,
  leftBox: `flex items-center grow`,
  completed: `text-2xl max-w[90%] break-words flex-grow line-through text-[#adb5bd]`,
  incompleted: `text-2xl max-w[90%] break-words flex-grow`,
  checkbox: `w-[26px] h-[26px] appearance-none mr-2 border-2 border-[#748ffc] rounded-[4px] relative flex-shrink-0 cursor-pointer transition-all duration-200 ease bg-white checked:bg-[#748ffc]`,
  checkboxCheckmark: `content-[""] absolute w-[5px] h-[10px] top-1/2 left-1/2 transform -translate-x-[125%] -translate-y-[75%] rotate-45 border-solid border-white border-t-0 border-l-0 border-r-2 border-b-2`,
};

export default function TaskItem({
  task,
  onDeleteTask,
  onCheckTask,
}: TaskItemProps) {
  const handleCheckboxChange = (id: string) => {
    onCheckTask(id);
  };

  return (
    <li className={styles.li}>
      <div className={styles.leftBox}>
        <label className="relative">
          <input
            type="checkbox"
            checked={task.isCompleted}
            onChange={() => handleCheckboxChange(task.id)}
            className={styles.checkbox}
          />
          {task.isCompleted && (
            <span className={styles.checkboxCheckmark}></span>
          )}
        </label>

        <span
          className={task.isCompleted ? styles.completed : styles.incompleted}
        >
          {task.taskDescription}
        </span>
      </div>

      <span className={styles.todoItemAfter}></span>

      <button onClick={() => onDeleteTask(task.id)}>
        <FaRegTrashAlt color="#748ffc" size={24} />
      </button>
    </li>
  );
}
