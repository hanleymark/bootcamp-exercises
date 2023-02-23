// "pikachu" -> "https://pokeapi.co/api/v2/pikachu"

function makeUrl(name) {
  return "https://pokeapi.co/api/v2/pokemon/" + name;
}

//------------
// CHALLENGE 2
//------------

function searchParamsToObject(encodedString) {
  const keyValuePairs = encodedString.split("&");
  const obj = {};

  keyValuePairs.forEach((kv) => {
    const key=kv.split("=")[0];
    const value=kv.split("=")[1];

    obj[key] = value;
  });

  return obj;
}

//------------
// CHALLENGE 3
//------------

function isLeapYear(year) {

  if (!Number.isInteger(year)) {
    return "Year must be an integer";
  }

  if (year < 0) {
    return "Year cannot be negative";
  }

  if (year === 0) {
    return "There was no year 0AD"
  }

  return (year % 4 === 0 && ((year % 100 !== 0) || (year % 400 === 0))); 
}