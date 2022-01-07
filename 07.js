// Simple Pig Latin

/* Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

Examples

pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
pigIt('Hello world !');     // elloHay orldway !
 */

function pigIt(str) {
  return str
    .split(" ")
    .map((item) => {
      if (item.match(/[a-zA-Z]/)) {
        return `${item.slice(1)}${item.slice(0, 1)}ay`;
      } else {
        return item;
      }
    })
    .join(" ");
}

const a = pigIt("Hello world !");
console.log(a);
