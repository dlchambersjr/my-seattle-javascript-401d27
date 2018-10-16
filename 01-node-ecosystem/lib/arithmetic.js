'use strict';

module.exports = arithmetic = (firstNum, secondNum) => {
  if (typeof firstNum !== 'number' || secondNum !== 'number') {
    return null;
  } else {
    let result = {
      add() { firstNum + secondNum },
      sub() { firstNum - secondNum }
    };
  }
}