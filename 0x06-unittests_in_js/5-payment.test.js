/* expect */
const sinon = require('sinon');
const { expect } = require('chai');
const sendPaymentRequestToApi = require('./5-payment');

describe('sendPaymentRequestToApi', () => {
  let bigB;

  //befor
  beforeEach(() => {
    if (!bigB) {
      bigB = sinon.spy(console);
    }
  });

  //after
  afterEach(() => {
    bigB.log.resetHistory();
  });

  //consol
  it('sendPaymentRequestToApi(100, 20) logs "The total is: 120" to the console', () => {
    sendPaymentRequestToApi(100, 20);
    expect(bigB.log.calledWith('The total is: 120')).to.be.true;
    expect(bigB.log.calledOnce).to.be.true;
  });

  //consol
  it('sendPaymentRequestToApi(10, 10) logs "The total is: 20" to the console', () => {
    sendPaymentRequestToApi(10, 10);
    expect(bigB.log.calledWith('The total is: 20')).to.be.true;
    expect(bigB.log.calledOnce).to.be.true;
  });
});
