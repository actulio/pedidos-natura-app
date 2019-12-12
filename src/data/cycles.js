/* eslint-disable import/prefer-default-export */
class Cycle {
  constructor(
    id,
    cycleNumber,
    clientsBought,
    clientsPaid,
    sellerSpent
  ) {
    this.id = id;
    this.cycleNumber = cycleNumber;
    this.clientsBought = clientsBought;
    this.clientsPaid = clientsPaid;
    this.sellerSpent = sellerSpent;
  }
}

export const CYCLES = [
  new Cycle(
    '10',
    10,
    3000,
    754,
    2000
  ),
  new Cycle(
    '9',
    9,
    0,
    0,
    0
  ),
  new Cycle(
    '8',
    8,
    1000,
    700,
    500
  ),
  new Cycle(
    '7',
    7,
    1500,
    1500,
    1000
  ),
];
