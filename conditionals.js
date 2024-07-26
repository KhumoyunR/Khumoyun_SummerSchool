function testNumbers(number) {
  let result;
  if (number > 0) {
    result = "number is positive";
  } else {
    result = "number is negetive";
  }
  return result;
}
console.log(testNumbers(1));

let number = 3;
const TEST_NUMBER = number > 0 ? "number is positive" : "number is negetive";
console.log(TEST_NUMBER);
