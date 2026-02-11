function countVowels(text) {
  let count = 0;

  for (let i = 0; i < text.length; i++) {
    if (
      text[i] === "a" ||
      text[i] === "e" ||
      text[i] === "i" ||
      text[i] === "o" ||
      text[i] === "u"
    ) {
      count++;
    }
  }

  return count;
}
// Example Usage
console.log(countVowels("hello")); // 2
console.log(countVowels("javascript")); // 3
console.log(countVowels("")); // 0
