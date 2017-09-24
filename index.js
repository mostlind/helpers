const curry = fn => (fn.length === 1 ? fn : arg => curry(fn.bind(null, arg)));
const pipe = (fn, ...fns) => arg =>
  fns.length ? pipe(...fns)(fn(arg)) : fn(arg);
const map = fn => mappable => mappable.map(fn);
const inspect = x => {
  console.log(x);
  return x;
};

module.exports = {
  curry,
  pipe
};
