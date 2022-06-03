/* Make a number negative

makeNegative(1);    // return -1
makeNegative(-5);   // return -5
makeNegative(0);    // return 0
makeNegative(0.12); // return -0.12

Notes
    The number can be negative already, in which case no change is required.
    Zero (0) is not checked for any specific sign. Negative zeros make no mathematical sense. */

function makeNegative(num) {
  if (num === 0 || num < 0) {
    return num;
  } else {
    return num * -1;
  }
}

const a = makeNegative(12);
console.log(a);
