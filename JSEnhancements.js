Array.prototype.contains = function (element) {
  return this.indexOf(element) !== -1;
};

Array.prototype.getRandomElement = function () {
  return this[Math.floor(Math.random() * this.length)];
};

function getFullBruwserName() {
  document.write('<br> ' + navigator.appName + ' (' + navigator.appCodeName + ') version ' + navigator.appVersion + '.');
}