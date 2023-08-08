export function findAnagrams(target, candidates) {
  let anagramWords = [];
  for (const candidate in candidates) {
    if (!isSameWord(target.toUpperCase(), candidates[candidate].toUpperCase()) &&
        isAnagram(target.toUpperCase(), candidates[candidate].toUpperCase())) {
      anagramWords.push(candidates[candidate]);
    }
  }
  return anagramWords;
}

function isSameWord(target, candidate) {
  return target == candidate;
}

function isAnagram(target, candidate) {
  // if (target.length != candidate.length) return false;
  for (const char in candidate) {
    if (target.indexOf(candidate[char]) < 0) return false;
    target = target.substr(0, target.indexOf(candidate[char])) + target.substr(target.indexOf(candidate[char]) + 1, target.length)
  }
  if (target.length == 0) {
    return true;
  } else {
    return false;
  }
}
