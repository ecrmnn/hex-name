'use strict';

const axios = require('axios');

module.exports = function (name) {
  if (!(typeof name === 'string' && name.length !== 0)) {
    return Promise.reject(new Error('Package name required'));
  }

  return new Promise(function (resolve, reject) {
    axios.get(`https://hex.pm/api/packages/${name}`)
      .then(function (response) {
        if (response.status === 200) {
          resolve(false);
        }
        resolve(true);
      })
      .catch(function () {
        resolve(true);
      });
  });
};