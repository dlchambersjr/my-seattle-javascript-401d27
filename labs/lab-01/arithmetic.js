'use strict';

module.exports = (firstNum, secondNum) => {
  if (isNaN(firstNum) || isNaN(secondNum)) {
    return null;
  } else {
    let result = {
      add() { return firstNum + secondNum },
      sub() { return firstNum - secondNum }
    };
    return [result.add(), result.sub()];
  }
}
