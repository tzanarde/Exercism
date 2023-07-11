function capitalize(word) {
  return word[0].toUpperCase() + word.slice(1, word.length).toLowerCase();
}

export function frontDoorResponse(line) {
  return line[0];
}

export function frontDoorPassword(word) {
  return capitalize(word);
}

export function backDoorResponse(line) {
  let trimed_line = line.trim();
  return trimed_line[trimed_line.length - 1];
}

export function backDoorPassword(word) {
  return capitalize(word) + ', please';
}
