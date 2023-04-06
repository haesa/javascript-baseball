const { Console } = require('@woowacourse/mission-utils');
const { SUCCESS } = require('../constant/constant');

function printResult(strike, ball) {
  if (strike === 3) {
    Console.print('3스트라이크');
    Console.print(SUCCESS);
    return;
  }

  if (strike === 0 && ball === 0) {
    Console.print('낫싱');
    return;
  }

  if (strike > 0 && ball > 0) {
    Console.print(`${ball}볼 ${strike}스트라이크`);
    return;
  }

  if (ball === 0) {
    Console.print(`${strike}스트라이크`);
    return;
  }

  if (strike === 0) {
    Console.print(`${ball}볼`);
    return;
  }
}

module.exports = printResult;
