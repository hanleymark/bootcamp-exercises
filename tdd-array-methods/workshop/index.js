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
  }
  return result;
}

function flat(array, depth = 1) {
  // Nested function to handle recursive calls
  // after initialising result array
  function flattenRecursively(arrayFragment, depth) {  
    // Bottoming out condition:
    // If fragment is not an array or we have reached depth specified
    // then push fragment onto result array
    if (!Array.isArray(arrayFragment) || depth < 0) {
      result.push(arrayFragment);
    }
    // Otherwise iterate through arrayFragment elements and send each
    // one to be flattened to the next depth level down
    else {
      for (let i = 0; i < arrayFragment.length; i++) {
        let element = arrayFragment[i];
        flattenRecursively(element, depth - 1);
      }
    }
  }
  let result = [];
  flattenRecursively(array, depth);
  return result;
}
