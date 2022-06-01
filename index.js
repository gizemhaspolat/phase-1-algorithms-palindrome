// function isPalindrome(word) {
//   let wordSplit = word.split("");
//   let wordReverse = wordSplit.reverse();
//   let wordReverseJoin = wordReverse.join("");

//   return word === wordReverseJoin ? true : false;
// };

function isPalindrome(word) {
  let wordSplit = word.split("");
  for (let i = 0; i < wordSplit.length; i++) {
    if (wordSplit[i] !== wordSplit[wordSplit.length - 1 - i]) {
      return false;
    } else if (wordSplit[i] === wordSplit[wordSplit.length - 1 - i]) {
      return true;
    }
  }
}
// isPalindrome("robot");

/* 
  //the function will take a word as an argument and return true if the word is a palindrome, false otherwise.
 
  //the function should be case-insensitive, so "RaceCar" and "racecar" are both valid palindromes.

  //the function will take a string, divide it into its elements, and then reverse the order of those elements.

  //if the element 0 of the array is equal to the element -1 of the array, and so on, then the word is a palindrome.

  
*/

/*
  Add written explanation of your solution here
*/
//split method takes the word and returns an array of the letters
//the for loop will run through the array and check if the first letter is equal to the last letter
//if it is, then it will return true, if not, then it will return false

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
