import { HeaderProps } from "./header";
import Stats from "../Stats/Stats";

const style = {
  header: `flex justify-between items-center mb-6`,
  heading: `text-3xl font-medium italic`,
  notItalic: `not-italic`,
  separator: `opacity-75 mb-6`,
};

export default function Header({ tasks }: HeaderProps) {
  return (
    <div className={style.header}>
      <h3 className={style.heading}>
        <span className={style.notItalic}>📝</span> Todo App
      </h3>
      <Stats tasks={tasks} />
    </div>
  );
}
