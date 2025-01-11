export default function Key(props) {
  return (
    <button className="text-white py-2 px-4 bg-yellow-500 rounded hover:bg-yellow-700">
      {props.value}
    </button>
  );
}
