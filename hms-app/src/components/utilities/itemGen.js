import Armor from "../../classes/armor";

const armorGen = () => {
  // name = "naming error", weight = 0, armorClass = 0, durCurrent = 1, durMax = 1, bonuses = []

  const name = "Test armor";
  const weight = 10;
  const armorClass = 1;
  const durabilityCurrent = 4;
  const durabilityMax = 10;
  const bonuses = [];
  const newArmor = new Armor(
    name,
    weight,
    armorClass,
    durabilityCurrent,
    durabilityMax,
    bonuses
  );

  return newArmor;
};

export { armorGen };
