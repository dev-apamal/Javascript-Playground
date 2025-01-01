import HeaderAndPara from "./components/HeaderAndPara";
import ButtonComponent from "./components/ButtonComponent";
import { v4 as uuidv4 } from "uuid";
import Dice from "./components/Dice";
import React from "react";

export default function App() {
  const [diceValue, setDiceValue] = React.useState(
    Array.from({ length: 10 }, () => ({
      id: uuidv4(),
      value: Math.floor(Math.random() * 6) + 1,
      held: false,
    }))
  );

  const diceValues = diceValue.map((dice, index) => (
    <Dice
      key={dice.id || index}
      value={dice.value}
      isHeld={dice.held}
      click={() => toggleHeld(dice.id)}
    />
  ));

  const toggleHeld = (id) => {
    setDiceValue((prevDiceValue) =>
      prevDiceValue.map((dice) =>
        dice.id === id ? { ...dice, held: true } : dice
      )
    );
  };

  const roll = () => {
    setDiceValue((prevDiceValue) => {
      const newDiceValue = prevDiceValue.map((dice) =>
        dice.held ? dice : { ...dice, value: Math.floor(Math.random() * 6) + 1 }
      );
      const allTrue = newDiceValue.every((value) => value.held === true);
      allTrue ? console.log("You won") : null;
      return newDiceValue;
    });
  };

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
