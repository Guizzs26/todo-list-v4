import { ChangeEvent, FormEvent, useState } from "react";

import { AiOutlinePlus } from "react-icons/ai";

const style = {
  background: `w-screen h-screen flex justify-center items-center bg-[#d0ebff]`,
  container: `max-w-[500px] w-full px-5 py-4 rounded-2xl shadow-md bg-[#fff]`,
  heading: `text-3xl font-medium italic mb-8`,
  notItalic: `not-italic`,
  form: `flex justify-between mb-8`,
  formInput: `w-full h-[54px] text-2xl grow focus:border-[#748ffc] border-2 border-transparent outline-none px-5 rounded-md bg-[#f1f3f5]`,
  formBtn: `w-14 text-3xl flex justify-center items-center shrink-0 transition-all duration-500 ease hover:bg-[#5c7cfa] ml-2 rounded-md text-slate-100 bg-[#748ffc]`,
};

export default function TodoApp() {
  const [taskName, setTaskName] = useState<string>("");

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTaskName(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (taskName.trim() === "") return;

    setTaskName("");
  };

  return (
    <div className={style.background}>
      <div className={style.container}>
        <h3 className={style.heading}>
          <span className={style.notItalic}>📝</span> Todo App
        </h3>

        <hr className="opacity-[0.8] mb-6" />

        <form onSubmit={handleSubmit} className={style.form}>
          <input
            type="text"
            placeholder="Add new task"
            className={style.formInput}
            value={taskName}
            onChange={handleInputChange}
          />

          <button type="submit" className={style.formBtn}>
            <AiOutlinePlus />
          </button>
        </form>
      </div>
    </div>
  );
}
