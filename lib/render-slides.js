"use strict";

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var editor = document.getElementById('editor');

function renderSlides(_x) {
  return _renderSlides.apply(this, arguments);
}

function _renderSlides() {
  _renderSlides = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(params) {
    var usePosts, slidesNumber, postCategory, images, postType, gliderID, itemWidth, slider, renderFromImages, renderFromPosts, getPosts, _getPosts, posts;

    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _getPosts = function _getPosts3() {
              _getPosts = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(postType, slidesNumber) {
                var baseUrl, query;
                return regeneratorRuntime.wrap(function _callee$(_context) {
                  while (1) {
                    switch (_context.prev = _context.next) {
                      case 0:
                        baseUrl = ufrGlobals.siteUrl;
                        query = "".concat(baseUrl, "/wp-json/wp/v2/posts?_embed=&_locale=user&order=desc&per_page=").concat(slidesNumber);
                        _context.t0 = postType;
                        _context.next = _context.t0 === 'most-recent' ? 5 : _context.t0 === 'most-seen' ? 15 : _context.t0 === 'category' ? 25 : 36;
                        break;

                      case 5:
                        _context.prev = 5;
                        _context.next = 8;
                        return fetch(query);

                      case 8:
                        return _context.abrupt("return", _context.sent.json());

                      case 11:
                        _context.prev = 11;
                        _context.t1 = _context["catch"](5);
                        console.error(_context.t1);

                      case 14:
                        return _context.abrupt("break", 36);

                      case 15:
                        _context.prev = 15;
                        _context.next = 18;
                        return fetch("".concat(baseUrl, "/wp-json/ufr/most-seen-posts?quantity=").concat(slidesNumber));

                      case 18:
                        return _context.abrupt("return", _context.sent.json());

                      case 21:
                        _context.prev = 21;
                        _context.t2 = _context["catch"](15);
                        console.error(_context.t2);

                      case 24:
                        return _context.abrupt("break", 36);

                      case 25:
                        _context.prev = 25;
                        query += "&categories=".concat(postCategory);
                        _context.next = 29;
                        return fetch(query);

                      case 29:
                        return _context.abrupt("return", _context.sent.json());

                      case 32:
                        _context.prev = 32;
                        _context.t3 = _context["catch"](25);
                        console.error(_context.t3);

                      case 35:
                        return _context.abrupt("break", 36);

                      case 36:
                      case "end":
                        return _context.stop();
                    }
                  }
                }, _callee, null, [[5, 11], [15, 21], [25, 32]]);
              }));
              return _getPosts.apply(this, arguments);
            };

            getPosts = function _getPosts2(_x2, _x3) {
              return _getPosts.apply(this, arguments);
            };

            renderFromPosts = function _renderFromPosts(slider, posts) {
              var slides = posts.map(function (post) {
                var image = ufrGlobals.siteUrl + '/wp-content/plugins/wp-idg-ufr__block-dependencies/assets/img/erro/png/1x/error15.png';
                var alt = "";

                if (post.featured_media > 0) {
                  image = post._embedded['wp:featuredmedia'][0].source_url;
                  alt = post._embedded['wp:featuredmedia'][0].alt;
                }

                return "\n\t\t      \t <div class=\"glider-slide\">\n\t\t     \t     <img src=\"".concat(image, "\" alt=\"").concat(alt, "\" />\n\t\t         </div>\n\t\t  \t  ");
              });
              slider.innerHTML = slides.join('');
            };

            renderFromImages = function _renderFromImages(slider, images) {
              var slides = images.map(function (image) {
                return "\n\t\t     <div>\n\t\t     \t<img src=\"".concat(image.url, "\" alt=\"").concat(image.alt, "\" width=\"").concat(itemWidth, "\" />\n\t\t     </div>\n\t\t  ");
              });
              slider.innerHTML = slides.join('');
            };

            return _context2.abrupt("return");

          case 11:
            posts = _context2.sent;
            renderFromPosts(slider, posts);
            _context2.next = 18;
            break;

          case 15:
            _context2.prev = 15;
            _context2.t0 = _context2["catch"](8);
            console.error(_context2.t0);

          case 18:
            _context2.next = 21;
            break;

          case 20:
            renderFromImages(slider, images);

          case 21:
            window.dispatchEvent(new Event('ufr-block-dependencies-slides-rendered'));

          case 22:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[8, 15]]);
  }));
  return _renderSlides.apply(this, arguments);
}

window.ufrGlobals.blockScripts.renderSlides = renderSlides;