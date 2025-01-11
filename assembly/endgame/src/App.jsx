import React from "react";
import Header from "./components/Header";
import Language from "./components/Language";
import Output from "./components/Output";
import { codingLang, fieldValues, alphabets } from "./data";
import LanguageContainer from "./components/LanguageContainer";
import OutputFields from "./components/OutputFields";
import Keyboard from "./components/Keyboard";
import Key from "./components/Key";

export default function App() {
  const [languages, setLanguage] = React.useState(codingLang);
  const [outputValue, setOutputValue] = React.useState(fieldValues);
  const [key, setKey] = React.useState(alphabets);

  const output = outputValue.map((item, index) => (
    <Output key={index} item={item} />
  ));

  const setofLanguages = languages.map((item, index) => (
    <Language key={index} value={item.language} color={item.color} />
  ));

  const setofKeys = key.map((item, index) => <Key key={index} value={item} />);

  return (
    <main className="bg-neutral-900 flex flex-col h-screen px-6 py-6 gap-10">
      <Header />
      <LanguageContainer languages={setofLanguages} />
      <OutputFields output={output} />
      <Keyboard keys={setofKeys} />
    </main>
  );
}
