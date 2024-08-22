import React, { useState } from "react";
import { armorGen, weaponGen, accessoryGen } from "./utilities/itemGen";
import ItemsWindow from "./ItemsWindow";
import MapGrid from "./MapGrid";

const MainWindow = (props) => {
  const [armor, setArmor] = useState(undefined);
  const [weapon, setWeapon] = useState(undefined);
  const [accessory, setAccessory] = useState(undefined);
  const [gold, setGold] = useState(0);
  const [inventory, setInventory] = useState([]);
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
    return setAccessory(newAccessory);
  };
  return (
    <div>
      <p>
        <strong>Main Window</strong>
      </p>
      <div>
        <button onClick={_handleArmorGen}>random armor</button>
        <button onClick={_handleWeaponGen}>random weapon</button>
        <button onClick={_handleAccessoryGen}>random accessory</button>
      </div>
      {(armor || weapon || accessory) && (
        <ItemsWindow armor={armor} weapon={weapon} accessory={accessory} />
      )}
      <MapGrid />
    </div>
  );
};

export default MainWindow;
