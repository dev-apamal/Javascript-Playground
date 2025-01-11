export default function Header(props) {
  return (
    <header className="flex flex-col justify-center items-center gap-4">
      <h1 className="text-yellow-100">Assembly Endgame</h1>
      <p className="text-center text-gray-500 text-sm">
        Guess the word in under 8 attempts to keep the programming world safe
        from Assembly!
      </p>
      <div className="statusContainer text-white py-6 px-6 bg-purple-500 w-full text-center">
        <p>Farewell HTML & CSS 🫡</p>
      </div>
    </header>
  );
}
