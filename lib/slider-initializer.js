"use strict";

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

window.addEventListener('load', function () {
  if (!Glider) return;
  var sliders = document.querySelectorAll('.glider');

  var _iterator = _createForOfIteratorHelper(sliders),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var _autoOrValue, _autoOrValue2, _Number;

      var slider = _step.value;

      var autoOrValue = function autoOrValue(v) {
        return v !== 'auto' ? Number(v) : v;
      };

      var parseOptions = function parseOptions(v) {
        try {
          return JSON.parse(v);
        } catch (e) {
          return undefined;
        }
      };

      var _slider$dataset = slider.dataset,
          slidesToShow = _slider$dataset.slidesToShow,
          slidesToScroll = _slider$dataset.slidesToScroll,
          itemWidth = _slider$dataset.itemWidth,
          exactWidth = _slider$dataset.exactWidth,
          duration = _slider$dataset.duration,
          responsive = _slider$dataset.responsive;
      new Glider(slider, {
        slidesToShow: (_autoOrValue = autoOrValue(slidesToShow)) !== null && _autoOrValue !== void 0 ? _autoOrValue : 1,
        slidesToScroll: (_autoOrValue2 = autoOrValue(slidesToScroll)) !== null && _autoOrValue2 !== void 0 ? _autoOrValue2 : 1,
        duration: (_Number = Number(duration)) !== null && _Number !== void 0 ? _Number : 0.5,
        responsive: parseOptions(responsive),
        draggable: true,
        dots: '.dots',
        arrows: {
          prev: '.glider-prev',
          next: '.glider-next'
        },
        itemWidth: itemWidth,
        exactWidth: exactWidth
      });
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
});