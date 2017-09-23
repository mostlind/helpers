const { curry, pipe } = require("../index");
const { test } = require("ava");

const double = x => x * 2;
const add1 = x => x + 1;
const equals2 = x => x === 2;

// curry curries
test(t => {
  t.is(curry((a, b) => a + b)(1)(1), 2);
});

// pipe pipes
test(t => {
  t.is(pipe(double, add1)(1), 3);
});

// pipe pipes in right order
test(t => {
  t.is(pipe(add1, equals2)(1), true);
});
