const { Console } = require('@woowacourse/mission-utils');
const Computer = require('./computer');
const Validation = require('./validation');
const printResult = require('./print');
const { PROMPT, RESTART, END } = require('../constant/constant');

class Game {
  constructor() {
    this.computer;
    this.validation = new Validation();
    this.strike = 0;
    this.ball = 0;
  }

  setStrike(numbers) {
    this.strike = numbers.reduce(
      (count, number, index) =>
        number === this.computer.baseballNumber[index] ? count + 1 : count,
      0
    );
  }

  setBall(numbers) {
    const baseballNumber = this.computer.baseballNumber;

    this.ball = numbers.reduce(
      (count, number, index) =>
        baseballNumber.includes(number) && number !== baseballNumber[index]
          ? count + 1
          : count,
      0
    );
  }

  getResult(numbers) {
    this.setStrike(numbers);
    this.setBall(numbers);
    printResult(this.strike, this.ball);
  }

  replay() {
    Console.print(RESTART);

    Console.readLine('', (input) => {
      if (input === '1') {
        this.start();
        return;
      }

      if (input === '2') {
        Console.close();
        Console.print(END);
        return;
      }
    });
  }

  readAnswer() {
    Console.readLine(PROMPT, (input) => {
      const numbers = input //
        .split('')
        .map(Number);

      this.validation.validateInput(numbers);
      this.getResult(numbers);

      if (this.strike !== 3) {
        this.readAnswer();
        return;
      }

      this.replay();
    });
  }

  start() {
    this.computer = new Computer();
    this.readAnswer();
  }
}

module.exports = Game;
