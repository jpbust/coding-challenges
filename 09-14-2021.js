/*https://leetcode.com/explore/challenge/card/september-leetcoding-challenge-2021/637/week-2-september-8th-september-14th/3974/

Reverse Only Letters

Given a string s, reverse the string according to the following rules:

All the characters that are not English letters remain in the same position.
All the English letters (lowercase or uppercase) should be reversed.
Return s after reversing it.

string.charCodeAt(index#)

Constraints:

1 <= s.length <= 100
s consists of characters with ASCII values in the range [33, 122].
s does not contain '\"' or '\\'.


33-64 Non- alphabet.
65-90 Alphabet: uppercase
91-96- non-alphabet
97-122 alphabet
*/


/**
 * @param {string} s
 * @return {string}
 */
 var reverseOnlyLetters = function(s) {

  var isAlphabet = (letter)=>{
    var number = letter.charCodeAt(0);
    if ( (number >= 65 && number<=90) || (number >= 97 && number<= 122)  ) {
      return true;
    } else {
      return false;
    }
  }

  var letterArray = [];

  let n = s.length - 1;


  // swap order ignore the non alphabetics

    for (var i =0; i<s.length;i++) {
    // if is a non-alphabet then insert array position
    if (isAlphabet(s[i])) {
      letterArray.unshift(s[i])
  }
  }

  for (var i =0; i<s.length;i++) {
    // if is a non-alphabet then insert array position
    if (!isAlphabet(s[i])) {
      letterArray.splice(i,0,s[i])
  }
  }
  return letterArray.join('')
};

// console.log(reverseOnlyLetters("ab-cd"));
console.log(reverseOnlyLetters("a-bC-dEf-ghIj")); // "j-Ih-gfE-dCba"

