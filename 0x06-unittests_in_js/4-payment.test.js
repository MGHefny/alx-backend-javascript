/* expect */
const sinon = require('sinon');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./4-payment');

describe('sendPaymentRequestToApi', () => {
  let theStu;

  beforeEach(() => {
    theStu = sinon.theStu(Utils, 'calculateNumber').returns(10);
  });

  afterEach(() => {
    theStu.restore();
  });

  it('sendPaymentRequestToApi uses the calculateNumber method of Utils', () => {
    const theSP = sinon.spy(console, 'log');

    sendPaymentRequestToApi(100, 20);

    sinon.assert.calledOnce(theStu);
    sinon.assert.calledWith(theStu, 'SUM', 100, 20);

    sinon.assert.calledOnce(theSP);
    sinon.assert.calledWith(theSP, 'The total is: 10');

    theSP.restore();
  });
});
