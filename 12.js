function anagrams(word, words) {
  const arr = word.split("").sort();

  return words.reduce((result, item) => {
    if (item.length === word.length && item.split("").sort() === arr) {
      return result.push(item);
    }
  }, []);
}

const a = anagrams("abba", ["aabb", "abcd", "bbaa", "dada"]);
console.log(a);
