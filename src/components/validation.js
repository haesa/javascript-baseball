class Validation {
  #numbers;
  constructor(numbers) {
    this.#numbers = numbers;
  }

  validateInput() {
    if (this.#numbers.length !== 3) {
      throw new Error('numbers length must be 3.');
    }

    if (this.#numbers.some((number) => !Number.isInteger(number))) {
      throw new Error('number must be integer');
    }

    if (this.#numbers.some((number) => number === 0)) {
      throw new Error('number must be between 1 and 9, inclusive.');
    }

    if (
      this.#numbers.some(
        (number) =>
          this.#numbers.indexOf(number) !== this.#numbers.lastIndexOf(number)
      )
    ) {
      throw new Error('numbers does not allow duplication.');
    }
  }
}
module.exports = Validation;
