const { Random } = require('@woowacourse/mission-utils');

class Computer {
  #baseballNumber;
  constructor() {
    this.#baseballNumber = this.pickNumber();
  }

  pickNumber() {
    const result = [];
    while (result.length < 3) {
      const number = Random.pickNumberInRange(1, 9);

      if (!result.includes(number)) {
        result.push(number);
      }
    }
    return result;
  }

  get baseballNumber() {
    return this.#baseballNumber;
  }
}

module.exports = Computer;
