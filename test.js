/* Write a function:

    function solution(A);

that, given an array A of N integers, returns the smallest positive integer (greater than 0) that does not occur in A.

For example, given A = [1, 3, 6, 4, 1, 2], the function should return 5.

Given A = [1, 2, 3], the function should return 4.

Given A = [−1, −3], the function should return 1.

Write an efficient algorithm for the following assumptions:

        N is an integer within the range [1..100,000];
        each element of array A is an integer within the range [−1,000,000..1,000,000].

 */

/* function solution(A) {
  // write your code in JavaScript (Node.js 8.9.4)
  const result = A.reduce((acc, el) => {
    //(Number.isInteger(el) && el > 1 && el < acc)
    if (Number.isInteger(el) && el > 1 && el < acc) {
      return (acc = el - 1);
    } else {
      return (acc = acc);
    }
  }, 1);
  return result;
}
 */

function solution(A) {
  // write your code in JavaScript (Node.js 8.9.4)
  let newArr = [];
  for (let i of A) {
    for (let j = i + 1; j < A.length - 2; j += 1) {
      const str1 = A[i].split("");
      const str2 = A[j].split("");
      console.log(str1, "---str1");
      console.log(str2, "---str2");
      if (
        !str1.find((elA) => {
          return str2.includes(elA);
        })
      ) {
        const newStr = `${A[i] + A[j]}`;
        return newArr.push(newStr);
      }
    }
  }
  return newArr;

  /* for (let i = 0; i < A.length - 1; i += 1) {
    for (let j = i + 1; j < A.length - 2; j += 1) {
      const str1 = A[i].split("");
      const str2 = A[j].split("");
      console.log(str1, "---str1");
      console.log(str2, "---str2");
      if (
        !str1.find((elA) => {
          return str2.includes(elA);
        })
      ) {
        const newStr = `${A[i] + A[j]}`;
        return newArr.push(newStr);
      }
      continue;
    }
  } */
}

const a = solution(["co", "dil", "ity"]);
console.log(a);
