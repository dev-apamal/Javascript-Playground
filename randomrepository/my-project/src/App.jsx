import React from "react";
import RepoCard from "./RepoCard.jsx";

export default function App() {
  const [allLanguages, setAllLanguages] = React.useState([]);
  const [repositories, setRepositories] = React.useState([]);
  const [selectedLanguage, setSelectedLanguage] = React.useState("ABAP");

  //Fetch Programming Languages Data.
  React.useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/kamranahmedse/githunt/master/src/components/filters/language-filter/languages.json"
    )
      .then((res) => res.json())
      .then((data) => {
        const filteredData = data.filter((item) => item.value != "");
        setAllLanguages(filteredData);
      });
  }, []);

  React.useEffect(() => {
    fetch(
      `https://api.github.com/search/repositories?q=tetris+language:${selectedLanguage}&sort=stars&order=desc`,
      {
        headers: {
          Authorization: `Bearer personal_access_token_here`,
        },
      }
    )
      .then((response) => response.json())
      .then((data) => setRepositories(data.items));
  }, [selectedLanguage]);

  const generateRandomNumber = Math.floor(Math.random() * repositories.length);

  const selectedRepo = repositories.map((repo) => (
    <RepoCard
      key={repo.id}
      title={repo.name}
      description={repo.description}
      language={repo.language}
      liked={repo.stargazers_count}
      forks={repo.forks}
      issues={repo.open_issues_count}
    />
  ));

  const handleLanguage = (event) => {
    const id = event.currentTarget.value;
    setSelectedLanguage(id);
  };

  const languageList = allLanguages.map((language, index) => {
    return (
      <option
        key={index}
        id={index}
        value={language.value}
        onClick={handleLanguage}
      >
        {language.title}
      </option>
    );
  }, []);

  return (
    <main className="flex flex-col gap-4 justify-center items-center p-20">
      <h1 className="font-semibold text-2xl">GitHub Repository Finder</h1>
      <select
        name="language"
        id="language"
        className="w-full p-2 rounded"
        autoFocus
      >
        {languageList}
      </select>

      <div className="w-full">
        {repositories.length ? (
          selectedRepo[generateRandomNumber]
        ) : (
          <p>Loading repositories...</p>
        )}
      </div>
    </main>
  );
}
