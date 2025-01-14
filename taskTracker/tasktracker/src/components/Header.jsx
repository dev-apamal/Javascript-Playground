export default function Header() {
  const date = new Date();
  let day = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();
  let currentDate = `${day}/${month}/${year}`;
  return (
    <header className="p-10 text-2xl font-bold">
      <h1>Today {currentDate}</h1>
    </header>
  );
}
