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

export {
  rollD100,
  rollD20,
  rollD12,
  rollD10,
  rollD8,
  rollD6,
  rollD4,
  rollD2,
  getRandomInt,
};
