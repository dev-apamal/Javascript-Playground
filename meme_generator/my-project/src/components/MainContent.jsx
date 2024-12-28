import Form from "./Form";
import Meme from "./Meme";

export default function MainContent() {
  return (
    <main className="px-10 py-10 flex flex-col gap-10">
      <Form />
      <button className="px-4 py-4 bg-purple-700 text-white rounded">
        Get a new meme image 🖼
      </button>
      <Meme />
    </main>
  );
}
