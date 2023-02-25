// testing map()

test("map() should return an array with the same number of elements", () => {
  const result = map([1], () => { });
  equal(result.length, 1);
});

test("map() should transform each element of the array using the fn argument", () => {
  const result = map([1], (x) => x + 1);
  equal(result[0], 2);
});

// testing filter()

test("filter() should return an array with the same number of elements for which the supplied function is true", () => {
  const result = filter([1], () => true);
  equal(result.length, 1);
});

test("filter() should return an array of elements for which the supplied function returns true", () => {
  const result = filter([0, 1, 2, 3, 4, 5], (x) => x < 3);
  equal(JSON.stringify(result), JSON.stringify([0, 1, 2]));
});

// testing every()

test("every() should return a boolean", () => {
  const result = typeof every([1, 2, 3], () => { });
  equal(result, 'boolean');
});

test("every() should return false if >=1 element returns false", () => {
  const result = every([1, 2, 3], (x) => x % 2 === 1);
  equal(result, false);
});

test("every() should return true if no elements return false", () => {
  const result = every([1, 2, 3, 4, 5], (x) => x * 2 < 100);
  equal(result, true);
});

// testing some()

test("some() should return a boolean", () => {
  const result = typeof some([1, 2, 3], () => { });
  equal(result, 'boolean');
});

test("some() should return false if no element returns true", () => {
  const result = some([1, 2, 3], (x) => x * 2 === 5);
  equal(result, false);
});

test("some() should return true if >=1 elements return true", () => {
  const result = some([1, 2, 3, 4, 5], (x) => x / 2 === 2);
  equal(result, true);
});

// testing reduce()

test("reduce() should return a total with an adding function", () => {
  const result = reduce([1, 2, 3], (a, c) => a + c, 0);
  equal(result, 6);
});

test("reduce() should return a total with a multiplying function", () => {
  const result = reduce([1, 2, 3, 4], (a, c) => a * c, 1);
  equal(result, 24);
});

test("some() should return a joined string of elements", () => {
  const result = reduce([1, 2, 3, 4, 5], (a, c) => { return "" + a + c }, "");
  equal(result, "12345");
});

// testing flat()

test("flat() should return the same array if no nested arrays", () => {
  const result = flat([1, 2, 3]);
  console.log(result);
  equal(JSON.stringify(result), JSON.stringify([1, 2, 3]));
});

test("flat() should return flat array of all elements with nesting to one level", () => {
  const result = flat([1, 2, 3, [4, 5]]);
  console.log(result);
  equal(JSON.stringify(result), JSON.stringify([1, 2, 3, 4, 5]));
});

test("flat() should return array of all elements including second nested array with nesting to two levels", () => {
  const result = flat([1, 2, 3, [4, [5]]]);
  console.log(result);
  equal(JSON.stringify(result), JSON.stringify([1, 2, 3, 4, [5]]));
});

test("flat() should return fully flat array when depth = Infinity", () => {
  const result = flat([1, 2, 3, [4, [5, [6]]]], Infinity);
  console.log(result);
  equal(JSON.stringify(result), JSON.stringify([1, 2, 3, 4, 5, 6]));
});

test("flat() should handle objects that are not numbers or arrays", () => {
  const result = flat([1, "2", { fruit: "banana" }, [3, [4]], { myArray: [5, 6] }]);
  console.log(result);
  equal(JSON.stringify(result), JSON.stringify([1, "2", { fruit: "banana" }, 3, [4], { myArray: [5, 6] }]));
});
