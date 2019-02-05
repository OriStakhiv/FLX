let result
getValue()
function showResult() {
    alert(result)
}
function getValue() {
    let cash = prompt('Enter amount of money:')
    let discount = prompt('Enter the discount: ')
    if (cash >= 0 && cash <= 9999999 && discount >= 0 && discount <= 99) {
        calculate(cash, discount)
    } else {
        result = 'Invalid input data'
        showResult(result)
    }
}
function calculate(cash, discount) {
    let priceWithDiscount = (cash - cash * discount / 100)
    let saved = (cash - priceWithDiscount)
    result = ('Prise without discount: ' + truncation(cash) +
    '\nDiscount: ' + truncation(discount) +
    '% \nPrice with discount: ' + truncation(priceWithDiscount) +
    '\nSaved: ' + truncation(saved))
    showResult(result)
}
function truncation (num) {
    return Math.trunc(num * Math.pow(10, 2)) / Math.pow(10, 2);
  }

