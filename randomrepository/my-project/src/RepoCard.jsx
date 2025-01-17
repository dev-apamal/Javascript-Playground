export default function RepoCard(props) {
  return (
    <div className="repoContainer flex flex-col  items-start border border-solid rounded p-4 w-full gap-2">
      <h2 className="font-semibold text-xl">{props.title}</h2>
      <p className="text-gray-500">{props.description}</p>
      <div className="stats flex w-full justify-between">
        <p className="text-xs text-gray-500">{props.language}</p>
        <p className="text-xs text-gray-500">{props.liked} Liked</p>
        <p className="text-xs text-gray-500">{props.forks} Forks</p>
        <p className="text-xs text-gray-500">{props.issues} Issues</p>
      </div>
    </div>
  );
}
