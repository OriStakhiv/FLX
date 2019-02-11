function getMin(...arguments) {
    let min = arguments[0];
    for (let i = 1; i < arguments.length; i++) {
      let number = arguments[i];
      if(number < min){ 
          min = number;
        }
    }
      return min;
  }
getMin(3, 0, -3);