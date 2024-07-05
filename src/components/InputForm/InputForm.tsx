import { ChangeEvent, FormEvent, useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
// import { InputFormProps } from "./input.form.type";

import { v4 as uuidv4 } from "uuid";

import { collection, addDoc } from "firebase/firestore";
import { db } from "../../firebase/firabase.config";

const style = {
  form: `flex justify-between mb-8`,
  formInput: `w-full h-[54px] text-2xl grow focus:border-[#748ffc] border-2 border-transparent outline-none px-5 rounded-md bg-[#f1f3f5]`,
  formBtn: `w-14 text-3xl flex justify-center items-center shrink-0 transition-all duration-500 ease hover:bg-[#5c7cfa] ml-2 rounded-md text-slate-100 bg-[#748ffc]`,
};

export default function InputForm() {
  const [taskName, setTaskName] = useState<string>("");

  // Create task

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTaskName(e.target.value);
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (taskName.trim() === "") return;

    try {
      await addDoc(collection(db, "tasks"), {
        id: uuidv4(),
        taskName,
        isCompleted: false,
      });

      setTaskName("");
    } catch (err) {
      console.error("Error adding document: ", err);
    }
  };

  return (
    <form onSubmit={handleSubmit} className={style.form}>
      <input
        type="text"
        placeholder="Add new task"
        className={style.formInput}
        value={taskName}
        onChange={handleInputChange}
      />

      <button type="submit" className={style.formBtn}>
        <AiOutlinePlus size={28} />
      </button>
    </form>
  );
}
