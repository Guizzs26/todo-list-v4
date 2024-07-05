import Header from "./Header/Header";
import InputForm from "./InputForm/InputForm";

const style = {
  background: `w-screen h-screen flex justify-center items-center bg-[#d0ebff]`,
  container: `max-w-[500px] w-full px-5 py-6 rounded-2xl shadow-md bg-[#fff]`,
};

export default function TodoApp() {
  return (
    <div className={style.background}>
      <div className={style.container}>
        <Header />
        <InputForm />
      </div>
    </div>
  );
}
