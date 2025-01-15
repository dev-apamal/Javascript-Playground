export default function List(props) {
  return (
    <>
      <li className="w-full flex justify-between items-center" id={props.id}>
        <div className={props.isActive ? "no-underline" : "line-through"}>
          {props.value}
        </div>
        <div className="flex gap-2">
          <button
            className={
              props.isActive
                ? "text-xs text-green-500"
                : "text-xs text-gray-500"
            }
            onClick={props.done}
          >
            {props.isActive ? "Mark as Done" : "Undo"}
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
