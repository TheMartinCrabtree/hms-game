import React, { useState } from "react";
import { armorGen } from "./utilities/itemGen";
import ItemsWindow from "./ItemsWindow";

const MainWindow = (props) => {
  const [armor, setArmor] = useState(undefined);
  console.log("current armor value: ", armor);
  const handleArmorGen = () => {
    const newArmor = armorGen();
    return setArmor(newArmor);
  };
  return (
    <div>
      <p>Main Window</p>
      <div>
        <button onClick={handleArmorGen}>Click Me</button>
      </div>
      <ItemsWindow armor={armor} />
    </div>
  );
};

export default MainWindow;
