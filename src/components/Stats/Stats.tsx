import { StatsProps } from "./stats.type";

const styles = {
  stats: `flex flex-col `,
  totalTasksBox: `flex items-center space-x-2`,
  totalTasksLabel: `text-md font-semibold text-blue-500`,
  totalTasksCount: `text-md font-bold text-gray-800 h-8 w-8 flex items-center justify-center`,
  completedTasksBox: `flex items-center space-x-2`,
  completedTasksLabel: `text-md font-semibold text-purple-500`,
  completedTasksCount: `text-md font-bold text-gray-800  h-8 w-20 flex items-center justify-center`,
};

export default function Stats({ tasks }: StatsProps) {
  const createdTasks = tasks.length;
  const completedTasks = tasks.filter((task) => task.isCompleted).length;

  return (
    <div className={styles.stats}>
      <div className={styles.totalTasksBox}>
        <span className={styles.totalTasksLabel}>Created tasks</span>
        <span className={styles.totalTasksCount}>{createdTasks}</span>
      </div>

      <div className={styles.completedTasksBox}>
        <span className={styles.completedTasksLabel}>Completed</span>
        <span className={styles.completedTasksCount}>
          {completedTasks} of {createdTasks}
        </span>
      </div>
    </div>
  );
}
