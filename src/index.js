module.exports = function toReadable(number) {
    const num = [
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
    const num2 = [
        "twenty",
        "thirty",
        "forty",
        "fifty",
        "sixty",
        "seventy",
        "eighty",
        "ninety",
    ];

    const numOne = Math.trunc(number / 10);
    const numTwo = Math.round((number / 10 - numOne) * 10);
    const hundredNumOne = Math.trunc(number / 100);
    const hundredNumtwo = Math.floor(number / 10 - hundredNumOne * 10);
    const hundredNumThree = Math.round((number / 10 - hundredNumOne * 10) * 10);
    const hundredNumFour = (number % 100) / 10;

    if (number < num.length) {
        return num[number];
    } else if (number >= 20 && number < 100) {
        if (number % 10 === 0) {
            return num2[number / 10 - 2];
        } else if (Math.floor(number / 10 > 2)) {
            return num2[numOne - 2] + " " + num[numTwo];
        }
    } else if (number >= 100) {
        if (number % 100 === 0) {
            return num[hundredNumOne] + " hundred";
        } else if (number % 100 <= 19) {
            return num[hundredNumOne] + " hundred " + num[hundredNumThree];
        } else if (number % 10 === 0) {
            return num[hundredNumOne] + " hundred " + num2[hundredNumFour - 2];
        } else if (number % 100 >= 20) {
            return (
                num[hundredNumOne] +
                " hundred " +
                num2[hundredNumtwo - 2] +
                " " +
                num[numTwo]
            );
        }
    }
};
