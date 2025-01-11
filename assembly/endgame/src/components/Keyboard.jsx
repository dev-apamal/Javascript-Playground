export default function Keyboard(props) {
  return (
    <div className="keyboard flex flex-wrap justify-center items-center gap-2">
      {props.keys}
    </div>
  );
}
