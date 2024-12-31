export default function Dice(props) {
  return (
    <button className="font-bold text-base bg-white px-4 py-2 shadow-lg rounded-lg">
      {props.value ? props.value : 0}
    </button>
  );
}
