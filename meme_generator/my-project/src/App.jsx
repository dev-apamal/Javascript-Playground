import Header from "./components/Header.jsx";
import Meme from "./components/Meme.jsx";
import TextForm from "./components/TextForm.jsx";
import React from "react";

export default function App() {
  const [randomMeme, setRandomMeme] = React.useState([]);
  const [meme, setMeme] = React.useState({
    imageUrl: "",
    topText: "",
    bottomText: "",
  });

  React.useEffect(function getRandomMeme() {
    fetch("https://api.imgflip.com/get_memes")
      .then((response) => response.json())
      .then((data) => setRandomMeme(data.data.memes));
  }, []);

  function getImage() {
    const randomIndex = Math.floor(Math.random() * randomMeme.length);
    setMeme((prevMeme) => ({
      ...prevMeme,
      imageUrl: randomMeme[randomIndex].url,
    }));
  }

  function handleTopChange(e) {
    const { value } = e.target;
    setMeme((prevMeme) => ({
      ...prevMeme,
      topText: value,
    }));
  }

  function handleBottomChange(e) {
    const { value } = e.target;
    setMeme((prevMeme) => ({
      ...prevMeme,
      bottomText: value,
    }));
  }

  return (
    <>
      <Header />
      <main className="px-10 py-10 flex flex-col gap-10">
        <TextForm
          handleTopChange={handleTopChange}
          handleBottomChange={handleBottomChange}
          topTextState={meme.topTextState}
          bottomTextState={meme.bottomTextState}
        />
        <button
          onClick={getImage}
          className="px-4 py-4 bg-purple-700 text-white rounded"
        >
          Get a new meme image 🖼
        </button>
        <Meme
          src={meme.imageUrl}
          topText={meme.topText}
          bottomText={meme.bottomText}
        />
      </main>
    </>
  );
}
