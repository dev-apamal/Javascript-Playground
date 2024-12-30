import Header from "./components/Header.jsx";
import Meme from "./components/Meme.jsx";
import TextForm from "./components/TextForm.jsx";
import React from "react";

export default function App() {
  const [randomMeme, setRandomMeme] = React.useState([]);
  const [imageUrl, setImageUrl] = React.useState("");
  const [topText, setTopText] = React.useState("");
  const [bottomText, setBottomText] = React.useState("");
  React.useEffect(function getRandomMeme() {
    fetch("https://api.imgflip.com/get_memes")
      .then((response) => response.json())
      .then((data) => setRandomMeme(data.data.memes));
  }, []);

  function getImage() {
    setImageUrl(randomMeme[Math.floor(Math.random() * randomMeme.length)].url);
  }

  function handleTopChange(e) {
    setTopText(e.target.value);
  }

  function handleBottomChange(e) {
    setBottomText(e.target.value);
  }

  return (
    <>
      <Header />
      <main className="px-10 py-10 flex flex-col gap-10">
        <TextForm
          handleTopChange={handleTopChange}
          handleBottomChange={handleBottomChange}
        />
        <button
          onClick={getImage}
          className="px-4 py-4 bg-purple-700 text-white rounded"
        >
          Get a new meme image 🖼
        </button>
        <Meme src={imageUrl} topText={topText} bottomText={bottomText} />
      </main>
    </>
  );
}
