// const boxColor = document.createElement('.stat__item');

// boxColor.style.backgroundColor = `rgb(${getRandom(0, 255)}, ${getRandom(
//   0,
//   255
// )}, ${getRandom(0, 255)})`;

export function getRandom(min, max) {
  return Math.ceil(Math.random() * (max - min) + min);
}
