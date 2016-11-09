'use strict';

const chai = require('chai');
const expect = require('chai').expect;
const hexName = require('../src');

describe('Hex Name Test Suite', function () {
  let available;

  before(function (done) {
    hexName('cowboy')
      .then(response => {
        available = response;
        done();
      });
  });

  it('cowboy should be taken', function () {
    expect(available).to.be.eql(false);
  });
});

describe('Hex Name Test Suite', function () {
  let available;

  before(function (done) {
    hexName('klsndfioy86caio0948h4a84j9zw4')
      .then(response => {
        available = response;
        done();
      });
  });

  it('klsndfioy86caio0948h4a84j9zw4 should be available', function () {
    expect(available).to.be.eql(true);
  });
});

describe('Hex Name Test Suite', function () {

  let available;

  before(function (done) {
    hexName('')
      .then(response => {
        available = response;
        done();
      })
      .catch(function (err) {
        available = err;
        done();
      });
  });

  it('empty name throws an error', function () {
    expect(available instanceof Error).to.be.eql(true);
  });
});

describe('Hex Name Test Suite', function () {

  let available;

  before(function (done) {
    hexName(1337)
      .then(response => {
        available = response;
        done();
      })
      .catch(function (err) {
        available = err;
        done();
      });
  });

  it('integer as name throws an error', function () {
    expect(available instanceof Error).to.be.eql(true);
  });
});