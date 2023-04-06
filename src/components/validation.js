const { ERROR } = require('../constant/constant');

class Validation {
  #numbers;
  constructor(numbers) {
    this.#numbers = numbers;
  }

  validateInput() {
    if (this.#numbers.length !== 3) {
      throw new Error(ERROR.LENGTH);
    }

    if (this.#numbers.some((number) => !Number.isInteger(number))) {
      throw new Error(ERROR.INTEGER);
    }

    if (this.#numbers.some((number) => number === 0)) {
      throw new Error(ERROR.RANGE);
    }

    if (
      this.#numbers.some(
        (number) =>
          this.#numbers.indexOf(number) !== this.#numbers.lastIndexOf(number)
      )
    ) {
      throw new Error(ERROR.DUPLICATION);
    }
  }
}
module.exports = Validation;
