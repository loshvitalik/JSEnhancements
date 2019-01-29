Array.prototype.contains = function (element) {
  return this.indexOf(element) !== -1;
};

Array.prototype.getRandomElement = function () {
  return this[Math.floor(Math.random() * this.length)];
};