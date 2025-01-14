export default function List(props) {
  return (
    <>
      <li className="w-full flex justify-between items-center" id={props.id}>
        <div>{props.value}</div>
        <div className="flex gap-2">
          <button className="text-xs text-green-500" onClick={props.done}>
            Mark as Done
          </button>
          <button className="text-red-500 text-xs" onClick={props.deleteTask}>
            Delete
          </button>
        </div>
      </li>
      <hr className="mb-2 mt-2" />
    </>
  );
}
