// itemTypes ["ACC", "ARM", "WEAP"]

// healthMax = 30;
// magicMax = 30;
// shieldMax = 10;
//

export const bonusList = [
  {
    name: "Minor Health",
    itemTypes: ["ACC"],
    property: "healthMax",
    info: "+10 bonus to max health",
    value: 10,
  },
  {
    name: "Major Health",
    itemTypes: ["ACC"],
    property: "healthMax",
    info: "+20 bonus to max health",
    value: 20,
  },
  {
    name: "Minor Health Regen",
    itemTypes: ["ACC", "ARM"],
    property: "health",
    info: "+1 health recovered each round",
    value: 1,
  },
  {
    name: "Major Health Regen",
    itemTypes: ["ACC", "ARM"],
    property: "health",
    info: "+3 health recovered each round",
    value: 3,
  },
];
