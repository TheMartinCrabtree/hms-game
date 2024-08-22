class Room {
  constructor(id = "Room001", label = "Wall", type = "WALL") {
    this.id = id;
    this.label = label;
    this.type = type;
    this.monsters = undefined;
    this.description = "";
  }
  // Methods
  updateID(text) {
    this.id = text;
  }
}

export default Room;
