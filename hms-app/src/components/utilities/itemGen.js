import Armor from "../../classes/armor";

function rollD100() {
  return Math.floor(Math.random() * 100) + 1;
}

function rollD20() {
  return Math.floor(Math.random() * 20) + 1;
}

function rollD12() {
  return Math.floor(Math.random() * 12) + 1;
}

function rollD10() {
  return Math.floor(Math.random() * 10) + 1;
}

function rollD8() {
  return Math.floor(Math.random() * 8) + 1;
}

function rollD6() {
  return Math.floor(Math.random() * 6) + 1;
}

function rollD4() {
  return Math.floor(Math.random() * 4) + 1;
}

function rollD2() {
  return Math.floor(Math.random() * 2);
}

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

const armorGen = () => {
  // name = "naming error", weight = 0, armorClass = 0, durCurrent = 1, durMax = 1, bonuses = []
  let quality = "standard";
  let type = "light";
  const names = {
    prefix: [
      "Camille's",
      "Martin's",
      "Angela's",
      "Daphne's",
      "Amanda's",
      "Katie's",
      "Oni's",
      "Silly's",
      "Hari's",
      "Katarina's",
      "Aurora's",
    ],
    suffix: [
      "Shell",
      "Carapace",
      "Armor",
      "Husk",
      "Vestiments",
      "Coat",
      "Sanctuary",
      "Raiment",
      "Garb",
      "Threads",
      "Habiliment",
      "Trappings",
      "Garments",
      "Habit",
    ],
  };

  switch (rollD20()) {
    case 20:
      quality = "superior";
    case 1:
    case 2:
      quality = "poor";
    default:
      quality = "standard";
  }

  switch (rollD2()) {
    case 0:
      type = "light";
    case 1:
      type = "heavy";
    default:
      type = "light";
  }

  const getName = () => {
    return `${names.prefix[getRandomInt(names.prefix.length)]} ${
      names.suffix[getRandomInt(names.suffix.length)]
    }`;
  };

  const properties = {
    light: {
      weight: 10,
      armorClass: {
        poor: 11,
        standard: 14,
        superior: 17,
      },
      durability: {
        poor: 20,
        standard: 30,
        superior: 40,
      },
    },
    heavy: {
      weight: 20,
      armorClass: {
        poor: 15,
        standard: 18,
        superior: 20,
      },
      durability: {
        poor: 20,
        standard: 30,
        superior: 40,
      },
    },
  };

  const name = getName();
  const weight = properties[type].weight;
  const armorClass = properties[type].armorClass[quality];
  const durabilityCurrent = properties[type].durability[quality];
  const durabilityMax = properties[type].durability[quality];
  const bonuses = [];
  const newArmor = new Armor(
    name,
    weight,
    armorClass,
    durabilityCurrent,
    durabilityMax,
    bonuses
  );

  console.log("newArmor: ", newArmor);

  return newArmor;
};

export { armorGen };
