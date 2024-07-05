import { useEffect, useState } from "react";
import { TaskEntity } from "./TaskItem/task.item";
import Header from "./Header/Header";
import InputForm from "./InputForm/InputForm";
import {
  collection,
  deleteDoc,
  doc,
  onSnapshot,
  query,
  updateDoc,
} from "firebase/firestore";
import { db } from "../firebase/firabase.config";
import TaskList from "./TaskList/TaskList";

const style = {
  background: `w-screen h-screen flex justify-center items-center bg-[#d0ebff]`,
  container: `max-w-[500px] w-full px-5 py-6 rounded-2xl shadow-md bg-[#fff]`,
};

const TodoApp = () => {
  const [tasks, setTasks] = useState<TaskEntity[]>([]);

  useEffect(() => {
    // query is a Firestore function used to create a query.
    // collection(db, 'tasks') specifies the Firestore 'tasks' collection
    // in the db database.
    // This sets up a basic query to retrieve all documents in the 'tasks' collection.
    const q = query(collection(db, "tasks"));

    // onSnapshot is a real-time listener.
    // It fires a callback function (querySnapshot) whenever there is a change in
    // the data that matches the q query.
    // This allows the component to react automatically to any changes in the Firestore
    // data in real time, without the need for manual updating or polling.
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const todosArr: TaskEntity[] = [];

      // querySnapshot callback function contains all the documents that match the query (q).
      // doc.data() retrieves the document data as a JS object.
      // as TaskEntity makes a type assertion to TS indicating that the data returned must
      // match the TaskEntity type.
      querySnapshot.forEach((doc) => {
        const data = doc.data() as TaskEntity;

        if ("taskDescription" in data) {
          todosArr.push({ ...data, id: doc.id });
        }
      });

      setTasks(todosArr);
    });

    // The return function of useEffect is used to clean up any side-effects
    // when the component is unmounted or when dependencies change.
    // unsubscribe() is a function returned by onSnapshot that cancels the real-time listener.
    return () => unsubscribe();
  }, []);

  const handleRemoveTask = async (id: string) => {
    try {
      await deleteDoc(doc(db, "tasks", id));
    } catch (err) {
      console.error("Error removing document: ", err);
    }
  };

  const handleCheckTask = async (id: string) => {
    const task = tasks.find((task) => task.id === id);
    if (task) {
      try {
        await updateDoc(doc(db, "tasks", id), {
          isCompleted: !task.isCompleted,
        });
      } catch (err) {
        console.error("Error updating document: ", err);
      }
    }
  };

  return (
    <div className={style.background}>
      <div className={style.container}>
        <Header />
        <InputForm />
        <TaskList
          tasks={tasks}
          onDeleteTask={handleRemoveTask}
          onCheckTask={handleCheckTask}
        />
      </div>
    </div>
  );
};

export default TodoApp;
