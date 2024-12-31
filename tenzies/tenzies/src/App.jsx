import HeaderAndPara from "./components/HeaderAndPara";
import ButtonComponent from "./components/ButtonComponent";
import Dice from "./components/Dice";
import React from "react";

export default function App() {
  const [diceValue, setDiceValue] = React.useState([
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  ]);
  const [click, setClick] = React.useState(1);

  React.useEffect(() => {
    const randomNumber = Array.from(
      { length: 10 },
      () => Math.floor(Math.random() * 6) + 1
    );
    setDiceValue(randomNumber);
  }, [click]);

  const diceValues = diceValue.map(function (val, index) {
    return <Dice value={val} key={index} />;
  });

  function roll() {
    return setClick(click + 1);
  }

  return (
    <main className="bg-white h-full rounded flex flex-col justify-between items-center px-20 py-20">
      <HeaderAndPara />
      <div className="diceGrid grid gap-4 grid-cols-5 grid-rows-2">
        {diceValues}
      </div>
      <ButtonComponent roll={roll} />
    </main>
  );
}
