const { Console } = require('@woowacourse/mission-utils');
const Computer = require('./computer');
const Validation = require('./validation');
const printResult = require('./print');
const { MESSAGE } = require('../constant/constant');

class Game {
  #computer;
  #strike;
  #ball;
  constructor() {
    this.#strike = 0;
    this.#ball = 0;
  }

  calculateStrike(numbers) {
    this.#strike = numbers.reduce(
      (count, number, index) =>
        number === this.#computer.baseballNumber[index] ? count + 1 : count,
      0
    );
  }

  calculateBall(numbers) {
    const baseballNumber = this.#computer.baseballNumber;

    this.#ball = numbers.reduce(
      (count, number, index) =>
        baseballNumber.includes(number) && number !== baseballNumber[index]
          ? count + 1
          : count,
      0
    );
  }

  getResult(numbers) {
    this.calculateStrike(numbers);
    this.calculateBall(numbers);
    printResult(this.#strike, this.#ball);
  }

  replay() {
    Console.print(MESSAGE.RESTART);

    Console.readLine('', (input) => {
      if (input === '1') {
        this.start();
        return;
      }

      if (input === '2') {
        Console.close();
        Console.print(MESSAGE.END);
        return;
      }
    });
  }

  readAnswer() {
    Console.readLine(MESSAGE.PROMPT, (input) => {
      const numbers = input //
        .split('')
        .map(Number);

      new Validation(numbers).validateInput();
      this.getResult(numbers);

      if (this.#strike !== 3) {
        this.readAnswer();
        return;
      }

      this.replay();
    });
  }

  start() {
    this.#computer = new Computer();
    this.readAnswer();
  }
}

module.exports = Game;
