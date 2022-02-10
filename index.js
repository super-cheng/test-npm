exports.sum = function () {
  console.log("arguments", arguments);
  let result = Array.from(arguments).reduce((prev, cur) => {
    return prev + cur;
  }, 0);
  return result;
};

exports.multiple = function () {
  let result = Array.from(arguments).reduce((prev, cur) => {
    return prev * cur;
  }, 1);
  return result;
};
