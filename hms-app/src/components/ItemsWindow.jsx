import React, { useState } from "react";

const ItemsWindow = (props) => {
  const { armor, weapon, accessory } = props;

  const _renderArmor = () => {
    const { name, weight, armorClass, durCurrent, durMax, bonuses } = armor;
    return (
      <div>
        <b>Armor:</b>
        <div>Name: {name}</div>
        <div>Weight: {weight}</div>
        <div>Armor Class: {armorClass}</div>
        <div>
          Durability: {durCurrent} / {durMax}
        </div>
      </div>
    );
  };

  const _renderWeapon = () => {
    const { name, weight, damageDice, durCurrent, durMax, bonuses } = weapon;
    return (
      <div>
        <b>Weapon:</b>
        <div>Name: {name}</div>
        <div>Weight: {weight}</div>
        <div>Damage: {damageDice}</div>
        <div>
          Durability: {durCurrent} / {durMax}
        </div>
      </div>
    );
  };

  const _renderAccessory = () => {
    const { name, bonuses } = accessory;
    return (
      <div>
        <b>Accessory:</b>
        <div>Name: {name}</div>
      </div>
    );
  };

  return (
    <div>
      <div>
        <strong>Equipment:</strong>
      </div>
      <div>
        <div>{armor && _renderArmor()}</div>
        <div>{weapon && _renderWeapon()}</div>
        <div>{accessory && _renderAccessory()}</div>
      </div>
    </div>
  );
};

export default ItemsWindow;
