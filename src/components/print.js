const { Console } = require('@woowacourse/mission-utils');
const { MESSAGE, PRINT } = require('../constant/constant');

function printResult(strike, ball) {
  if (strike === 3) {
    Console.print(PRINT.ALL_STRIKE);
    Console.print(MESSAGE.SUCCESS);
    return;
  }

  if (strike === 0 && ball === 0) {
    Console.print(PRINT.NOTHING);
    return;
  }

  if (strike > 0 && ball > 0) {
    Console.print(PRINT.BALL_STRIKE(ball, strike));
    return;
  }

  if (ball === 0) {
    Console.print(PRINT.STRIKE(strike));
    return;
  }

  if (strike === 0) {
    Console.print(PRINT.BALL(ball));
    return;
  }
}

module.exports = printResult;
