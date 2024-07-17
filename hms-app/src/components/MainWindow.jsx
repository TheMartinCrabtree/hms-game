import React, { useState } from "react";
import { armorGen, weaponGen, accessoryGen } from "./utilities/itemGen";
import ItemsWindow from "./ItemsWindow";

const MainWindow = (props) => {
  const [armor, setArmor] = useState(undefined);
  const [weapon, setWeapon] = useState(undefined);
  const [accessory, setAccessory] = useState(undefined);
  const [gold, setGold] = useState(0);
  const [inventory, setInventory] = useState([]);
  console.log("current armor value: ", armor);
  console.log("current weapon value: ", weapon);
  const _handleArmorGen = () => {
    const newArmor = armorGen();
    return setArmor(newArmor);
  };
  const _handleWeaponGen = () => {
    const newWeapon = weaponGen();
    return setWeapon(newWeapon);
  };
  const _handleAccessoryGen = () => {
    const newAccessory = accessoryGen();
    return setWeapon(newAccessory);
  };
  return (
    <div>
      <p>
        <strong>Main Window</strong>
      </p>
      <div>
        <button onClick={_handleArmorGen}>random armor</button>
        <button onClick={_handleWeaponGen}>random weapon</button>
        <button onClick={_handleWeaponGen}>random weapon</button>
      </div>
      {(armor || weapon || accessory) && (
        <ItemsWindow armor={armor} weapon={weapon} accessory={accessory} />
      )}
    </div>
  );
};

export default MainWindow;
