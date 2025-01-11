import React from "react";
import Header from "./components/Header";
import Language from "./components/Language";

export default function App() {
  const [languages, setLanguage] = React.useState([
    {
      language: "HTML",
      color: "bg-orange-600",
    },
    {
      language: "CSS",
      color: "bg-blue-500",
    },
    {
      language: "Javascript",
      color: "bg-yellow-300",
    },
    {
      language: "React",
      color: "bg-cyan-400",
    },
    {
      language: "Typescript",
      color: "bg-blue-600",
    },
    {
      language: "Node.js",
      color: "bg-green-600",
    },
    {
      language: "Python",
      color: "bg-yellow-400",
    },
    {
      language: "Ruby",
      color: "bg-red-600",
    },
    {
      language: "Assembly",
      color: "bg-blue-800",
    },
  ]);

  const setofLanguages = languages.map(function (item) {
    return <Language value={item.language} color={item.color} />;
  });

  return (
    <main className="bg-neutral-900 flex flex-col h-screen px-6 py-6 gap-10">
      <Header />
      <div className="languagesContainer flex flex-wrap justify-center items-center gap-2">
        {setofLanguages}
      </div>
    </main>
  );
}
