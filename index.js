
function isPalindrome(word) {
  let wordBackwards = ''
  for (i = word.length - 1; i >= 0; i--) {
    wordBackwards = wordBackwards + word[i]
  }

  if(word === wordBackwards) {
    return true
  } else {
    return false
  }
}

isPalindrome('test')

/* 
  Add your pseudocode here

  Need to loop through a word backwards

  If that new word is strictly equal to the original word, then the original word is a palindrome
*/

/*
  Add written explanation of your solution here

  For a word like 'test', if we put that into line 15 and call our isPalindrome function, lines 3-6, or our backwards loop will set the variable wordBackwards to 'tset'

  Then in lines 8-12, our if statement says that if 'test' is strictly equal to 'tset' then it will return true (test is a palindrome); if not, it will return false (test is not a palindrome); our if statement returns false
*/


if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("madam"));

  console.log("Expecting: false");
  console.log("=>", isPalindrome("palindrome"));
}

module.exports = isPalindrome;
