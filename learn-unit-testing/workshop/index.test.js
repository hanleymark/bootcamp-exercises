//------------
// CHALLENGE 1
//------------

// Test urls
test(
    "Creates correct pokemon url",
    () => equal(makeUrl("pikachu"), "https://pokeapi.co/api/v2/pokemon/pikachu"));

test(
    "Creates correct pokemon url",
    () => equal(makeUrl("eevee"), "https://pokeapi.co/api/v2/pokemon/eevee"));

// Should fail
test(
    "Creates correct pokemon url",
    () => equal(makeUrl("snorlax"), "https://pokeapi.co/api/v2/pokemon/pikachu"));

//------------
// CHALLENGE 2
//------------

//test form encoded string to object

test(
    "Decodes form encoded string",
    () => equal(
        JSON.stringify(searchParamsToObject("name=oliver&email=hello@oliverjam.es")),
        JSON.stringify(
            {
                name: "oliver",
                email: "hello@oliverjam.es",
            })
    )
);

//------------
// CHALLENGE 3
//------------

test(
    "Identifies leap year",
    () => equal(isLeapYear(2000), true)
);

test(
    "Identifies leap year",
    () => equal(isLeapYear(1900), false)
);

test(
    "Identifies leap year",
    () => equal(isLeapYear(1999), false)
);

test(
    "Identifies leap year",
    () => equal(isLeapYear(1600), true)
);

test(
    "Identifies leap year",
    () => equal(isLeapYear(-32), "Year cannot be negative")
);

test(
    "Identifies leap year",
    () => equal(isLeapYear(45.3), "Year must be an integer")
);

test(
    "Identifies leap year",
    () => equal(isLeapYear("Pikachu"), "Year must be an integer")
);

test(
    "Identifies leap year",
    () => equal(isLeapYear(0), "There was no year 0AD")
);