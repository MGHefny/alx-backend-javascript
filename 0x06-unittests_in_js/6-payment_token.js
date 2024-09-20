/* mathimatic operation */
const getPaymentTokenFromAPI = (success) => new Promise((resolve, _reject) => {
    if (success) {
      //rej prom
        resolve({data: 'Successful response from the API'});
    }
  });
  
  module.exports = getPaymentTokenFromAPI;
  