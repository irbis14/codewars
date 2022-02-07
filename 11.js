/* Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]     */

const moveZeros = function (arr) {
  const newArr = arr.filter((item) => item !== 0);
  const howManyZeros = arr.length - newArr.length;
  for (let i = 0; i < howManyZeros; i += 1) {
    newArr.push(0);
  }
  return newArr;
};

const b = moveZeros([1, 2, 0, 1, 0, 1, 0, 3, 0, 1]);
console.log(b);
