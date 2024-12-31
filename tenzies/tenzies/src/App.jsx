import HeaderAndPara from "./components/HeaderAndPara";
import ButtonComponent from "./components/ButtonComponent";
import Dice from "./components/Dice";
import DiceSet from "./components/DiceSet";

export default function App() {
  const values = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const diceValues = values.map(function (val) {
    return <Dice value={val} />;
  });

  return (
    <main className="bg-white h-full rounded flex flex-col justify-between items-center px-20 py-20">
      <HeaderAndPara />
      <DiceSet dice={diceValues} />
      <ButtonComponent />
    </main>
  );
}
