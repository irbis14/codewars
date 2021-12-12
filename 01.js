// Capitalize first letter in each word of sentence

toJadenCase = function (string) {
  const arrOfWords = string.split(" ");
  let jadenString = [];

  for (let i = 0; i <= arrOfWords.length - 1; i += 1) {
    const arrOfLetters = [...arrOfWords[i]];
    arrOfLetters[0] = arrOfLetters[0].toUpperCase();
    jadenString.push(arrOfLetters.join(""));
  }

  return jadenString.join(" ");
};
//  return string.split(' ').map(item => item[0].toUpperCase() + item.slice(1)).join(' ')
