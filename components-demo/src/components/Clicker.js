import { useState } from "react";

export const Clicker = () => {
  const [click, setClick] = useState(0);

  const clickHandler = (e) => {
    // setClick(click + 1);
    // setClick(5);
    setClick((oldClicks) => oldClicks + 1); //Race condition inprove
  };

  const dangerClicks = click > 20;

  if (click > 30) {
    return <h1>Finished Click</h1>;
  }

  return (
    <div>
      {dangerClicks && <h1>Danger Clicks!!! </h1>}
      <h3>{click > 10 ? "Medium Clicks" : "Normal Clicks"}</h3>
      <button onClick={clickHandler}>{click}</button>
    </div>
  );
};
