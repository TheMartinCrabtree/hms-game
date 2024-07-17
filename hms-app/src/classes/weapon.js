class Weapon {
  constructor(
    id = "W001",
    name = "default name",
    weight = 0,
    damageDice = "d6",
    durCurrent = 1,
    durMax = 1,
    bonuses = []
  ) {
    this.id = id;
    this.name = name;
    this.weight = weight;
    this.damageDice = damageDice;
    this.durCurrent = durCurrent;
    this.durMax = durMax;
    this.bonuses = bonuses;
  }

  // Methods
  takeDamage(damage) {
    const updatedDurability = this.durCurrent - damage;
    updatedDurability > 0
      ? (this.durCurrent = updatedDurability)
      : (this.durCurrent = 0);
    return this.currentDur;
  }
}

export default Weapon;
