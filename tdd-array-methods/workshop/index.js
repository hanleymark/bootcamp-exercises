function map(array, f) {
  result = [];

  for (let i = 0; i < array.length; i++) {
    result.push(f(array[i]));
  }

  return result;
}

function filter(array, f) {
  result = [];

  for (let i = 0; i < array.length; i++) {
    if (f(array[i])) {
      result.push(array[i]);
    }
  }
  return result;
}

function every(array, f) {

  for (let i = 0; i < array.length; i++) {
    if (!f(array[i])) {
      return false;
    }
  }
  return true;
}

function some(array, f) {

  for (let i = 0; i < array.length; i++) {
    if (f(array[i])) {
      return true;
    }
  }
  return false;
}

function reduce(array, f, s = 0) {
  let result = s;
  for (let i = 0; i < array.length; i++) {
    result = f(result, array[i]);

    console.log(`Iter ${i}: ${result}`);
  }
  return result;
}