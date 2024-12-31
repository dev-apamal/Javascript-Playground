export default function ButtonComponent(props) {
  return (
    <button
      onClick={props.roll}
      className="px-4 py-4 bg-buttonColor rounded text-white font-bold"
    >
      Roll Now
    </button>
  );
}
