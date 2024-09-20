/* expect */
const assert = require('assert');
const calculateNumber = require('./1-calcul');


describe('calculateNumber', () => {
  it('control adding two rounded numbers when type is SUM', () => {
    assert.equal(calculateNumber('SUM', 1.2, 3.7), 5);
    assert.equal(calculateNumber('SUM', -1.2, -3.7), -5);
  });

  it('control subtracting two rounded numbers when type is SUBTRACT', () => {
    assert.equal(calculateNumber('SUBTRACT', 5.9, 2.3), 4);
    assert.equal(calculateNumber('SUBTRACT', -5.9, -2.3), -4);
  });

  it('control dividing two rounded numbers when type is DIVIDE', () => {
    assert.equal(calculateNumber('DIVIDE', 8, 2), 4);
  });

  it('returns Error when dividing by 0', () => {
    assert.equal(calculateNumber('DIVIDE', 4, 0), 'Error');
    assert.equal(calculateNumber('DIVIDE', -8, 0), 'Error');
  });

  it('throws an error when an invalid type is provided', () => {
    assert.throws(() => calculateNumber('INVALID_TYPE', 1, 2), Error);
  });
});
