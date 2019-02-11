function reverseNumber(number) {
    let numbersReversed = number.toString().split('').reverse().join('');
    return Math.sign(number) * parseInt(numbersReversed);
}
reverseNumber(123);
reverseNumber(-456);
reverseNumber(10000);