// Return a new array with the strings filtered out

//v1
function filter_list(l) {
  let arr = [];
  l.forEach((item) => {
    if (Number.isInteger(item)) {
      return arr.push(item);
    }
    ("");
  });
  return arr;
}

//v2
function filter_list2(l) {
  return l.filter((item) => Number.isInteger(item));
}

// Test.assertSimilar(filter_list([1, 2, "a", "b"]), [1, 2]);
// Test.assertSimilar(filter_list([1, "a", "b", 0, 15]), [1, 0, 15]);
// Test.assertSimilar(filter_list([1, 2, "aasf", "1", "123", 123]), [1, 2, 123]);

const a = filter_list([1, "a", "b", 0, 15]);
console.log(a);
