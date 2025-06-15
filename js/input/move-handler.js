
const moveMap = {
  U: () => rotateFace('y', 1, true),
  "U'": () => rotateFace('y', 1, false),
  D: () => rotateFace('y', -1, true),
  "D'": () => rotateFace('y', -1, false),
  F: () => rotateFace('z', 1, true),
  "F'": () => rotateFace('z', 1, false),
  B: () => rotateFace('z', -1, true),
  "B'": () => rotateFace('z', -1, false),
  R: () => rotateFace('x', 1, true),
  "R'": () => rotateFace('x', 1, false),
  L: () => rotateFace('x', -1, true),
  "L'": () => rotateFace('x', -1, false),
};

function handleMove(move) {
  if (moveMap[move]) moveMap[move]();
}
