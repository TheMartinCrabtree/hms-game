import React, { useState } from "react";

const ItemsWindow = (props) => {
  const { armor } = props;

  const _renderArmor = () => {
    const { name, weight, armorClass, durCurrent, durMax, bonuses } = armor;
    return (
      <div>
        <div>Name: {name}</div>
        <div>Weight: {weight}</div>
        <div>Armor Class: {armorClass}</div>
        <div>
          Durability: {durCurrent} / {durMax}
        </div>
      </div>
    );
  };

  return (
    <div>
      <div>
        <h4>Armor</h4>
        <div>{armor && _renderArmor()}</div>
      </div>
    </div>
  );
};

export default ItemsWindow;
