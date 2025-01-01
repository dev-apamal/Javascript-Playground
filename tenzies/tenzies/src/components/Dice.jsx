export default function Dice(props) {
  return (
    <button
      value={props.value ? props.value : 0}
      onClick={props.click}
      className={`font-bold text-base px-4 py-2 shadow-lg rounded-lg transition-all
        ${props.isHeld ? "bg-lime-500" : "bg-white"}
      `}
    >
      {props.value ? props.value : 0}
    </button>
  );
}
