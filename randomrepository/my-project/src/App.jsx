import React from "react";

export default function App() {
  const [allLanguages, setAllLanguages] = React.useState([]);

  React.useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/kamranahmedse/githunt/master/src/components/filters/language-filter/languages.json"
    )
      .then((res) => res.json())
      .then((data) => setAllLanguages(data));
  }, []);

  const selectLanguage = allLanguages.map((language) => {
    return <option value={language.value}>{language.title}</option>;
  });

  return (
    <main className="flex flex-col gap-4 justify-center items-center p-20">
      <h1 className="font-semibold text-2xl">GitHub Repository Finder</h1>
      <select name="language" id="language" className="w-full p-2 rounded">
        {selectLanguage}
      </select>
    </main>
  );
}
