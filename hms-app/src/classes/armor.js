class Armor {
  constructor(
    name = "naming error",
    weight = 0,
    armorClass = 0,
    durCurrent = 1,
    durMax = 1,
    bonuses = []
  ) {
    this.name = name;
    this.weight = weight;
    this.armorClass = armorClass;
    this.durCurrent = durCurrent;
    this.durMax = durMax;
    this.bonuses = bonuses;
  }

  // Local Methods
  // static displayName = "Point";

  // Methods
  takeDamage(damage) {
    const updatedDurability = this.durCurrent - damage;
    updatedDurability > 0
      ? (this.durCurrent = updatedDurability)
      : (this.durCurrent = 0);
    return this.currentDur;
  }
}

export default Armor;
