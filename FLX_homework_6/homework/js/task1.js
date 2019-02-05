let result;
let x;
getValue();
function showResult(){
    alert(result)
}
function getValue() {
    let a = prompt('Enter the number')
    let b = prompt('Enter the number')
    let c = prompt('Enter the number')
    if (isNaN(a) || isNaN(a) || isNaN(a)){
        result = 'Invalid input data'
        showResult()
    }else if (Number(a) === 0){
        x = -c/b
        result = 'x = ' + truncation(x)
        showResult()
    }else{
        getResult(a, b, c)
    }
}   
function getResult(a, b, c) {
     let d = b * b - 4 * a * c
    if (d === 0) {
        x = -b / (2 * a)
        result = 'x = ' + truncation(x)
        showResult()
    } else if (d > 0) {
        let x1 = (-1 * b + Math.sqrt(d))/(2 * a)
        let x2 = (-1 * b - Math.sqrt(d))/(2 * a)
        result = 'x1 = ' + truncation(x1) + ' and x2 = ' + truncation(x2)
        showResult()
    } else {
        result = 'no solution'
        showResult()
    }
}
function truncation (num) {
    return Math.trunc(num * Math.pow(10, 2)) / Math.pow(10, 2);
  }

