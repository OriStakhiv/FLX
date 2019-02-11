function addOne(number) {
    return number + 1;
}
function pipe(number,...arguments){
    for (let i = 0; i < arguments.length; i++) {
        let Func = arguments[i](number);
        number = Func;
    }
    return number;
}
pipe(1, addOne);
pipe(1, addOne, addOne);

