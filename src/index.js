module.exports = function toReadable(num) {
  let digits = [
    "",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
  ];
  let tens = [
    "",
    "",
    "twenty",
    "thirty",
    "forty",
    "fifty",
    "sixty",
    "seventy",
    "eighty",
    "ninety",
  ];
  let teens = [
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
  let result = "";

  num = String(num);

  if (num === "0") {
    result = "zero";
  } else if (num.length === 1) {
    result = digits[num];
  } else if (num.length === 2) {
    if (num[0] === "1") {
      result = teens[num[1]];
    } else if (num[1] === "0") {
      result = tens[num[0]];
    } else {
      result = tens[num[0]] + " " + digits[num[1]];
    }
  } else if (num.length === 3) {
    if (num[1] === "1") {
      result = digits[num[0]] + " hundred " + teens[num[2]];
    } else if (num[1] === "0") {
      if (num[2] === "0") {
        result = digits[num[0]] + " hundred";
      } else {
        result = digits[num[0]] + " hundred " + digits[num[2]];
      }
    } else {
      result =
        digits[num[0]] + " hundred " + tens[num[1]] + " " + digits[num[2]];
    }
  }

  return result.trim();
};
