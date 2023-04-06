const MESSAGE = {
  START: '숫자 야구 게임을 시작합니다.',
  PROMPT: '숫자를 입력해주세요 : ',
  SUCCESS: '3개의 숫자를 모두 맞히셨습니다! 게임 종료',
  RESTART: '게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.',
  END: '게임 종료',
};

const PRINT = {
  ALL_STRIKE: '3스트라이크',
  NOTHING: '낫싱',
  BALL_STRIKE: (ball, strike) => `${ball}볼 ${strike}스트라이크`,
  STRIKE: (strike) => `${strike}스트라이크`,
  BALL: (ball) => `${ball}볼`,
};
module.exports = { MESSAGE, PRINT };
