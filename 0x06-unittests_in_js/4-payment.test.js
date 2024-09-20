/* expect */
const sinon = require('sinon');
const Utils = require('./utils');
const { expect } = require('chai');
const sendPaymentRequestToApi = require('./4-payment');

describe('sendPaymentRequestToApi', () => {
  it('sendPaymentRequestToApi calls console.log with the right arguments', () => {
    const bigBrother = sinon.spy(console);
    const theSP = sinon.stub(Utils, 'calculateNumber');

    theSP.returns(10);
    sendPaymentRequestToApi(100, 20);
    expect(theSP.calledWith('SUM', 100, 20)).to.be.true;
    expect(theSP.callCount).to.be.equal(1);
    expect(bigBrother.log.calledWith('The total is: 10')).to.be.true;
    expect(bigBrother.log.callCount).to.be.equal(1);
    theSP.restore();
    bigBrother.log.restore();
  });
});
