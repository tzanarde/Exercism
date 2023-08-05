var lastOpening = [];

export function isPaired(string) {
  let parenthesesCount = 0;
  let bracketsCount = 0;
  let bracesCount = 0;

  for (const char in string) {
    if (isOpening(string[char])) {
      lastOpening.push(string[char]);
    } else if (isClosing(string[char])) {
      if (closingCharMatch(string[char])) {
        return false;
      } else {
        lastOpening.pop();
      }
    }
    if (string[char] == '(') parenthesesCount++;
    if (string[char] == '[') bracketsCount++;
    if (string[char] == '{') bracesCount++;
    if (string[char] == ')') parenthesesCount--;
    if (string[char] == ']') bracketsCount--;
    if (string[char] == '}') bracesCount--;
  }
  return (parenthesesCount == 0) && (bracketsCount == 0) && (bracesCount == 0);
};

function isOpening(char) {
  return char == '(' || char == '[' || char == '{'
}

function isClosing(char) {
  return char == ')' || char == ']' || char == '}'
}

function closingCharMatch(char) {
  return char != lastOpeningEnding(lastOpening[lastOpening.length - 1])
}

function lastOpeningEnding(lastOpening) {
  if (lastOpening == '(') return ')';
  if (lastOpening == '[') return ']';
  if (lastOpening == '{') return '}';
}

