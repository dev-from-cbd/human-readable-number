const first = [
  "zero",
  "one",
  "two",
  "three",
  "four",
  "five",
  "six",
  "seven",
  "eight",
  "nine",
  "ten",
  "eleven",
  "twelve",
  "thirteen",
  "fourteen",
  "fifteen",
  "sixteen",
  "seventeen",
  "eighteen",
  "nineteen",
];
const second = [
  "twenty",
  "thirty",
  "forty",
  "fifty",
  "sixty",
  "seventy",
  "eighty",
  "ninety",
];
const third = [
  "",
  "one hundred",
  "two hundred",
  "three hundred",
  "four hundred",
  "five hundred",
  "six hundred",
  "seven hundred",
  "eight hundred",
  "nine hundred",
];

module.exports = function toReadable(number) {
  if (number < 0 || number > 999) {
    return "Invalid input, input number should be between 0 and 999";
  }

  let result = "";

  if (number >= 100) {
    result += third[Math.floor(number / 100)] + " ";
    number = number % 100;
  }
  if (number < 20) {
    result += first[number] + " ";
  } else {
    result += second[Math.floor(number / 10) - 2] + " ";
    if (number % 10 !== 0) {
      result += first[number % 10] + " ";
    }
  }

  return result.trim();
};
