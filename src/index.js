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
  number = number.toString();
  let result = "";

  if (number.length === 3) {
    result += third[number[0]] + " ";
    number = number.slice(1);
  }
  if (number[0] == "1") {
    result += first[number] + " ";
  } else {
    if (number[1] != "0") {
      result += first[number[1]] + " ";
    }
    result += second[number[0] - 2] + " ";
  }

  return result.trim();
};
