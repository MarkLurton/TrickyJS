function curriedAdd(total) {
  if (total) {
    return function add(num) {
      if (!num) return total;
      total += num;
      return add;
    };
  } else {
    return 0;
  }
}

module.exports = { curriedAdd };
