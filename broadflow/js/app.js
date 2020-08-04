var button = document.querySelector('.burger');
var bg = document.querySelector('header');
var cover = document.querySelector('.header-title');
var hc = document.querySelector('.header-intro');
var btn = document.querySelector('.btn-header');
var nl = document.querySelector('.nav-links');
var cv = document.querySelector('.header-cover');
var toggle = true;

button.addEventListener('click', () => {
  if (toggle) {
    bg.style.background = 'linear-gradient(180deg, #3a469f 0%, #242e76 100%)';
    bg.style.clipPath = 'none';
    cover.style.display = 'none';
    hc.style.display = 'none';
    nl.style.left = '0';
    // nl.style.transition = 'all 0.5s';
    btn.style.display = 'none';
    cv.style.display = 'none';
    bg.pseudoStyle('after', 'position', 'unset');
    toggle = false;
  } else {
    bg.style.background =
      'linear-gradient(260.18deg,#3c3b97 20.19%,#249ad6 53.03%,#6bcbdd 91.85%)';
    cover.style.display = 'block';
    bg.style.clipPath = 'polygon(0 0, 100% 0%, 100% 78%, 0% 100%)';
    hc.style.display = 'block';
    nl.style.left = '-100%';
    // nl.style.transition = 'all 0.2s';
    btn.style.display = 'block';
    cv.style.display = 'block';
    cv.style = 'none';
    bg.pseudoStyle('after', 'position', 'absolute');
    toggle = true;
  }
});

// select pseudo

var UID = {
  _current: 0,
  getNew: function () {
    this._current++;
    return this._current;
  },
};

HTMLElement.prototype.pseudoStyle = function (element, prop, value) {
  var _this = this;
  var _sheetId = 'pseudoStyles';
  var _head = document.head || document.getElementsByTagName('head')[0];
  var _sheet =
    document.getElementById(_sheetId) || document.createElement('style');
  _sheet.id = _sheetId;
  var className = 'pseudoStyle' + UID.getNew();

  _this.className += ' ' + className;

  _sheet.innerHTML +=
    '\n.' + className + ':' + element + '{' + prop + ':' + value + '}';
  _head.appendChild(_sheet);
  return this;
};
