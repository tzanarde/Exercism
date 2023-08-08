export function findAnagrams(target, candidates) {
  let anagramWords = [];
  for (const candidate in candidates) {
    if (!isSameWord(target, candidates[candidate]) &&
        isAnagram(target, candidates[candidate])) {
      anagramWords.push(candidates[candidate]);
    }
  }
  return anagramWords;
}

function isSameWord(target, candidate) {
  return target.toUpperCase() == candidate.toUpperCase();
}

function isAnagram(target, candidate) {
  target = target.toUpperCase();
  candidate = candidate.toUpperCase();
  for (const char in candidate) {
    if (!hasLetter(target, candidate[char])) return false;
    target = updateTarget(target, candidate[char])
  }
  if (target.length != 0) return false;
  return true;
}

function hasLetter(target, char) {
  return target.indexOf(char) >= 0;
}

function updateTarget(target, char) {
  return target.substr(0, target.indexOf(char)) + target.substr(target.indexOf(char) + 1,
         target.length);
}
