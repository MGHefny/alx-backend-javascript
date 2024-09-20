/* mathimatic operation */
const Utils = require('./utils');

const sendPaymentRequestToApi = (totalAmount, totalShipping) => {
  const allNumb = Utils.calculateNumber('SUM', totalAmount, totalShipping);
  //consol.log
  console.log(`The total is: ${allNumb}`);
};

module.exports = sendPaymentRequestToApi;
