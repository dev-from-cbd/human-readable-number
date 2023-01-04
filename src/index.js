module.exports = function toReadable(number) {
  let onesDigits = [
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
  let secDigits = [
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
  let tensDigits = [
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

  if (number === 0) {
    return "zero";
  } else if (number < 10) {
    return onesDigits[number];
  } else if (number >= 10 && number < 20) {
    return secDigits[number % 10];
  } else if (number >= 20 && number < 100) {
    return (
      tensDigits[Math.trunc(n / 10)] +
      " " +
      onesDigits[number % 10]
    ).trim();
  } else if (number >= 100 && n < 1000) {
    if (number % 100 === 0) {
      return onesDigits[number / 100] + " hundred";
    } else if (number % 100 < 20 && 9 < number % 100) {
      return (
        onesDigits[Math.trunc(number / 100)] +
        " hundred " +
        secDigits[number % 10]
      );
    } else if (number % 100 !== 0 && number % 10 === 0) {
      return (
        onesDigits[Math.trunc(number / 100)] +
        " hundred " +
        tensDigits[(number % 100) / 10]
      );
    } else if (number % 100 < 10 && number % 10 !== 0) {
      return (
        onesDigits[Math.trunc(number / 100)] +
        " hundred " +
        onesDigits[number % 100]
      );
    } else if (number % 100 < 20 && 9 < number % 100) {
      return (
        onesDigits[Math.trunc(n / 100)] + " hundred " + secDigits[number % 10]
      );
    } else if (number % 100 >= 20 && number % 10 !== 0) {
      return (
        onesDigits[Math.trunc(number / 100)] +
        " hundred " +
        tensDigits[Math.trunc((number % 100) / 10)] +
        " " +
        onesDigits[(number % 100) % 10]
      );
    }
  }
};
