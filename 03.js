/* Your task is to make a function that can take any non-negative integer as an argument and return it with its digits 
in descending order. Essentially, rearrange the digits to create the highest possible number.

Examples:
Input: 42145 Output: 54421
Input: 145263 Output: 654321
Input: 123456789 Output: 987654321 */

function descendingOrder(n) {
  const arr = n.toString().split("");
  const arrNum = arr.map(Number);
  const descendNum = arrNum
    .sort((a, b) => {
      return b - a;
    })
    .join("");
  return +descendNum;
}

const a = descendingOrder(0);
console.log(a);
