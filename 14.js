/* Implement a function that adds two numbers together and returns their sum in binary. The conversion can be done before, or after the addition.

The binary number returned should be a string.

Examples:(Input1, Input2 --> Output (explanation)))

1, 1 --> "10" (1 + 1 = 2 in decimal or 10 in binary)
5, 9 --> "1110" (5 + 9 = 14 in decimal or 1110 in binary)   */

function addBinary(a, b) {
  function convertToBinary(number) {
    if (number > 0) {
      return convertToBinary(parseInt(number / 2)) + (number % 2);
    }
    return "";
  }
  return convertToBinary(a + b);
}

function addBinary_2(a, b) {
  const bin = a + b;
  return bin.toString(2);
}

function addBinary_3(a, b) {
  let sum = a + b;
  let binary = "";

  while (sum > 0) {
    binary = (sum % 2) + binary;
    sum = Math.floor(sum / 2);
  }

  return binary;
}

const a = addBinary(5, 9);
console.log(a, "--a");

const b = addBinary_2(5, 9);
console.log(b, "--b");

const c = addBinary_3(5, 9);
console.log(c, "--c");
