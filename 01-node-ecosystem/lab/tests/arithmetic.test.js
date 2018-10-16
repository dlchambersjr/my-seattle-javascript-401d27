'use strict';

module.experts = arithmetic = (firstNum, secondNum) => {
  if (typeof firstNum !== 'number' || secondNum !== 'number') {
    return null;
  } else return {add: firstNum+secondNum, subtract: firstNum-secondNum}
}

