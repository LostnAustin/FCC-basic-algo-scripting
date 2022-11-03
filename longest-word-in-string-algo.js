//There are a number of ways to acheive this, I liked reduce:
function findLongestWordLength(str) {
  return str
  .split(' ')
  .reduce((longest, word) => Math.max(longest, word.length), 0);
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");






//solved using .map
function findLongestWordLength(str) {
  return Math.max(...str.split(" ").map(word => word.length));
}



//or use a for loop
function findLongestWordLength(str) {
  let words = str.split(' ');
  let maxLength = 0;

  for (let i = 0; i < words.length; i++) {
    if (words[i].length > maxLength) {
      maxLength = words[i].length;
    }
  }

  return maxLength;
}
