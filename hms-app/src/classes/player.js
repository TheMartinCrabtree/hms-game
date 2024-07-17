class Player {
  constructor(
    id = "player default id",
    name = "default player name",
    experience = 0,
    gold = 5,
    equipment = [],
    inventory = [],
    health = 30,
    magic = 30,
    shield = 10,
    bonuses = []
  ) {
    this.id = id;
    this.name = name;
    this.experience = experience;
    this.gold = gold;
    this.equipment = equipment;
    this.inventory = inventory;
    this.maxWeight = 120;
    this.health = health;
    this.healthMax = 30;
    this.magic = magic;
    this.magicMax = 30;
    this.shield = shield;
    this.shieldMax = 10;
    this.bonuses = bonuses;
  }
}
export default Player;
