//------------
// Challenge 1
//------------

test("Adds correctly", () => {
    const result = calculate(5, "+", 20);
    const expected = 25;
    equal(result, expected, 'calculate (5,"+", 20) should return 25');
});

test("Adds correctly", () => {
    const result = calculate(100, "-", 15);
    const expected = 85;
    equal(result, expected, 'calculate (100,"-", 15) should return 85');
});

test("Adds correctly", () => {
    const result = calculate(12, "*", 5);
    const expected = 60;
    equal(result, expected, 'calculate (12,"*", 5) should return 60');
});

test("Adds correctly", () => {
    const result = calculate(45, "/", 3);
    const expected = 15;
    equal(result, expected, 'calculate (45,"/", 3) should return 15');
});

test("Adds correctly", () => {
    const result = calculate(22, "banana", 11);
    const expected = "Please enter a valid sign (+, -, *, /)";
    equal(
        result,
        expected,
        'calculate (22,"banana", 11) should return Please enter a valid sign (+, -, *, /)'
    );
});

//-----------

test("Calculates correctly with string numbers", () => {
    const result = calculate("45", "/", "3");
    const expected = 15;
    equal(result, expected, 'calculate ("45","/", "3") should return 15');
});

test("Calculates correctly with string numbers", () => {
    const result = calculate("12.5", "*", "3");
    const expected = 37.5;
    equal(result, expected, 'calculate ("12.5","*", "3") should return 37.5');
});

test("Calculates correctly with string numbers", () => {
    const result = calculate("29", "+", "3");
    const expected = 32;
    equal(result, expected, 'calculate ("29","+", "3") should return 132)');
});

test("Calculates correctly with string numbers", () => {
    const result = calculate("banana", "+", "apple");
    const expected = "Cannot calculate with non-numeric value";
    equal(result, expected, 'calculate ("banana","+", "apple") should return Cannot calculate with non-numeric value)');
});

//------------
// Challenge 2
//------------
const testValues = [
    { a: "10", b: "5", op: "+", ans: "15" },
    { a: "20", b: "30", op: "-", ans: "-10" },
    { a: "25", b: "3", op: "*", ans: "75" },
    { a: "64", b: "4", op: "/", ans: "16" },
    { a: "banana", b: "apple", op: "+", ans: "Cannot calculate with non-numeric value" },
];

const formTextA = document.querySelector("#a");
const formTextB = document.querySelector("#b");
const formOperator = document.querySelector("#sign");
const formSubmitBtn = document.querySelector("button[type='submit']");
const formAnswer = document.querySelector("#result");

testValues.forEach((calc,index) => {
    setTimeout(() => {
        test("Calculator form responds correctly", () => {
            const { a } = calc;
            const { b } = calc;
            const { op } = calc;
            const { ans } = calc;
    
            formTextA.value = a;
            formTextB.value = b;
            formOperator.value = op;
    
            formSubmitBtn.click();
    
            equal(formAnswer.value, ans);
        });
    }, 500 * (index + 1));
    
});
