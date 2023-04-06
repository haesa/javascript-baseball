const { Random } = require('@woowacourse/mission-utils');

class Computer {
  #baseballNumber;
  constructor() {
    this.#baseballNumber;
  }

  init() {
    this.#baseballNumber = [];
  }

  pickNumber() {
    this.init();

    while (this.#baseballNumber.length < 3) {
      const number = Random.pickNumberInRange(1, 9);

      if (!this.#baseballNumber.includes(number)) {
        this.#baseballNumber.push(number);
      }
    }
  }

  get baseballNumber() {
    return this.#baseballNumber;
  }
}

module.exports = Computer;
