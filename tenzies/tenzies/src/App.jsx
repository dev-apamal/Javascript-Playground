import HeaderAndPara from "./components/HeaderAndPara";
import ButtonComponent from "./components/ButtonComponent";
import Dice from "./components/Dice";
import React, { useRef } from "react";

export default function App() {
  const [diceValue, setDiceValue] = React.useState([]);
  const [click, setClick] = React.useState(0);

  /* 
  Generates an array of ten random numbers ranging from 1 to 6. 
  Invoked each time the button is clicked to refresh the values. 
  */
  React.useEffect(() => {
    const randomNumber = Array.from(
      { length: 10 },
      () => Math.floor(Math.random() * 6) + 1
    );
    setDiceValue(randomNumber);
  }, [click]);

  /* Generates a new array by mapping values from the `diceValue` array. This transformed array is subsequently used to render elements in the main display. */
  const diceValues = diceValue.map((val, index) => (
    <Dice value={val} key={index} click={recordDice} />
  ));

  function recordDice() {
    // Take the value from that specific button
    // Change the style of that specific button
    // Stops rendering that specific button again
    console.log("Clicked");
  }

  /* Button handler to generate a random number, triggering the associated `useEffect` hook to execute its side effects. */
  const roll = (event) => setClick(click + 1);

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
