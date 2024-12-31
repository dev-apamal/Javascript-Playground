export default function DiceSet(props) {
  return (
    <div className="diceGrid grid gap-4 grid-cols-5 grid-rows-2">
      {props.dice}
    </div>
  );
}
