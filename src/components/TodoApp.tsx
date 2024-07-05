import { useEffect, useState } from "react";

import { TaskEntity } from "./TodoItem/todo.item";
import Header from "./Header/Header";
import InputForm from "./InputForm/InputForm";
import { collection, onSnapshot, query } from "firebase/firestore";
import { db } from "../firebase/firabase.config";

const style = {
  background: `w-screen h-screen flex justify-center items-center bg-[#d0ebff]`,
  container: `max-w-[500px] w-full px-5 py-6 rounded-2xl shadow-md bg-[#fff]`,
};

export default function TodoApp() {
  const [tasks, setTasks] = useState<TaskEntity[]>([]);

  useEffect(() => {
    // query is a firestore function used to create a query.
    // collection(db, 'tasks') specifies the firestore 'tasks' collection
    // in db database.
    // This sets up a basic query to retrieve all docs in the tasks collection;
    const q = query(collection(db, "tasks"));

    // onSnapshot is a real-time listener.
    // It fires a callback function (querySnapshot) whenev there is a change in
    // the data that matches the q query.
    // This allows the component to react automatically to any changes in the Firestore
    // data in real time, withou the need for manual updating or polling.
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const todosArr: TaskEntity[] = [];

      // querySnapshot callback function contains all the documents that match the query (q).
      // doc.data() retrieve the document data as an js object.
      // as TodoEntity makes a type assertion to TS indicating that the data returned must
      // match the TodoEntity type.
      querySnapshot.forEach((doc) => {
        const data = doc.data() as TaskEntity;

        if ("taskName" in data) {
          todosArr.push({ ...data, id: doc.id });
        }
      });

      setTasks(todosArr);
    });

    // This return function of useEffect is used to clean up any side-effects
    // when the component is unmounted or when dependencies change.
    // unsubscribe() is a function returned by onSnapshot that cancels the listener in
    // real time.
    return () => unsubscribe();
  }, []);

  return (
    <div className={style.background}>
      <div className={style.container}>
        <Header />
        <InputForm />
      </div>
    </div>
  );
}
