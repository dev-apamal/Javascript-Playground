export default function Header() {
  return (
    <header className="w-full h-16 flex p-4 justify-between shadow">
      <img src="./src/assets/images/logo/Logo_NIKE.svg.png" alt="logo" />
      <div className="flex gap-4">
        <i class="search bi bi-search"></i>
        <i class="person bi bi-person"></i>
        <i class="cart bi bi-bag"></i>
        <i class="menu bi bi-list"></i>
      </div>
    </header>
  );
}
