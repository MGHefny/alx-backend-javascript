/* expect */
const { expect } = require('chai');
const getPaymentTokenFromAPI = require('./6-payment_token');

describe('getPaymentTokenFromAPI', () => {
    // the done
  it('getPaymentTokenFromAPI(success), where success == true', (done) => {
    getPaymentTokenFromAPI(true)
      .then((respon) => {
        expect(respon).to.deep.equal({data: 'Successful response from the API'});
        done();
      });
  });
});
