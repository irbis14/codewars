// The Hashtag Generator

/* The marketing team is spending way too much time typing in hashtags.
Let's help them with our own Hashtag Generator!

Here's the deal:

    It must start with a hashtag (#).
    All words must have their first letter capitalized.
    If the final result is longer than 140 chars it must return false.
    If the input or the result is an empty string it must return false.

Examples

" Hello there thanks for trying my Kata"  =>  "#HelloThereThanksForTryingMyKata"
"    Hello     World   "                  =>  "#HelloWorld"
""                                        =>  false                                 */
// str.match(/^\S*$/);
function generateHashtag(str) {
  //   return str.trim();
  if (str !== "" && str.trim().length > 0) {
    const arr = str.trim().toLowerCase().split(" ");
    const newStr = arr
      .map((el) => el[0].toUpperCase() + el.slice(1).trim())
      .join("");
    const result = `#${newStr}`;

    if (result.length > 0 && result.length < 140) {
      return result;
    } else {
      return false;
    }
  } else {
    return false;
  }
}

const a = generateHashtag("Codewars is nice  ");
console.log(a + "-", a.length);
