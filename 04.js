/* Implement the function which takes an array containing the names of people that like an item. It must return the display text
as shown in the examples:
[]                                -->  "no one likes this"
["Peter"]                         -->  "Peter likes this"
["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this" 
Note: For 4 or more names, the number in "and 2 others" simply increases.*/

function likes(names) {
  const length = names.length;
  if (length === 0) {
    return "no one likes this";
  }
  if (length === 1) {
    return `${names[0]} likes this`;
  }
  if (length === 2) {
    return `${names[0]} and ${names[1]} like this`;
  }
  if (length === 3) {
    return `${names[0]}, ${names[1]} and ${names[2]} like this`;
  }
  if (length > 3) {
    return `${names[0]}, ${names[1]} and ${length - 2} others like this`;
  }
}

//v2

function likes2(names) {
  names = names || [];
  switch (names.length) {
    case 0:
      return "no one likes this";
      break;
    case 1:
      return `${names[0]} likes this`;
      break;
    case 2:
      return `${names[0]} and ${names[1]} like this`;
      break;
    case 3:
      return `${names[0]}, ${names[1]} and ${names[2]} like this`;
      break;
    default:
      return `${names[0]}, ${names[1]} and ${
        names.length - 2
      } others like this`;
  }
}

const a = likes(["Alex", "Jacob", "Mark", "Max"]);
const b = likes2(["Alex", "Jacob", "Mark", "Max"]);

console.log(a);
console.log(b);
