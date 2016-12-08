const range = (...params) => {
  let [from, to, step = 1] = params;

  if(typeof to === 'undefined') {
    [from, to] = [0, from];
  }

  return (callback = (it => it)) => {
    const array = [];
    for (let i = from; i < to; i += step) {
      array.push(callback(i));
    }
    return array;
  };
};


module.exports = range;