/* The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character
appears only once in the original string, or ")" if that character appears more than once in the original string. 
Ignore capitalization when determining if a character is a duplicate.

Examples

"din"      =>  "((("
"recede"   =>  "()()()"
"Success"  =>  ")())())"
"(( @"     =>  "))(("   */

function duplicateEncode(word) {
  const arr = word.toLowerCase().split("");
  const newArr = [];
  arr.forEach((el) => {
    if (arr.filter((item) => item === el).length === 1) {
      newArr.push("(");
    } else {
      newArr.push(")");
    }
  });
  return newArr.join("");
}

const a = duplicateEncode("Success");
console.log(a);
