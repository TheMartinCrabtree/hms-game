import Armor from "../../classes/armor";
import Weapon from "../../classes/weapon";
import Accessory from "../../classes/accessory";
import {
  rollD100,
  rollD20,
  rollD12,
  rollD10,
  rollD8,
  rollD6,
  rollD4,
  rollD2,
  getRandomInt,
} from "./rng";

function getFirstTwoCharacters(str) {
  if (str.length < 2) {
    return str;
  }
  return str.substring(0, 2);
}

const getBonuses = () => {
  let bonusArr = [];

  return bonusArr;
};

const armorGen = () => {
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
      break;
    case 1:
    case 2:
      quality = "poor";
      break;
    default:
      quality = "standard";
  }

  switch (rollD2()) {
    case 0:
      type = "light";
      break;
    case 1:
      type = "heavy";
      break;
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
  const id = `Arm${getFirstTwoCharacters(name)}-${getRandomInt(
    3000
  ).toString()}`;
  const weight = properties[type].weight;
  const armorClass = properties[type].armorClass[quality];
  const durabilityCurrent = properties[type].durability[quality];
  const durabilityMax = properties[type].durability[quality];
  const bonuses = [];
  const newArmor = new Armor(
    id,
    name,
    weight,
    armorClass,
    durabilityCurrent,
    durabilityMax,
    bonuses
  );

  return newArmor;
};

const weaponGen = () => {
  let quality = "standard";
  let type = "dagger";
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
      "Bite",
      "Revenge",
      "Averice",
      "Poker",
      "Bane",
      "Blade",
      "Edge",
      "Saber",
      "Harbinger",
      "Justice",
      "Torment",
      "Steel",
      "Sunderer",
      "Redemption",
    ],
  };

  switch (rollD20()) {
    case 20:
      quality = "superior";
      break;
    case 1:
    case 2:
      quality = "poor";
      break;
    default:
      quality = "standard";
  }

  switch (rollD2()) {
    case 0:
      type = "dagger";
      break;
    case 1:
      type = "sword";
      break;
    default:
      type = "dagger";
  }

  const getName = () => {
    return `${names.prefix[getRandomInt(names.prefix.length)]} ${
      names.suffix[getRandomInt(names.suffix.length)]
    }`;
  };

  const properties = {
    dagger: {
      weight: 10,
      damageDice: {
        poor: "d4",
        standard: "d6",
        superior: "d8",
      },
      durability: {
        poor: 20,
        standard: 30,
        superior: 40,
      },
    },
    sword: {
      weight: 20,
      damageDice: {
        poor: "d6",
        standard: "d8",
        superior: "d10",
      },
      durability: {
        poor: 20,
        standard: 30,
        superior: 40,
      },
    },
  };

  const name = getName();
  const id = `Weap${getFirstTwoCharacters(name)}-${getRandomInt(
    3000
  ).toString()}`;
  const weight = properties[type].weight;
  const damageDice = properties[type].damageDice[quality];
  const durabilityCurrent = properties[type].durability[quality];
  const durabilityMax = properties[type].durability[quality];
  const bonuses = [];
  const newWeapon = new Weapon(
    id,
    name,
    weight,
    damageDice,
    durabilityCurrent,
    durabilityMax,
    bonuses
  );

  return newWeapon;
};

const accessoryGen = () => {
  let quality = "standard";
  let bonusArr = [];
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
      "Amulet",
      "Ankh",
      "Sigil",
      "Talisman",
      "Necklace",
      "Charm",
      "Seal",
      "Mark",
      "Totem",
      "Blessing",
      "Curse",
      "Protector",
      "Weave",
      "Guardian",
    ],
  };
  const getName = () => {
    return `${names.prefix[getRandomInt(names.prefix.length)]} ${
      names.suffix[getRandomInt(names.suffix.length)]
    }`;
  };
  switch (rollD20()) {
    case 20:
      quality = "superior";
      break;
    case 1:
    case 2:
      quality = "poor";
      break;
    default:
      quality = "standard";
  }

  const name = getName();
  const id = `Acc${getFirstTwoCharacters(name)}-${getRandomInt(
    3000
  ).toString()}`;
  const bonuses = [];
  const newAccessory = new Accessory(id, name, bonuses);

  return newAccessory;
};

export { armorGen, weaponGen, accessoryGen };
