const assert = require('assert');
const range = require('./range');

describe(`Range`, () => {

  describe(`should return array`, () => {

    it(`with numbers by default`, () => {
      assert.deepEqual(range(0, 3)(), [0, 1, 2]);
    });
    it(`with numbers`, () => {
      assert.deepEqual(range(0, 3)(it => it), [0, 1, 2]);
    });
    it(`with strings`, () => {
      assert.deepEqual(range(0, 3)(String), [`0`, `1`, `2`]);
    });

  });

  describe(`should accept`, () => {

    const start = 1;
    const end = 3;
    const step = 0.5;

    it(`one param as 0 to ${end}`, () => {
      assert.deepEqual(range(end)(), [0, 1, 2]);
    });

    it(`two params as ${start} to ${end}`, () => {
      assert.deepEqual(range(start, end)(), [1, 2]);
    });

    it(`three params as ${start} to ${end} with step ${step}`, () => {
      assert.deepEqual(range(start, end, step)(), [1, 1.5, 2, 2.5]);
    });

  });

  describe(`should print`, () => {
    it(`even/odds`, () => {
      assert.strictEqual(range(0, 3)(it => it % 2 ? `odd` : `even`).join(`|`), `even|odd|even`);
    });
    it(`hearts`, () => {
      assert.strictEqual(range(0, 3)(it => `&#9829;`).join(``), `&#9829;&#9829;&#9829;`);
    });
  })
});
