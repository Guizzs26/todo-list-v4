const style = {
  heading: `text-3xl font-medium italic mb-7`,
  notItalic: `not-italic`,
  separator: `opacity-[0.8] mb-6`,
};

export default function Header() {
  return (
    <div>
      <h3 className={style.heading}>
        <span className={style.notItalic}>📝</span> Todo App
      </h3>

      <hr className={style.separator} />
    </div>
  );
}
