import Form from "./Form";
import Meme from "./Meme";
import React from "react";

export default function MainContent() {
  const [randomMeme, setRandomMeme] = React.useState([]);
  const [imageUrl, setImageUrl] = React.useState("");

  React.useEffect(function getRandomMeme() {
    fetch("https://api.imgflip.com/get_memes")
      .then((response) => response.json())
      .then((data) => setRandomMeme(data.data.memes));
  }, []);

  function getImage() {
    setImageUrl(randomMeme[Math.floor(Math.random() * randomMeme.length)].url);
  }

  return (
    <main className="px-10 py-10 flex flex-col gap-10">
      <Form />
      <button
        onClick={getImage}
        className="px-4 py-4 bg-purple-700 text-white rounded"
      >
        Get a new meme image 🖼
      </button>
      <Meme src={imageUrl} />
    </main>
  );
}
