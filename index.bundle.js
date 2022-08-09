"use strict";
(self["webpackChunkrestaurante_page_top"] =
  self["webpackChunkrestaurante_page_top"] || []).push([
  ["index"],
  {
    /***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
      /*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
      /***/ (module, __webpack_exports__, __webpack_require__) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ default: () => __WEBPACK_DEFAULT_EXPORT__,
          /* harmony export */
        });
        /* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js"
          );
        /* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default =
          /*#__PURE__*/ __webpack_require__.n(
            _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__
          );
        /* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(
            /*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js"
          );
        /* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default =
          /*#__PURE__*/ __webpack_require__.n(
            _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__
          );
        // Imports

        var ___CSS_LOADER_EXPORT___ =
          _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()(
            _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()
          );
        // Module
        ___CSS_LOADER_EXPORT___.push([
          module.id,
          ":root {\n    font-size: 26px;\n    --inset-box-shadow: inset 0px 0px 5rem black;\n    --masking-opacity-to-right: linear-gradient(to right, rgba(0,0,0,1), rgba(0,0,0,0.8), rgba(0,0,0,0));\n    --masking-opacity-to-left: linear-gradient(to left, rgba(0,0,0,1), rgba(0,0,0,0.2), rgba(0,0,0,0.0));\n\n    --standard-border-radius: 16px;\n    --black-border: 1px solid black;\n}\n\nul {\n    list-style-type: none;\n}\n\na {\n    text-decoration: none;\n    color: RGB(255, 255, 255, 0.6);\n    text-decoration-line: none;\n}\n\na:hover, a:active {\n    color: white;\n}\n  \n* {\n    padding: 0px;\n    margin: 0px;\n    font-family: 'Times New Roman', Times, serif; \n}\n\nbody {\n    min-height: 100vh;\n}\n\n.template {\n    height: 100vh;\n    width: 100vw;\n    background-color: black;\n    display: grid;\n    grid-template-columns: 80px 10fr;\n    grid-template-rows: 1fr .075fr;\n}\n\n/* sidebar */\n.side-bar {\n    padding: .3rem;\n    grid-column: 1/2;\n    grid-row: 1;\n    background-color: black;\n}\n\n.side-bar > ul {\n    display: flex;\n    flex-direction: column;\n    align-items: flex-start;\n    gap: 1rem;\n    margin-top: 0.5rem;\n}\n.side-bar > ul > li {\n    color: RGB(255, 255, 255, 0.6);\n    font-size: 0.7rem;\n    font-style: italic;\n}\n\n/* content1 */\n.content {\n    background-size: cover;\n    background-repeat: no-repeat;\n    filter: blur(0px);\n    box-shadow: var(--inset-box-shadow);\n    position: relative;\n    grid-column: 2/4;\n    grid-row: 1/2;\n}\n\n.menu {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.menu-ul {\n    display: grid;\n    gap: 5px;\n    margin-left: 5px;\n    margin-top: 5px;\n}\n.card {\n    width: 90%;\n    height: 90%;\n    background-color: RGB(255, 255, 255, 0.85);\n    border-radius: var(--standard-border-radius);\n    position: absolute;\n    display: grid;\n    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));\n    grid-auto-rows: 250px;\n    gap: 1rem;\n    padding: .5rem;\n    overflow-y: auto;\n}\n\n.card > div {\n    border-radius: var(--standard-border-radius);\n    display: grid;\n    grid-template-rows: 7fr 2fr 1fr;\n    border: var(--black-border);\n}\n\n.card > div > p,\n.card > div > .btn-group {\n    padding: 0.1rem 0.3rem;\n}\n\n.card-img {\n    background-size: cover;\n    background-repeat: no-repeat;\n    border-radius: 16px;\n    padding: 0px;\n}\n\n.card > div > p {\n    font-size: 16px;\n    text-align: end;\n    font-style: italic;\n}\n\n.btn-group {\n    display: flex;\n    justify-content: space-between;\n}\n.btn-group > div > button {\n    font-size: 16px;\n    background-color: transparent;\n    border: none;\n    margin-left: 10px;\n}\n\n@keyframes button-hover {\n    from {background-color: RGB(200, 50, 255, 1);}\n    to {background-color: RGB(200, 50, 255, 0);}\n}\n\n.btn-group > div > button:hover,\n.btn-group > div > button:active {\n    animation: button-hover 1s;\n    border-radius: 5px;\n}\n\n.btn-group > div > button:active {\n    transform: scale(1.05);\n}\n.contact {\n    grid-column: 2/4;\n    grid-row: 1/2;   \n}\n\n.mask {\n    position: absolute;\n    width: 100%;\n    height: 100%;\n    background-image: var(--masking-opacity-to-right);\n    z-index: -1;\n}\n\n.mask-left {\n    position: absolute;\n    width: 100%;\n    height: 100%;\n    background-image: var(--masking-opacity-to-left);\n    z-index: -1;\n}\n\n.text-box {\n    width: 60vw;\n    height: 80vh;\n    color: white;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    gap: 1rem;\n    margin-left: 0.5rem;\n}\n\n.text-box > h3,\n.text-box > h5 {\n    font-style: italic;\n}\n\n.text-box > h1 {\n    transform: translate(0px, 2rem);\n}\n\nform {\n    width: min(300px, 60vw);\n    height: 80vh;\n    background-color: RGB(255, 255, 255, 0.85);\n    border-radius: var(--standard-border-radius);\n    padding: 1rem;\n    overflow-y: auto;\n    display: grid;\n    justify-content: center;\n    grid-template-columns: 1fr;\n}\n\n.contact { \n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\nlabel {\n    font-size: .6rem;\n    text-align: start;\n}\n\ninput, textarea {\n    display: block;\n    width: 100%;\n    border-radius: 5px;\n    border: 1px solid black;\n    padding: 2px;\n    font-size: .7rem;\n    font-family: inherit;\n}\n\n.btn-div {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    margin-top: 1rem;\n}\n\n.btn-div > button {\n    font-size: 0.8rem;\n    padding: 0rem .5rem;\n    background-color: white;\n    border: 1px solid black;\n    border-radius: 10px;\n    font-family: inherit;\n}\n\n.btn-div > button:hover {\n    border-color: purple;\n}\n.btn-div > button:active {\n    border-color: purple;\n    transform: translate(0px, 5px)\n}\n\n.footer {\n    background-color: black;\n    grid-column: 1/4;\n    display: flex;\n    font-size: 0.5rem;\n    justify-content: center;\n    align-items: center;\n    color: white;\n}",
          "",
          {
            version: 3,
            sources: ["webpack://./src/style.css"],
            names: [],
            mappings:
              "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",
            sourcesContent: [
              ":root {\n    font-size: 26px;\n    --inset-box-shadow: inset 0px 0px 5rem black;\n    --masking-opacity-to-right: linear-gradient(to right, rgba(0,0,0,1), rgba(0,0,0,0.8), rgba(0,0,0,0));\n    --masking-opacity-to-left: linear-gradient(to left, rgba(0,0,0,1), rgba(0,0,0,0.2), rgba(0,0,0,0.0));\n\n    --standard-border-radius: 16px;\n    --black-border: 1px solid black;\n}\n\nul {\n    list-style-type: none;\n}\n\na {\n    text-decoration: none;\n    color: RGB(255, 255, 255, 0.6);\n    text-decoration-line: none;\n}\n\na:hover, a:active {\n    color: white;\n}\n  \n* {\n    padding: 0px;\n    margin: 0px;\n    font-family: 'Times New Roman', Times, serif; \n}\n\nbody {\n    min-height: 100vh;\n}\n\n.template {\n    height: 100vh;\n    width: 100vw;\n    background-color: black;\n    display: grid;\n    grid-template-columns: 80px 10fr;\n    grid-template-rows: 1fr .075fr;\n}\n\n/* sidebar */\n.side-bar {\n    padding: .3rem;\n    grid-column: 1/2;\n    grid-row: 1;\n    background-color: black;\n}\n\n.side-bar > ul {\n    display: flex;\n    flex-direction: column;\n    align-items: flex-start;\n    gap: 1rem;\n    margin-top: 0.5rem;\n}\n.side-bar > ul > li {\n    color: RGB(255, 255, 255, 0.6);\n    font-size: 0.7rem;\n    font-style: italic;\n}\n\n/* content1 */\n.content {\n    background-size: cover;\n    background-repeat: no-repeat;\n    filter: blur(0px);\n    box-shadow: var(--inset-box-shadow);\n    position: relative;\n    grid-column: 2/4;\n    grid-row: 1/2;\n}\n\n.menu {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.menu-ul {\n    display: grid;\n    gap: 5px;\n    margin-left: 5px;\n    margin-top: 5px;\n}\n.card {\n    width: 90%;\n    height: 90%;\n    background-color: RGB(255, 255, 255, 0.85);\n    border-radius: var(--standard-border-radius);\n    position: absolute;\n    display: grid;\n    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));\n    grid-auto-rows: 250px;\n    gap: 1rem;\n    padding: .5rem;\n    overflow-y: auto;\n}\n\n.card > div {\n    border-radius: var(--standard-border-radius);\n    display: grid;\n    grid-template-rows: 7fr 2fr 1fr;\n    border: var(--black-border);\n}\n\n.card > div > p,\n.card > div > .btn-group {\n    padding: 0.1rem 0.3rem;\n}\n\n.card-img {\n    background-size: cover;\n    background-repeat: no-repeat;\n    border-radius: 16px;\n    padding: 0px;\n}\n\n.card > div > p {\n    font-size: 16px;\n    text-align: end;\n    font-style: italic;\n}\n\n.btn-group {\n    display: flex;\n    justify-content: space-between;\n}\n.btn-group > div > button {\n    font-size: 16px;\n    background-color: transparent;\n    border: none;\n    margin-left: 10px;\n}\n\n@keyframes button-hover {\n    from {background-color: RGB(200, 50, 255, 1);}\n    to {background-color: RGB(200, 50, 255, 0);}\n}\n\n.btn-group > div > button:hover,\n.btn-group > div > button:active {\n    animation: button-hover 1s;\n    border-radius: 5px;\n}\n\n.btn-group > div > button:active {\n    transform: scale(1.05);\n}\n.contact {\n    grid-column: 2/4;\n    grid-row: 1/2;   \n}\n\n.mask {\n    position: absolute;\n    width: 100%;\n    height: 100%;\n    background-image: var(--masking-opacity-to-right);\n    z-index: -1;\n}\n\n.mask-left {\n    position: absolute;\n    width: 100%;\n    height: 100%;\n    background-image: var(--masking-opacity-to-left);\n    z-index: -1;\n}\n\n.text-box {\n    width: 60vw;\n    height: 80vh;\n    color: white;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    gap: 1rem;\n    margin-left: 0.5rem;\n}\n\n.text-box > h3,\n.text-box > h5 {\n    font-style: italic;\n}\n\n.text-box > h1 {\n    transform: translate(0px, 2rem);\n}\n\nform {\n    width: min(300px, 60vw);\n    height: 80vh;\n    background-color: RGB(255, 255, 255, 0.85);\n    border-radius: var(--standard-border-radius);\n    padding: 1rem;\n    overflow-y: auto;\n    display: grid;\n    justify-content: center;\n    grid-template-columns: 1fr;\n}\n\n.contact { \n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\nlabel {\n    font-size: .6rem;\n    text-align: start;\n}\n\ninput, textarea {\n    display: block;\n    width: 100%;\n    border-radius: 5px;\n    border: 1px solid black;\n    padding: 2px;\n    font-size: .7rem;\n    font-family: inherit;\n}\n\n.btn-div {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    margin-top: 1rem;\n}\n\n.btn-div > button {\n    font-size: 0.8rem;\n    padding: 0rem .5rem;\n    background-color: white;\n    border: 1px solid black;\n    border-radius: 10px;\n    font-family: inherit;\n}\n\n.btn-div > button:hover {\n    border-color: purple;\n}\n.btn-div > button:active {\n    border-color: purple;\n    transform: translate(0px, 5px)\n}\n\n.footer {\n    background-color: black;\n    grid-column: 1/4;\n    display: flex;\n    font-size: 0.5rem;\n    justify-content: center;\n    align-items: center;\n    color: white;\n}",
            ],
            sourceRoot: "",
          },
        ]);
        // Exports
        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
          ___CSS_LOADER_EXPORT___;

        /***/
      },

    /***/ "./node_modules/css-loader/dist/runtime/api.js":
      /*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
      /***/ (module) => {
        /*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
        module.exports = function (cssWithMappingToString) {
          var list = []; // return the list of modules as css string

          list.toString = function toString() {
            return this.map(function (item) {
              var content = "";
              var needLayer = typeof item[5] !== "undefined";

              if (item[4]) {
                content += "@supports (".concat(item[4], ") {");
              }

              if (item[2]) {
                content += "@media ".concat(item[2], " {");
              }

              if (needLayer) {
                content += "@layer".concat(
                  item[5].length > 0 ? " ".concat(item[5]) : "",
                  " {"
                );
              }

              content += cssWithMappingToString(item);

              if (needLayer) {
                content += "}";
              }

              if (item[2]) {
                content += "}";
              }

              if (item[4]) {
                content += "}";
              }

              return content;
            }).join("");
          }; // import a list of modules into the list

          list.i = function i(modules, media, dedupe, supports, layer) {
            if (typeof modules === "string") {
              modules = [[null, modules, undefined]];
            }

            var alreadyImportedModules = {};

            if (dedupe) {
              for (var k = 0; k < this.length; k++) {
                var id = this[k][0];

                if (id != null) {
                  alreadyImportedModules[id] = true;
                }
              }
            }

            for (var _k = 0; _k < modules.length; _k++) {
              var item = [].concat(modules[_k]);

              if (dedupe && alreadyImportedModules[item[0]]) {
                continue;
              }

              if (typeof layer !== "undefined") {
                if (typeof item[5] === "undefined") {
                  item[5] = layer;
                } else {
                  item[1] = "@layer"
                    .concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {")
                    .concat(item[1], "}");
                  item[5] = layer;
                }
              }

              if (media) {
                if (!item[2]) {
                  item[2] = media;
                } else {
                  item[1] = "@media "
                    .concat(item[2], " {")
                    .concat(item[1], "}");
                  item[2] = media;
                }
              }

              if (supports) {
                if (!item[4]) {
                  item[4] = "".concat(supports);
                } else {
                  item[1] = "@supports ("
                    .concat(item[4], ") {")
                    .concat(item[1], "}");
                  item[4] = supports;
                }
              }

              list.push(item);
            }
          };

          return list;
        };

        /***/
      },

    /***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
      /*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
      /***/ (module) => {
        module.exports = function (item) {
          var content = item[1];
          var cssMapping = item[3];

          if (!cssMapping) {
            return content;
          }

          if (typeof btoa === "function") {
            var base64 = btoa(
              unescape(encodeURIComponent(JSON.stringify(cssMapping)))
            );
            var data =
              "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(
                base64
              );
            var sourceMapping = "/*# ".concat(data, " */");
            var sourceURLs = cssMapping.sources.map(function (source) {
              return "/*# sourceURL="
                .concat(cssMapping.sourceRoot || "")
                .concat(source, " */");
            });
            return [content]
              .concat(sourceURLs)
              .concat([sourceMapping])
              .join("\n");
          }

          return [content].join("\n");
        };

        /***/
      },

    /***/ "./src/style.css":
      /*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ default: () => __WEBPACK_DEFAULT_EXPORT__,
          /* harmony export */
        });
        /* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"
          );
        /* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default =
          /*#__PURE__*/ __webpack_require__.n(
            _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__
          );
        /* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(
            /*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js"
          );
        /* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default =
          /*#__PURE__*/ __webpack_require__.n(
            _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__
          );
        /* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(
            /*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js"
          );
        /* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default =
          /*#__PURE__*/ __webpack_require__.n(
            _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__
          );
        /* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__(
            /*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"
          );
        /* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default =
          /*#__PURE__*/ __webpack_require__.n(
            _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__
          );
        /* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ =
          __webpack_require__(
            /*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js"
          );
        /* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default =
          /*#__PURE__*/ __webpack_require__.n(
            _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__
          );
        /* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ =
          __webpack_require__(
            /*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js"
          );
        /* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default =
          /*#__PURE__*/ __webpack_require__.n(
            _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__
          );
        /* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ =
          __webpack_require__(
            /*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css"
          );

        var options = {};

        options.styleTagTransform =
          _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default();
        options.setAttributes =
          _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default();

        options.insert =
          _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(
            null,
            "head"
          );

        options.domAPI =
          _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default();
        options.insertStyleElement =
          _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default();

        var update =
          _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(
            _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[
              "default"
            ],
            options
          );

        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
          _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[
            "default"
          ] &&
          _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[
            "default"
          ].locals
            ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[
                "default"
              ].locals
            : undefined;

        /***/
      },

    /***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
      /*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
      /***/ (module) => {
        var stylesInDOM = [];

        function getIndexByIdentifier(identifier) {
          var result = -1;

          for (var i = 0; i < stylesInDOM.length; i++) {
            if (stylesInDOM[i].identifier === identifier) {
              result = i;
              break;
            }
          }

          return result;
        }

        function modulesToDom(list, options) {
          var idCountMap = {};
          var identifiers = [];

          for (var i = 0; i < list.length; i++) {
            var item = list[i];
            var id = options.base ? item[0] + options.base : item[0];
            var count = idCountMap[id] || 0;
            var identifier = "".concat(id, " ").concat(count);
            idCountMap[id] = count + 1;
            var indexByIdentifier = getIndexByIdentifier(identifier);
            var obj = {
              css: item[1],
              media: item[2],
              sourceMap: item[3],
              supports: item[4],
              layer: item[5],
            };

            if (indexByIdentifier !== -1) {
              stylesInDOM[indexByIdentifier].references++;
              stylesInDOM[indexByIdentifier].updater(obj);
            } else {
              var updater = addElementStyle(obj, options);
              options.byIndex = i;
              stylesInDOM.splice(i, 0, {
                identifier: identifier,
                updater: updater,
                references: 1,
              });
            }

            identifiers.push(identifier);
          }

          return identifiers;
        }

        function addElementStyle(obj, options) {
          var api = options.domAPI(options);
          api.update(obj);

          var updater = function updater(newObj) {
            if (newObj) {
              if (
                newObj.css === obj.css &&
                newObj.media === obj.media &&
                newObj.sourceMap === obj.sourceMap &&
                newObj.supports === obj.supports &&
                newObj.layer === obj.layer
              ) {
                return;
              }

              api.update((obj = newObj));
            } else {
              api.remove();
            }
          };

          return updater;
        }

        module.exports = function (list, options) {
          options = options || {};
          list = list || [];
          var lastIdentifiers = modulesToDom(list, options);
          return function update(newList) {
            newList = newList || [];

            for (var i = 0; i < lastIdentifiers.length; i++) {
              var identifier = lastIdentifiers[i];
              var index = getIndexByIdentifier(identifier);
              stylesInDOM[index].references--;
            }

            var newLastIdentifiers = modulesToDom(newList, options);

            for (var _i = 0; _i < lastIdentifiers.length; _i++) {
              var _identifier = lastIdentifiers[_i];

              var _index = getIndexByIdentifier(_identifier);

              if (stylesInDOM[_index].references === 0) {
                stylesInDOM[_index].updater();

                stylesInDOM.splice(_index, 1);
              }
            }

            lastIdentifiers = newLastIdentifiers;
          };
        };

        /***/
      },

    /***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
      /*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
      /***/ (module) => {
        var memo = {};
        /* istanbul ignore next  */

        function getTarget(target) {
          if (typeof memo[target] === "undefined") {
            var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

            if (
              window.HTMLIFrameElement &&
              styleTarget instanceof window.HTMLIFrameElement
            ) {
              try {
                // This will throw an exception if access to iframe is blocked
                // due to cross-origin restrictions
                styleTarget = styleTarget.contentDocument.head;
              } catch (e) {
                // istanbul ignore next
                styleTarget = null;
              }
            }

            memo[target] = styleTarget;
          }

          return memo[target];
        }
        /* istanbul ignore next  */

        function insertBySelector(insert, style) {
          var target = getTarget(insert);

          if (!target) {
            throw new Error(
              "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid."
            );
          }

          target.appendChild(style);
        }

        module.exports = insertBySelector;

        /***/
      },

    /***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
      /*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
      /***/ (module) => {
        /* istanbul ignore next  */
        function insertStyleElement(options) {
          var element = document.createElement("style");
          options.setAttributes(element, options.attributes);
          options.insert(element, options.options);
          return element;
        }

        module.exports = insertStyleElement;

        /***/
      },

    /***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
      /*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
      /***/ (module, __unused_webpack_exports, __webpack_require__) => {
        /* istanbul ignore next  */
        function setAttributesWithoutAttributes(styleElement) {
          var nonce = true ? __webpack_require__.nc : 0;

          if (nonce) {
            styleElement.setAttribute("nonce", nonce);
          }
        }

        module.exports = setAttributesWithoutAttributes;

        /***/
      },

    /***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
      /*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
      /***/ (module) => {
        /* istanbul ignore next  */
        function apply(styleElement, options, obj) {
          var css = "";

          if (obj.supports) {
            css += "@supports (".concat(obj.supports, ") {");
          }

          if (obj.media) {
            css += "@media ".concat(obj.media, " {");
          }

          var needLayer = typeof obj.layer !== "undefined";

          if (needLayer) {
            css += "@layer".concat(
              obj.layer.length > 0 ? " ".concat(obj.layer) : "",
              " {"
            );
          }

          css += obj.css;

          if (needLayer) {
            css += "}";
          }

          if (obj.media) {
            css += "}";
          }

          if (obj.supports) {
            css += "}";
          }

          var sourceMap = obj.sourceMap;

          if (sourceMap && typeof btoa !== "undefined") {
            css +=
              "\n/*# sourceMappingURL=data:application/json;base64,".concat(
                btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))),
                " */"
              );
          } // For old IE

          /* istanbul ignore if  */

          options.styleTagTransform(css, styleElement, options.options);
        }

        function removeStyleElement(styleElement) {
          // istanbul ignore if
          if (styleElement.parentNode === null) {
            return false;
          }

          styleElement.parentNode.removeChild(styleElement);
        }
        /* istanbul ignore next  */

        function domAPI(options) {
          var styleElement = options.insertStyleElement(options);
          return {
            update: function update(obj) {
              apply(styleElement, options, obj);
            },
            remove: function remove() {
              removeStyleElement(styleElement);
            },
          };
        }

        module.exports = domAPI;

        /***/
      },

    /***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
      /*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
      /***/ (module) => {
        /* istanbul ignore next  */
        function styleTagTransform(css, styleElement) {
          if (styleElement.styleSheet) {
            styleElement.styleSheet.cssText = css;
          } else {
            while (styleElement.firstChild) {
              styleElement.removeChild(styleElement.firstChild);
            }

            styleElement.appendChild(document.createTextNode(css));
          }
        }

        module.exports = styleTagTransform;

        /***/
      },

    /***/ "./src/anotherFunctions.js":
      /*!*********************************!*\
  !*** ./src/anotherFunctions.js ***!
  \*********************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ default: () => /* binding */ sayYes,
          /* harmony export */
        });
        function sayYes() {
          return "Yes";
        }

        /***/
      },

    /***/ "./src/functions.js":
      /*!**************************!*\
  !*** ./src/functions.js ***!
  \**************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ default: () => /* binding */ sum,
          /* harmony export */
        });
        function sum(a, b) {
          return a + b;
        }

        /***/
      },

    /***/ "./src/index.js":
      /*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(/*! ./style.css */ "./src/style.css");
        /* harmony import */ var _functions_js__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(/*! ./functions.js */ "./src/functions.js");
        /* harmony import */ var _anotherFunctions_js__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(
            /*! ./anotherFunctions.js */ "./src/anotherFunctions.js"
          );
        /* harmony import */ var _chefs_jpg__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__(/*! ./chefs.jpg */ "./src/chefs.jpg");
        /* harmony import */ var _korean_food_1_jpg__WEBPACK_IMPORTED_MODULE_4__ =
          __webpack_require__(
            /*! ./korean-food-1.jpg */ "./src/korean-food-1.jpg"
          );
        /* harmony import */ var _bibimbap_jpg__WEBPACK_IMPORTED_MODULE_5__ =
          __webpack_require__(/*! ./bibimbap.jpg */ "./src/bibimbap.jpg");
        /* harmony import */ var _galbi_jpg__WEBPACK_IMPORTED_MODULE_6__ =
          __webpack_require__(/*! ./galbi.jpg */ "./src/galbi.jpg");
        /* harmony import */ var _tang_jpg__WEBPACK_IMPORTED_MODULE_7__ =
          __webpack_require__(/*! ./tang.jpg */ "./src/tang.jpg");
        /* harmony import */ var _kimch_jpg__WEBPACK_IMPORTED_MODULE_8__ =
          __webpack_require__(/*! ./kimch.jpg */ "./src/kimch.jpg");
        /* harmony import */ var _bg3_jpg__WEBPACK_IMPORTED_MODULE_9__ =
          __webpack_require__(/*! ./bg3.jpg */ "./src/bg3.jpg");

        // import Icon from './icon.png';
        function component() {
          const element = document.createElement("div");

          // Lodash, currently included via a script, is required for this line to work
          element.textContent = "Hello, my name is Sol";
          element.className = "hello";

          // Add the image to our existing div.
          // const myIcon = new Image();
          // myIcon.src = Icon;

          // element.appendChild(myIcon);
          return element;
        }

        function setMultipleAttribute(dom, obj) {
          for (let key in obj) {
            dom.setAttribute(key, obj[key]);
          }
        }

        function makeMenuList() {
          const menuUl = document.createElement("ul");
          const entry = document.createElement("li");
          const main = document.createElement("li");
          const desserts = document.createElement("li");
          const entryA1 = document.createElement("a");
          const mainA2 = document.createElement("a");
          const dessertsA3 = document.createElement("a");

          entryA1.textContent = "Entry";
          mainA2.textContent = "Main";
          dessertsA3.textContent = "Desserts";
          setMultipleAttribute(entryA1, { href: "#", id: "entry-btn" });
          setMultipleAttribute(mainA2, { href: "#", id: "main-btn" });
          setMultipleAttribute(dessertsA3, { href: "#", id: "desserts-btn" });

          entry.appendChild(entryA1);
          main.appendChild(mainA2);
          desserts.appendChild(dessertsA3);

          menuUl.append(entry, main, desserts);
          menuUl.setAttribute("id", "menu-ul");
          menuUl.className = "menu-ul";

          return menuUl;
        }

        function makeSidebar() {
          const sideBar = document.createElement("div");
          const ul = document.createElement("ul");
          const li1 = document.createElement("li");
          const li2 = document.createElement("li");
          const li3 = document.createElement("li");
          const a1 = document.createElement("a");
          const a2 = document.createElement("a");
          const a3 = document.createElement("a");
          setMultipleAttribute(a1, { href: "#", id: "home-btn" });
          setMultipleAttribute(a2, { href: "#", id: "menu-btn" });
          setMultipleAttribute(a3, { href: "#", id: "contact-btn" });

          //sidebar
          sideBar.className = "side-bar";
          a1.textContent = "Home";
          a2.textContent = "Menu";
          a3.textContent = "Contact";

          li1.appendChild(a1);
          li2.appendChild(a2);
          li3.appendChild(a3);

          ul.append(li1, li2, li3);
          sideBar.appendChild(ul);

          li2.addEventListener("click", (e) => {
            const mn = document.getElementById("menu-ul");
            if (mn === null) {
              li2.appendChild(makeMenuList());
            } else if (e.target.id === "menu-btn") {
              li2.removeChild(mn);
            }
          });

          return sideBar;
        }

        function makeFooter() {
          const footer = document.createElement("div");
          const p = document.createElement("div");
          p.textContent =
            "github@moonsol124 image source: https://www.pexels.com/";
          footer.className = "footer";
          footer.appendChild(p);
          return footer;
        }

        function makeHome() {
          //images
          const chefsImg = new Image();
          chefsImg.src = _chefs_jpg__WEBPACK_IMPORTED_MODULE_3__;

          const content = document.createElement("div");
          const mask = document.createElement("div");
          const textBox = document.createElement("div");
          const descriptionH2 = document.createElement("h2");
          const descriptionH3 = document.createElement("h3");
          const descriptionH5 = document.createElement("h5");
          const titleH1 = document.createElement("h1");

          // content1
          content.setAttribute(
            "style",
            `background-image: url(${chefsImg.src});`
          );
          content.className = "content to-delete";

          // mask
          mask.classList = "mask";

          //textbox
          textBox.className = "text-box";
          descriptionH2.textContent = "Ole, oh my god!";
          descriptionH3.textContent =
            "Korean cuisine is largely based on vegetables";
          descriptionH5.textContent = "Ingredients and dishes vary by province";
          titleH1.textContent = "Welcome to my restaurant.";
          textBox.append(descriptionH2, descriptionH3, descriptionH5, titleH1);
          content.append(mask, textBox);

          return content;
        }

        function makeCard(imageSrc, name, description, price) {
          const card = document.createElement("div");
          const img = document.createElement("div");
          const btnGroup = document.createElement("div");
          const btnSub1 = document.createElement("div");
          const btnSub2 = document.createElement("div");

          //card img
          img.setAttribute("style", `background-image: url(${imageSrc})`);
          img.className = "card-img";
          //img description
          const dsc = document.createElement("p");
          dsc.textContent = description;
          //btn group
          const nm = document.createElement("button");
          nm.textContent = name;
          btnSub1.appendChild(nm);

          const prc = document.createElement("button");
          prc.textContent = "$" + price;
          const ingredients = document.createElement("button");
          ingredients.textContent = "See ingredients";
          btnSub2.append(prc, ingredients);
          btnGroup.append(btnSub1, btnSub2);
          btnGroup.className = "btn-group";
          card.append(img, dsc, btnGroup);

          card.className = "card-body";
          return card;
        }

        function makeMenu() {
          const content = document.createElement("div");
          const card = document.createElement("card");
          const div1 = document.createElement("div");
          const div2 = document.createElement("div");

          //backgroud-img
          const bgImg = new Image();
          bgImg.src = _korean_food_1_jpg__WEBPACK_IMPORTED_MODULE_4__;
          content.setAttribute("style", `background-image: url(${bgImg.src})`);
          content.className = "content menu to-delete";

          //card
          card.className = "card";
          const galbiImg = new Image();
          galbiImg.src = _galbi_jpg__WEBPACK_IMPORTED_MODULE_6__;
          const tangImg = new Image();
          tangImg.src = _tang_jpg__WEBPACK_IMPORTED_MODULE_7__;
          const kimchiImg = new Image();
          kimchiImg.src = _kimch_jpg__WEBPACK_IMPORTED_MODULE_8__;

          const card1 = makeCard(
            galbiImg.src,
            "Galbi",
            "Korean cuisine has evolved through centuries of social and political change.",
            "10"
          );
          const card2 = makeCard(
            tangImg.src,
            "Yukgejang",
            "In the Jeulmun pottery period, hunter-gatherer societies engaged in fishing and hunting.",
            "10"
          );
          const card3 = makeCard(
            kimchiImg.src,
            "Kimchi",
            "The Three Kingdoms period (57 BCE – 668 CE) was one of rapid cultural evolution.",
            "5"
          );
          const card4 = makeCard("#", "name", "description", "price");
          const card5 = makeCard("#", "name", "description", "price");
          const card6 = makeCard("#", "name", "description", "price");

          card.append(card1, card2, card3, card4, card5, card6);

          content.appendChild(card);
          return content;
        }

        function formDiv(type, name, id, labelText) {
          this.type = type;
          this.name = name;
          this.id = id;
          this.labelText = labelText;
          this.createDiv = function () {
            this.div = document.createElement("div");
            this.div.className = "form-div";
            if (this.type === "textarea") {
              this.label = document.createElement("label");
              this.textarea = document.createElement("textarea");
              this.label.setAttribute("for", "textarea");
              this.textarea.setAttribute("id", "textarea");
              this.textarea.setAttribute("rows", 8);
              this.label.textContent = labelText + ": ";
              this.div.append(this.label, this.textarea);
            } else {
              this.label = document.createElement("label");
              this.input = document.createElement("input");
              this.label.setAttribute("for", this.id);
              this.label.textContent = labelText + ": ";
              setMultipleAttribute(this.input, {
                type: this.type,
                name: this.name,
                id: this.id,
              });
              this.div.append(this.label, this.input);
            }
            return this.div;
          };
        }

        function makeContact() {
          const content = document.createElement("div");
          const form = document.createElement("form");
          const formContainer = document.createElement("div");
          const mask = document.createElement("div");
          mask.className = "mask-left";
          const contentBg = new Image();
          contentBg.src = _bg3_jpg__WEBPACK_IMPORTED_MODULE_9__;
          content.setAttribute(
            "style",
            `background-image: url(${contentBg.src})`
          );
          content.className = "content contact to-delete";

          const firstName = new formDiv("text", "fName", "fName", "First Name");
          const lastName = new formDiv("text", "lName", "lName", "Last Name");
          const email = new formDiv("email", "email", "email", "Email");
          const tel = new formDiv("tel", "tel", "tel", "Phone Number");
          const textArea = new formDiv(
            "textarea",
            "textarea",
            "textarea",
            "Comment"
          );
          const btn = document.createElement("button");
          btn.textContent = "Send";
          btn.setAttribute("type", "button");
          const btnDiv = document.createElement("div");
          btnDiv.className = "btn-div";
          btnDiv.appendChild(btn);

          formContainer.append(
            firstName.createDiv(),
            lastName.createDiv(),
            email.createDiv(),
            tel.createDiv(),
            textArea.createDiv(),
            btnDiv
          );
          form.appendChild(formContainer);
          content.append(mask, form);

          return content;
        }

        function switchMenu(content) {
          const parentsNode = document.querySelector(".template");
          const child = document.querySelector(".to-delete");
          parentsNode.removeChild(child);
          template.appendChild(content);
        }

        const template = document.createElement("div");
        template.classList = "template";
        template.append(makeSidebar(), makeFooter(), makeHome());
        document.body.appendChild(template);

        template.addEventListener("click", (e) => {
          if (e.target.id === "home-btn") {
            switchMenu(makeHome());
          } else if (e.target.id === "menu-btn") {
            switchMenu(makeMenu());
          } else if (e.target.id === "contact-btn") {
            switchMenu(makeContact());
          }
        });

        /***/
      },

    /***/ "./src/bg3.jpg":
      /*!*********************!*\
  !*** ./src/bg3.jpg ***!
  \*********************/
      /***/ (module, __unused_webpack_exports, __webpack_require__) => {
        module.exports = __webpack_require__.p + "3bdbdd4680a7f82d3801.jpg";

        /***/
      },

    /***/ "./src/bibimbap.jpg":
      /*!**************************!*\
  !*** ./src/bibimbap.jpg ***!
  \**************************/
      /***/ (module, __unused_webpack_exports, __webpack_require__) => {
        module.exports = __webpack_require__.p + "2015c1326d3839902455.jpg";

        /***/
      },

    /***/ "./src/chefs.jpg":
      /*!***********************!*\
  !*** ./src/chefs.jpg ***!
  \***********************/
      /***/ (module, __unused_webpack_exports, __webpack_require__) => {
        module.exports = __webpack_require__.p + "961994db46e73372a540.jpg";

        /***/
      },

    /***/ "./src/galbi.jpg":
      /*!***********************!*\
  !*** ./src/galbi.jpg ***!
  \***********************/
      /***/ (module, __unused_webpack_exports, __webpack_require__) => {
        module.exports = __webpack_require__.p + "406e158b406e24e82644.jpg";

        /***/
      },

    /***/ "./src/kimch.jpg":
      /*!***********************!*\
  !*** ./src/kimch.jpg ***!
  \***********************/
      /***/ (module, __unused_webpack_exports, __webpack_require__) => {
        module.exports = __webpack_require__.p + "c08d51d1bb1535afa0ff.jpg";

        /***/
      },

    /***/ "./src/korean-food-1.jpg":
      /*!*******************************!*\
  !*** ./src/korean-food-1.jpg ***!
  \*******************************/
      /***/ (module, __unused_webpack_exports, __webpack_require__) => {
        module.exports = __webpack_require__.p + "6ad73127302af5c033cc.jpg";

        /***/
      },

    /***/ "./src/tang.jpg":
      /*!**********************!*\
  !*** ./src/tang.jpg ***!
  \**********************/
      /***/ (module, __unused_webpack_exports, __webpack_require__) => {
        module.exports = __webpack_require__.p + "7a2e1da9b117b157b6d4.jpg";

        /***/
      },
  },
  /******/ (__webpack_require__) => {
    // webpackRuntimeModules
    /******/ var __webpack_exec__ = (moduleId) =>
      __webpack_require__((__webpack_require__.s = moduleId));
    /******/ var __webpack_exports__ = __webpack_exec__("./src/index.js");
    /******/
  },
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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dXJhbnRlLXBhZ2UtdG9wLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50ZS1wYWdlLXRvcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudGUtcGFnZS10b3AvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50ZS1wYWdlLXRvcC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50ZS1wYWdlLXRvcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50ZS1wYWdlLXRvcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudGUtcGFnZS10b3AvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudGUtcGFnZS10b3AvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudGUtcGFnZS10b3AvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50ZS1wYWdlLXRvcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRlLXBhZ2UtdG9wLy4vc3JjL2Fub3RoZXJGdW5jdGlvbnMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudGUtcGFnZS10b3AvLi9zcmMvZnVuY3Rpb25zLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRlLXBhZ2UtdG9wLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiOnJvb3Qge1xcbiAgICBmb250LXNpemU6IDI2cHg7XFxuICAgIC0taW5zZXQtYm94LXNoYWRvdzogaW5zZXQgMHB4IDBweCA1cmVtIGJsYWNrO1xcbiAgICAtLW1hc2tpbmctb3BhY2l0eS10by1yaWdodDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCByZ2JhKDAsMCwwLDEpLCByZ2JhKDAsMCwwLDAuOCksIHJnYmEoMCwwLDAsMCkpO1xcbiAgICAtLW1hc2tpbmctb3BhY2l0eS10by1sZWZ0OiBsaW5lYXItZ3JhZGllbnQodG8gbGVmdCwgcmdiYSgwLDAsMCwxKSwgcmdiYSgwLDAsMCwwLjIpLCByZ2JhKDAsMCwwLDAuMCkpO1xcblxcbiAgICAtLXN0YW5kYXJkLWJvcmRlci1yYWRpdXM6IDE2cHg7XFxuICAgIC0tYmxhY2stYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxufVxcblxcbnVsIHtcXG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcbn1cXG5cXG5hIHtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgICBjb2xvcjogUkdCKDI1NSwgMjU1LCAyNTUsIDAuNik7XFxuICAgIHRleHQtZGVjb3JhdGlvbi1saW5lOiBub25lO1xcbn1cXG5cXG5hOmhvdmVyLCBhOmFjdGl2ZSB7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG59XFxuICBcXG4qIHtcXG4gICAgcGFkZGluZzogMHB4O1xcbiAgICBtYXJnaW46IDBweDtcXG4gICAgZm9udC1mYW1pbHk6ICdUaW1lcyBOZXcgUm9tYW4nLCBUaW1lcywgc2VyaWY7IFxcbn1cXG5cXG5ib2R5IHtcXG4gICAgbWluLWhlaWdodDogMTAwdmg7XFxufVxcblxcbi50ZW1wbGF0ZSB7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIHdpZHRoOiAxMDB2dztcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogODBweCAxMGZyO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAuMDc1ZnI7XFxufVxcblxcbi8qIHNpZGViYXIgKi9cXG4uc2lkZS1iYXIge1xcbiAgICBwYWRkaW5nOiAuM3JlbTtcXG4gICAgZ3JpZC1jb2x1bW46IDEvMjtcXG4gICAgZ3JpZC1yb3c6IDE7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbn1cXG5cXG4uc2lkZS1iYXIgPiB1bCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbiAgICBnYXA6IDFyZW07XFxuICAgIG1hcmdpbi10b3A6IDAuNXJlbTtcXG59XFxuLnNpZGUtYmFyID4gdWwgPiBsaSB7XFxuICAgIGNvbG9yOiBSR0IoMjU1LCAyNTUsIDI1NSwgMC42KTtcXG4gICAgZm9udC1zaXplOiAwLjdyZW07XFxuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcXG59XFxuXFxuLyogY29udGVudDEgKi9cXG4uY29udGVudCB7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICAgIGZpbHRlcjogYmx1cigwcHgpO1xcbiAgICBib3gtc2hhZG93OiB2YXIoLS1pbnNldC1ib3gtc2hhZG93KTtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBncmlkLWNvbHVtbjogMi80O1xcbiAgICBncmlkLXJvdzogMS8yO1xcbn1cXG5cXG4ubWVudSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4ubWVudS11bCB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdhcDogNXB4O1xcbiAgICBtYXJnaW4tbGVmdDogNXB4O1xcbiAgICBtYXJnaW4tdG9wOiA1cHg7XFxufVxcbi5jYXJkIHtcXG4gICAgd2lkdGg6IDkwJTtcXG4gICAgaGVpZ2h0OiA5MCU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IFJHQigyNTUsIDI1NSwgMjU1LCAwLjg1KTtcXG4gICAgYm9yZGVyLXJhZGl1czogdmFyKC0tc3RhbmRhcmQtYm9yZGVyLXJhZGl1cyk7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maWxsLCBtaW5tYXgoMjUwcHgsIDFmcikpO1xcbiAgICBncmlkLWF1dG8tcm93czogMjUwcHg7XFxuICAgIGdhcDogMXJlbTtcXG4gICAgcGFkZGluZzogLjVyZW07XFxuICAgIG92ZXJmbG93LXk6IGF1dG87XFxufVxcblxcbi5jYXJkID4gZGl2IHtcXG4gICAgYm9yZGVyLXJhZGl1czogdmFyKC0tc3RhbmRhcmQtYm9yZGVyLXJhZGl1cyk7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogN2ZyIDJmciAxZnI7XFxuICAgIGJvcmRlcjogdmFyKC0tYmxhY2stYm9yZGVyKTtcXG59XFxuXFxuLmNhcmQgPiBkaXYgPiBwLFxcbi5jYXJkID4gZGl2ID4gLmJ0bi1ncm91cCB7XFxuICAgIHBhZGRpbmc6IDAuMXJlbSAwLjNyZW07XFxufVxcblxcbi5jYXJkLWltZyB7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICAgIGJvcmRlci1yYWRpdXM6IDE2cHg7XFxuICAgIHBhZGRpbmc6IDBweDtcXG59XFxuXFxuLmNhcmQgPiBkaXYgPiBwIHtcXG4gICAgZm9udC1zaXplOiAxNnB4O1xcbiAgICB0ZXh0LWFsaWduOiBlbmQ7XFxuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcXG59XFxuXFxuLmJ0bi1ncm91cCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuLmJ0bi1ncm91cCA+IGRpdiA+IGJ1dHRvbiB7XFxuICAgIGZvbnQtc2l6ZTogMTZweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XFxufVxcblxcbkBrZXlmcmFtZXMgYnV0dG9uLWhvdmVyIHtcXG4gICAgZnJvbSB7YmFja2dyb3VuZC1jb2xvcjogUkdCKDIwMCwgNTAsIDI1NSwgMSk7fVxcbiAgICB0byB7YmFja2dyb3VuZC1jb2xvcjogUkdCKDIwMCwgNTAsIDI1NSwgMCk7fVxcbn1cXG5cXG4uYnRuLWdyb3VwID4gZGl2ID4gYnV0dG9uOmhvdmVyLFxcbi5idG4tZ3JvdXAgPiBkaXYgPiBidXR0b246YWN0aXZlIHtcXG4gICAgYW5pbWF0aW9uOiBidXR0b24taG92ZXIgMXM7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG59XFxuXFxuLmJ0bi1ncm91cCA+IGRpdiA+IGJ1dHRvbjphY3RpdmUge1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDUpO1xcbn1cXG4uY29udGFjdCB7XFxuICAgIGdyaWQtY29sdW1uOiAyLzQ7XFxuICAgIGdyaWQtcm93OiAxLzI7ICAgXFxufVxcblxcbi5tYXNrIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB2YXIoLS1tYXNraW5nLW9wYWNpdHktdG8tcmlnaHQpO1xcbiAgICB6LWluZGV4OiAtMTtcXG59XFxuXFxuLm1hc2stbGVmdCB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdmFyKC0tbWFza2luZy1vcGFjaXR5LXRvLWxlZnQpO1xcbiAgICB6LWluZGV4OiAtMTtcXG59XFxuXFxuLnRleHQtYm94IHtcXG4gICAgd2lkdGg6IDYwdnc7XFxuICAgIGhlaWdodDogODB2aDtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgZ2FwOiAxcmVtO1xcbiAgICBtYXJnaW4tbGVmdDogMC41cmVtO1xcbn1cXG5cXG4udGV4dC1ib3ggPiBoMyxcXG4udGV4dC1ib3ggPiBoNSB7XFxuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcXG59XFxuXFxuLnRleHQtYm94ID4gaDEge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwcHgsIDJyZW0pO1xcbn1cXG5cXG5mb3JtIHtcXG4gICAgd2lkdGg6IG1pbigzMDBweCwgNjB2dyk7XFxuICAgIGhlaWdodDogODB2aDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogUkdCKDI1NSwgMjU1LCAyNTUsIDAuODUpO1xcbiAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1zdGFuZGFyZC1ib3JkZXItcmFkaXVzKTtcXG4gICAgcGFkZGluZzogMXJlbTtcXG4gICAgb3ZlcmZsb3cteTogYXV0bztcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xcbn1cXG5cXG4uY29udGFjdCB7IFxcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxubGFiZWwge1xcbiAgICBmb250LXNpemU6IC42cmVtO1xcbiAgICB0ZXh0LWFsaWduOiBzdGFydDtcXG59XFxuXFxuaW5wdXQsIHRleHRhcmVhIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbiAgICBwYWRkaW5nOiAycHg7XFxuICAgIGZvbnQtc2l6ZTogLjdyZW07XFxuICAgIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcbn1cXG5cXG4uYnRuLWRpdiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBtYXJnaW4tdG9wOiAxcmVtO1xcbn1cXG5cXG4uYnRuLWRpdiA+IGJ1dHRvbiB7XFxuICAgIGZvbnQtc2l6ZTogMC44cmVtO1xcbiAgICBwYWRkaW5nOiAwcmVtIC41cmVtO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcbn1cXG5cXG4uYnRuLWRpdiA+IGJ1dHRvbjpob3ZlciB7XFxuICAgIGJvcmRlci1jb2xvcjogcHVycGxlO1xcbn1cXG4uYnRuLWRpdiA+IGJ1dHRvbjphY3RpdmUge1xcbiAgICBib3JkZXItY29sb3I6IHB1cnBsZTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMHB4LCA1cHgpXFxufVxcblxcbi5mb290ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gICAgZ3JpZC1jb2x1bW46IDEvNDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZm9udC1zaXplOiAwLjVyZW07XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBjb2xvcjogd2hpdGU7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxlQUFlO0lBQ2YsNENBQTRDO0lBQzVDLG9HQUFvRztJQUNwRyxvR0FBb0c7O0lBRXBHLDhCQUE4QjtJQUM5QiwrQkFBK0I7QUFDbkM7O0FBRUE7SUFDSSxxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsOEJBQThCO0lBQzlCLDBCQUEwQjtBQUM5Qjs7QUFFQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osV0FBVztJQUNYLDRDQUE0QztBQUNoRDs7QUFFQTtJQUNJLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixZQUFZO0lBQ1osdUJBQXVCO0lBQ3ZCLGFBQWE7SUFDYixnQ0FBZ0M7SUFDaEMsOEJBQThCO0FBQ2xDOztBQUVBLFlBQVk7QUFDWjtJQUNJLGNBQWM7SUFDZCxnQkFBZ0I7SUFDaEIsV0FBVztJQUNYLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsdUJBQXVCO0lBQ3ZCLFNBQVM7SUFDVCxrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLDhCQUE4QjtJQUM5QixpQkFBaUI7SUFDakIsa0JBQWtCO0FBQ3RCOztBQUVBLGFBQWE7QUFDYjtJQUNJLHNCQUFzQjtJQUN0Qiw0QkFBNEI7SUFDNUIsaUJBQWlCO0lBQ2pCLG1DQUFtQztJQUNuQyxrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixRQUFRO0lBQ1IsZ0JBQWdCO0lBQ2hCLGVBQWU7QUFDbkI7QUFDQTtJQUNJLFVBQVU7SUFDVixXQUFXO0lBQ1gsMENBQTBDO0lBQzFDLDRDQUE0QztJQUM1QyxrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLDREQUE0RDtJQUM1RCxxQkFBcUI7SUFDckIsU0FBUztJQUNULGNBQWM7SUFDZCxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSw0Q0FBNEM7SUFDNUMsYUFBYTtJQUNiLCtCQUErQjtJQUMvQiwyQkFBMkI7QUFDL0I7O0FBRUE7O0lBRUksc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksc0JBQXNCO0lBQ3RCLDRCQUE0QjtJQUM1QixtQkFBbUI7SUFDbkIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGVBQWU7SUFDZixlQUFlO0lBQ2Ysa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLDhCQUE4QjtBQUNsQztBQUNBO0lBQ0ksZUFBZTtJQUNmLDZCQUE2QjtJQUM3QixZQUFZO0lBQ1osaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksTUFBTSxzQ0FBc0MsQ0FBQztJQUM3QyxJQUFJLHNDQUFzQyxDQUFDO0FBQy9DOztBQUVBOztJQUVJLDBCQUEwQjtJQUMxQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxzQkFBc0I7QUFDMUI7QUFDQTtJQUNJLGdCQUFnQjtJQUNoQixhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxZQUFZO0lBQ1osaURBQWlEO0lBQ2pELFdBQVc7QUFDZjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsWUFBWTtJQUNaLGdEQUFnRDtJQUNoRCxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLFlBQVk7SUFDWixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLHVCQUF1QjtJQUN2QixTQUFTO0lBQ1QsbUJBQW1CO0FBQ3ZCOztBQUVBOztJQUVJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLCtCQUErQjtBQUNuQzs7QUFFQTtJQUNJLHVCQUF1QjtJQUN2QixZQUFZO0lBQ1osMENBQTBDO0lBQzFDLDRDQUE0QztJQUM1QyxhQUFhO0lBQ2IsZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsMEJBQTBCO0FBQzlCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksY0FBYztJQUNkLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsdUJBQXVCO0lBQ3ZCLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsb0JBQW9CO0FBQ3hCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSSxvQkFBb0I7QUFDeEI7QUFDQTtJQUNJLG9CQUFvQjtJQUNwQjtBQUNKOztBQUVBO0lBQ0ksdUJBQXVCO0lBQ3ZCLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2IsaUJBQWlCO0lBQ2pCLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsWUFBWTtBQUNoQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCI6cm9vdCB7XFxuICAgIGZvbnQtc2l6ZTogMjZweDtcXG4gICAgLS1pbnNldC1ib3gtc2hhZG93OiBpbnNldCAwcHggMHB4IDVyZW0gYmxhY2s7XFxuICAgIC0tbWFza2luZy1vcGFjaXR5LXRvLXJpZ2h0OiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIHJnYmEoMCwwLDAsMSksIHJnYmEoMCwwLDAsMC44KSwgcmdiYSgwLDAsMCwwKSk7XFxuICAgIC0tbWFza2luZy1vcGFjaXR5LXRvLWxlZnQ6IGxpbmVhci1ncmFkaWVudCh0byBsZWZ0LCByZ2JhKDAsMCwwLDEpLCByZ2JhKDAsMCwwLDAuMiksIHJnYmEoMCwwLDAsMC4wKSk7XFxuXFxuICAgIC0tc3RhbmRhcmQtYm9yZGVyLXJhZGl1czogMTZweDtcXG4gICAgLS1ibGFjay1ib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG59XFxuXFxudWwge1xcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxufVxcblxcbmEge1xcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICAgIGNvbG9yOiBSR0IoMjU1LCAyNTUsIDI1NSwgMC42KTtcXG4gICAgdGV4dC1kZWNvcmF0aW9uLWxpbmU6IG5vbmU7XFxufVxcblxcbmE6aG92ZXIsIGE6YWN0aXZlIHtcXG4gICAgY29sb3I6IHdoaXRlO1xcbn1cXG4gIFxcbioge1xcbiAgICBwYWRkaW5nOiAwcHg7XFxuICAgIG1hcmdpbjogMHB4O1xcbiAgICBmb250LWZhbWlseTogJ1RpbWVzIE5ldyBSb21hbicsIFRpbWVzLCBzZXJpZjsgXFxufVxcblxcbmJvZHkge1xcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcXG59XFxuXFxuLnRlbXBsYXRlIHtcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgd2lkdGg6IDEwMHZ3O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA4MHB4IDEwZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIC4wNzVmcjtcXG59XFxuXFxuLyogc2lkZWJhciAqL1xcbi5zaWRlLWJhciB7XFxuICAgIHBhZGRpbmc6IC4zcmVtO1xcbiAgICBncmlkLWNvbHVtbjogMS8yO1xcbiAgICBncmlkLXJvdzogMTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxufVxcblxcbi5zaWRlLWJhciA+IHVsIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxuICAgIGdhcDogMXJlbTtcXG4gICAgbWFyZ2luLXRvcDogMC41cmVtO1xcbn1cXG4uc2lkZS1iYXIgPiB1bCA+IGxpIHtcXG4gICAgY29sb3I6IFJHQigyNTUsIDI1NSwgMjU1LCAwLjYpO1xcbiAgICBmb250LXNpemU6IDAuN3JlbTtcXG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xcbn1cXG5cXG4vKiBjb250ZW50MSAqL1xcbi5jb250ZW50IHtcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gICAgZmlsdGVyOiBibHVyKDBweCk7XFxuICAgIGJveC1zaGFkb3c6IHZhcigtLWluc2V0LWJveC1zaGFkb3cpO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGdyaWQtY29sdW1uOiAyLzQ7XFxuICAgIGdyaWQtcm93OiAxLzI7XFxufVxcblxcbi5tZW51IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5tZW51LXVsIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ2FwOiA1cHg7XFxuICAgIG1hcmdpbi1sZWZ0OiA1cHg7XFxuICAgIG1hcmdpbi10b3A6IDVweDtcXG59XFxuLmNhcmQge1xcbiAgICB3aWR0aDogOTAlO1xcbiAgICBoZWlnaHQ6IDkwJTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogUkdCKDI1NSwgMjU1LCAyNTUsIDAuODUpO1xcbiAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1zdGFuZGFyZC1ib3JkZXItcmFkaXVzKTtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpbGwsIG1pbm1heCgyNTBweCwgMWZyKSk7XFxuICAgIGdyaWQtYXV0by1yb3dzOiAyNTBweDtcXG4gICAgZ2FwOiAxcmVtO1xcbiAgICBwYWRkaW5nOiAuNXJlbTtcXG4gICAgb3ZlcmZsb3cteTogYXV0bztcXG59XFxuXFxuLmNhcmQgPiBkaXYge1xcbiAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1zdGFuZGFyZC1ib3JkZXItcmFkaXVzKTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA3ZnIgMmZyIDFmcjtcXG4gICAgYm9yZGVyOiB2YXIoLS1ibGFjay1ib3JkZXIpO1xcbn1cXG5cXG4uY2FyZCA+IGRpdiA+IHAsXFxuLmNhcmQgPiBkaXYgPiAuYnRuLWdyb3VwIHtcXG4gICAgcGFkZGluZzogMC4xcmVtIDAuM3JlbTtcXG59XFxuXFxuLmNhcmQtaW1nIHtcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gICAgYm9yZGVyLXJhZGl1czogMTZweDtcXG4gICAgcGFkZGluZzogMHB4O1xcbn1cXG5cXG4uY2FyZCA+IGRpdiA+IHAge1xcbiAgICBmb250LXNpemU6IDE2cHg7XFxuICAgIHRleHQtYWxpZ246IGVuZDtcXG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xcbn1cXG5cXG4uYnRuLWdyb3VwIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG4uYnRuLWdyb3VwID4gZGl2ID4gYnV0dG9uIHtcXG4gICAgZm9udC1zaXplOiAxNnB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcXG59XFxuXFxuQGtleWZyYW1lcyBidXR0b24taG92ZXIge1xcbiAgICBmcm9tIHtiYWNrZ3JvdW5kLWNvbG9yOiBSR0IoMjAwLCA1MCwgMjU1LCAxKTt9XFxuICAgIHRvIHtiYWNrZ3JvdW5kLWNvbG9yOiBSR0IoMjAwLCA1MCwgMjU1LCAwKTt9XFxufVxcblxcbi5idG4tZ3JvdXAgPiBkaXYgPiBidXR0b246aG92ZXIsXFxuLmJ0bi1ncm91cCA+IGRpdiA+IGJ1dHRvbjphY3RpdmUge1xcbiAgICBhbmltYXRpb246IGJ1dHRvbi1ob3ZlciAxcztcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbn1cXG5cXG4uYnRuLWdyb3VwID4gZGl2ID4gYnV0dG9uOmFjdGl2ZSB7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wNSk7XFxufVxcbi5jb250YWN0IHtcXG4gICAgZ3JpZC1jb2x1bW46IDIvNDtcXG4gICAgZ3JpZC1yb3c6IDEvMjsgICBcXG59XFxuXFxuLm1hc2sge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHZhcigtLW1hc2tpbmctb3BhY2l0eS10by1yaWdodCk7XFxuICAgIHotaW5kZXg6IC0xO1xcbn1cXG5cXG4ubWFzay1sZWZ0IHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB2YXIoLS1tYXNraW5nLW9wYWNpdHktdG8tbGVmdCk7XFxuICAgIHotaW5kZXg6IC0xO1xcbn1cXG5cXG4udGV4dC1ib3gge1xcbiAgICB3aWR0aDogNjB2dztcXG4gICAgaGVpZ2h0OiA4MHZoO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBnYXA6IDFyZW07XFxuICAgIG1hcmdpbi1sZWZ0OiAwLjVyZW07XFxufVxcblxcbi50ZXh0LWJveCA+IGgzLFxcbi50ZXh0LWJveCA+IGg1IHtcXG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xcbn1cXG5cXG4udGV4dC1ib3ggPiBoMSB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDBweCwgMnJlbSk7XFxufVxcblxcbmZvcm0ge1xcbiAgICB3aWR0aDogbWluKDMwMHB4LCA2MHZ3KTtcXG4gICAgaGVpZ2h0OiA4MHZoO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBSR0IoMjU1LCAyNTUsIDI1NSwgMC44NSk7XFxuICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLXN0YW5kYXJkLWJvcmRlci1yYWRpdXMpO1xcbiAgICBwYWRkaW5nOiAxcmVtO1xcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XFxufVxcblxcbi5jb250YWN0IHsgXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG5sYWJlbCB7XFxuICAgIGZvbnQtc2l6ZTogLjZyZW07XFxuICAgIHRleHQtYWxpZ246IHN0YXJ0O1xcbn1cXG5cXG5pbnB1dCwgdGV4dGFyZWEge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICAgIHBhZGRpbmc6IDJweDtcXG4gICAgZm9udC1zaXplOiAuN3JlbTtcXG4gICAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XFxufVxcblxcbi5idG4tZGl2IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIG1hcmdpbi10b3A6IDFyZW07XFxufVxcblxcbi5idG4tZGl2ID4gYnV0dG9uIHtcXG4gICAgZm9udC1zaXplOiAwLjhyZW07XFxuICAgIHBhZGRpbmc6IDByZW0gLjVyZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XFxufVxcblxcbi5idG4tZGl2ID4gYnV0dG9uOmhvdmVyIHtcXG4gICAgYm9yZGVyLWNvbG9yOiBwdXJwbGU7XFxufVxcbi5idG4tZGl2ID4gYnV0dG9uOmFjdGl2ZSB7XFxuICAgIGJvcmRlci1jb2xvcjogcHVycGxlO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwcHgsIDVweClcXG59XFxuXFxuLmZvb3RlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgICBncmlkLWNvbHVtbjogMS80O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmb250LXNpemU6IDAuNXJlbTtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzYXlZZXMoKSB7XG4gICAgcmV0dXJuICdZZXMnO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHN1bShhLCBiKSB7XG4gICAgcmV0dXJuIGErYjtcbn0iLCJpbXBvcnQgJy4vc3R5bGUuY3NzJztcbmltcG9ydCBzdW0gZnJvbSAnLi9mdW5jdGlvbnMuanMnO1xuaW1wb3J0IHNheVllcyBmcm9tICcuL2Fub3RoZXJGdW5jdGlvbnMuanMnO1xuaW1wb3J0IGNoZWZzIGZyb20gJy4vY2hlZnMuanBnJztcbmltcG9ydCBrb3JlYW5Gb29kMSBmcm9tICcuL2tvcmVhbi1mb29kLTEuanBnJztcbmltcG9ydCBiaWJpbWJhcCBmcm9tICcuL2JpYmltYmFwLmpwZyc7XG5pbXBvcnQgZ2FsYmkgZnJvbSAnLi9nYWxiaS5qcGcnO1xuaW1wb3J0IHRhbmcgZnJvbSAnLi90YW5nLmpwZyc7XG5pbXBvcnQga2ltY2hpIGZyb20gJy4va2ltY2guanBnJztcbmltcG9ydCBiZzMgZnJvbSAnLi9iZzMuanBnJztcblxuLy8gaW1wb3J0IEljb24gZnJvbSAnLi9pY29uLnBuZyc7XG5mdW5jdGlvbiBjb21wb25lbnQoKSB7XG4gICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBcbiAgICAvLyBMb2Rhc2gsIGN1cnJlbnRseSBpbmNsdWRlZCB2aWEgYSBzY3JpcHQsIGlzIHJlcXVpcmVkIGZvciB0aGlzIGxpbmUgdG8gd29ya1xuICAgIGVsZW1lbnQudGV4dENvbnRlbnQgPSBcIkhlbGxvLCBteSBuYW1lIGlzIFNvbFwiO1xuICAgIGVsZW1lbnQuY2xhc3NOYW1lID0gJ2hlbGxvJztcblxuICAgICAgLy8gQWRkIHRoZSBpbWFnZSB0byBvdXIgZXhpc3RpbmcgZGl2LlxuICAgIC8vIGNvbnN0IG15SWNvbiA9IG5ldyBJbWFnZSgpO1xuICAgIC8vIG15SWNvbi5zcmMgPSBJY29uO1xuXG4gICAgLy8gZWxlbWVudC5hcHBlbmRDaGlsZChteUljb24pO1xuICAgIHJldHVybiBlbGVtZW50O1xuICB9XG5cbiAgZnVuY3Rpb24gc2V0TXVsdGlwbGVBdHRyaWJ1dGUoZG9tLCBvYmopIHtcbiAgICBmb3IgKGxldCBrZXkgaW4gb2JqKSB7XG4gICAgICBkb20uc2V0QXR0cmlidXRlKGtleSwgb2JqW2tleV0pO1xuICAgIH1cbiAgfVxuXG5mdW5jdGlvbiBtYWtlTWVudUxpc3QoKSB7XG4gIGNvbnN0IG1lbnVVbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XG4gIGNvbnN0IGVudHJ5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgY29uc3QgbWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gIGNvbnN0IGRlc3NlcnRzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgY29uc3QgZW50cnlBMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgY29uc3QgbWFpbkEyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICBjb25zdCBkZXNzZXJ0c0EzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuXG4gIGVudHJ5QTEudGV4dENvbnRlbnQgPSBcIkVudHJ5XCI7XG4gIG1haW5BMi50ZXh0Q29udGVudCA9IFwiTWFpblwiO1xuICBkZXNzZXJ0c0EzLnRleHRDb250ZW50ID0gXCJEZXNzZXJ0c1wiO1xuICBzZXRNdWx0aXBsZUF0dHJpYnV0ZShlbnRyeUExLCB7J2hyZWYnOiAnIycsICdpZCc6ICdlbnRyeS1idG4nfSk7XG4gIHNldE11bHRpcGxlQXR0cmlidXRlKG1haW5BMiwgeydocmVmJzogJyMnLCAnaWQnOiAnbWFpbi1idG4nfSk7XG4gIHNldE11bHRpcGxlQXR0cmlidXRlKGRlc3NlcnRzQTMsIHsnaHJlZic6ICcjJywgJ2lkJzogJ2Rlc3NlcnRzLWJ0bid9KTtcblxuICBlbnRyeS5hcHBlbmRDaGlsZChlbnRyeUExKTtcbiAgbWFpbi5hcHBlbmRDaGlsZChtYWluQTIpO1xuICBkZXNzZXJ0cy5hcHBlbmRDaGlsZChkZXNzZXJ0c0EzKTtcblxuICBtZW51VWwuYXBwZW5kKGVudHJ5LCBtYWluLCBkZXNzZXJ0cyk7XG4gIG1lbnVVbC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ21lbnUtdWwnKTtcbiAgbWVudVVsLmNsYXNzTmFtZSA9ICdtZW51LXVsJztcblxuICByZXR1cm4gbWVudVVsO1xufVxuXG5mdW5jdGlvbiBtYWtlU2lkZWJhcigpIHtcbiAgY29uc3Qgc2lkZUJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjb25zdCB1bCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XG4gIGNvbnN0IGxpMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gIGNvbnN0IGxpMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gIGNvbnN0IGxpMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gIGNvbnN0IGExID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICBjb25zdCBhMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgY29uc3QgYTMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gIHNldE11bHRpcGxlQXR0cmlidXRlKGExLCB7J2hyZWYnOiAnIycsICdpZCc6ICdob21lLWJ0bid9KTtcbiAgc2V0TXVsdGlwbGVBdHRyaWJ1dGUoYTIsIHsnaHJlZic6ICcjJywgJ2lkJzogJ21lbnUtYnRuJ30pO1xuICBzZXRNdWx0aXBsZUF0dHJpYnV0ZShhMywgeydocmVmJzogJyMnLCAnaWQnOiAnY29udGFjdC1idG4nfSk7XG5cbiAgLy9zaWRlYmFyXG4gIHNpZGVCYXIuY2xhc3NOYW1lPSdzaWRlLWJhcic7XG4gIGExLnRleHRDb250ZW50ID0gXCJIb21lXCI7XG4gIGEyLnRleHRDb250ZW50ID0gXCJNZW51XCI7XG4gIGEzLnRleHRDb250ZW50ID0gXCJDb250YWN0XCI7XG5cbiAgbGkxLmFwcGVuZENoaWxkKGExKTtcbiAgbGkyLmFwcGVuZENoaWxkKGEyKTtcbiAgbGkzLmFwcGVuZENoaWxkKGEzKTtcblxuICB1bC5hcHBlbmQobGkxLCBsaTIsIGxpMyk7XG4gIHNpZGVCYXIuYXBwZW5kQ2hpbGQodWwpO1xuXG4gIGxpMi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT4ge1xuICAgIGNvbnN0IG1uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21lbnUtdWwnKTtcbiAgICBpZiAobW4gPT09IG51bGwpIHtcbiAgICAgIGxpMi5hcHBlbmRDaGlsZChtYWtlTWVudUxpc3QoKSk7XG4gICAgfVxuICAgIGVsc2UgaWYgKGUudGFyZ2V0LmlkID09PSAnbWVudS1idG4nKSB7XG4gICAgICBsaTIucmVtb3ZlQ2hpbGQobW4pO1xuICAgIH1cbiAgfSlcblxuICByZXR1cm4gc2lkZUJhcjtcbn1cblxuZnVuY3Rpb24gbWFrZUZvb3RlcigpIHtcbiAgY29uc3QgZm9vdGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNvbnN0IHAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgcC50ZXh0Q29udGVudCA9IFwiZ2l0aHViQG1vb25zb2wxMjQgaW1hZ2Ugc291cmNlOiBodHRwczovL3d3dy5wZXhlbHMuY29tL1wiO1xuICBmb290ZXIuY2xhc3NOYW1lID0gJ2Zvb3Rlcic7XG4gIGZvb3Rlci5hcHBlbmRDaGlsZChwKTtcbiAgcmV0dXJuIGZvb3Rlcjtcbn1cblxuZnVuY3Rpb24gbWFrZUhvbWUoKSB7XG4gIC8vaW1hZ2VzXG4gIGNvbnN0IGNoZWZzSW1nID0gbmV3IEltYWdlKCk7XG4gIGNoZWZzSW1nLnNyYyA9IGNoZWZzO1xuXG4gIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29uc3QgbWFzayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjb25zdCB0ZXh0Qm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNvbnN0IGRlc2NyaXB0aW9uSDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICBjb25zdCBkZXNjcmlwdGlvbkgzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgY29uc3QgZGVzY3JpcHRpb25INSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2g1Jyk7XG4gIGNvbnN0IHRpdGxlSDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuXG4gIC8vIGNvbnRlbnQxXG4gIGNvbnRlbnQuc2V0QXR0cmlidXRlKCdzdHlsZScsIGBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJHtjaGVmc0ltZy5zcmN9KTtgKTtcbiAgY29udGVudC5jbGFzc05hbWUgPSAnY29udGVudCB0by1kZWxldGUnO1xuICBcbiAgLy8gbWFza1xuICBtYXNrLmNsYXNzTGlzdCA9ICdtYXNrJztcblxuICAvL3RleHRib3hcbiAgdGV4dEJveC5jbGFzc05hbWUgPSAndGV4dC1ib3gnO1xuICBkZXNjcmlwdGlvbkgyLnRleHRDb250ZW50ID0gXCJPbGUsIG9oIG15IGdvZCFcIjtcbiAgZGVzY3JpcHRpb25IMy50ZXh0Q29udGVudCA9IFwiS29yZWFuIGN1aXNpbmUgaXMgbGFyZ2VseSBiYXNlZCBvbiB2ZWdldGFibGVzXCI7XG4gIGRlc2NyaXB0aW9uSDUudGV4dENvbnRlbnQgPSBcIkluZ3JlZGllbnRzIGFuZCBkaXNoZXMgdmFyeSBieSBwcm92aW5jZVwiO1xuICB0aXRsZUgxLnRleHRDb250ZW50ID0gXCJXZWxjb21lIHRvIG15IHJlc3RhdXJhbnQuXCI7XG4gIHRleHRCb3guYXBwZW5kKGRlc2NyaXB0aW9uSDIsIGRlc2NyaXB0aW9uSDMsIGRlc2NyaXB0aW9uSDUsIHRpdGxlSDEpO1xuICBjb250ZW50LmFwcGVuZChtYXNrLCB0ZXh0Qm94KTtcblxuICByZXR1cm4gY29udGVudDtcbn1cblxuZnVuY3Rpb24gbWFrZUNhcmQoaW1hZ2VTcmMsIG5hbWUsIGRlc2NyaXB0aW9uLCBwcmljZSkge1xuICBjb25zdCBjYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNvbnN0IGltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjb25zdCBidG5Hcm91cCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjb25zdCBidG5TdWIxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNvbnN0IGJ0blN1YjIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAvL2NhcmQgaW1nXG4gIGltZy5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgYGJhY2tncm91bmQtaW1hZ2U6IHVybCgke2ltYWdlU3JjfSlgKTtcbiAgaW1nLmNsYXNzTmFtZSA9ICdjYXJkLWltZyc7XG4gIC8vaW1nIGRlc2NyaXB0aW9uXG4gIGNvbnN0IGRzYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgZHNjLnRleHRDb250ZW50ID0gZGVzY3JpcHRpb247XG4gIC8vYnRuIGdyb3VwXG4gIGNvbnN0IG5tID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gIG5tLnRleHRDb250ZW50ID0gbmFtZTtcbiAgYnRuU3ViMS5hcHBlbmRDaGlsZChubSk7XG5cbiAgY29uc3QgcHJjID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gIHByYy50ZXh0Q29udGVudCA9ICckJytwcmljZTtcbiAgY29uc3QgaW5ncmVkaWVudHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgaW5ncmVkaWVudHMudGV4dENvbnRlbnQgPSBcIlNlZSBpbmdyZWRpZW50c1wiO1xuICBidG5TdWIyLmFwcGVuZChwcmMsIGluZ3JlZGllbnRzKTtcbiAgYnRuR3JvdXAuYXBwZW5kKGJ0blN1YjEsIGJ0blN1YjIpO1xuICBidG5Hcm91cC5jbGFzc05hbWUgPSBcImJ0bi1ncm91cFwiO1xuICBjYXJkLmFwcGVuZChpbWcsIGRzYywgYnRuR3JvdXApO1xuXG4gIGNhcmQuY2xhc3NOYW1lID0gJ2NhcmQtYm9keSc7XG4gIHJldHVybiBjYXJkO1xufVxuXG5mdW5jdGlvbiBtYWtlTWVudSgpIHtcbiAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjb25zdCBjYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FyZCcpO1xuICBjb25zdCBkaXYxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNvbnN0IGRpdjIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAvL2JhY2tncm91ZC1pbWdcbiAgY29uc3QgYmdJbWcgPSBuZXcgSW1hZ2UoKTtcbiAgYmdJbWcuc3JjID0ga29yZWFuRm9vZDE7XG4gIGNvbnRlbnQuc2V0QXR0cmlidXRlKCdzdHlsZScsIGBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJHtiZ0ltZy5zcmN9KWApO1xuICBjb250ZW50LmNsYXNzTmFtZSA9ICdjb250ZW50IG1lbnUgdG8tZGVsZXRlJztcbiAgXG4gIC8vY2FyZFxuICBjYXJkLmNsYXNzTmFtZSA9ICdjYXJkJztcbiAgY29uc3QgZ2FsYmlJbWcgPSBuZXcgSW1hZ2UoKTtcbiAgZ2FsYmlJbWcuc3JjID0gZ2FsYmk7XG4gIGNvbnN0IHRhbmdJbWcgPSBuZXcgSW1hZ2UoKTtcbiAgdGFuZ0ltZy5zcmMgPSB0YW5nO1xuICBjb25zdCBraW1jaGlJbWcgPSBuZXcgSW1hZ2UoKTtcbiAga2ltY2hpSW1nLnNyYyA9IGtpbWNoaTtcblxuICBjb25zdCBjYXJkMSA9IG1ha2VDYXJkKGdhbGJpSW1nLnNyYywgJ0dhbGJpJywgXCJLb3JlYW4gY3Vpc2luZSBoYXMgZXZvbHZlZCB0aHJvdWdoIGNlbnR1cmllcyBvZiBzb2NpYWwgYW5kIHBvbGl0aWNhbCBjaGFuZ2UuXCIsICcxMCcpO1xuICBjb25zdCBjYXJkMiA9IG1ha2VDYXJkKHRhbmdJbWcuc3JjLCAnWXVrZ2VqYW5nJywgXCJJbiB0aGUgSmV1bG11biBwb3R0ZXJ5IHBlcmlvZCwgaHVudGVyLWdhdGhlcmVyIHNvY2lldGllcyBlbmdhZ2VkIGluIGZpc2hpbmcgYW5kIGh1bnRpbmcuXCIsICcxMCcpO1xuICBjb25zdCBjYXJkMyA9IG1ha2VDYXJkKGtpbWNoaUltZy5zcmMsICdLaW1jaGknLCAnVGhlIFRocmVlIEtpbmdkb21zIHBlcmlvZCAoNTcgQkNFIOKAkyA2NjggQ0UpIHdhcyBvbmUgb2YgcmFwaWQgY3VsdHVyYWwgZXZvbHV0aW9uLicsICc1Jyk7XG4gIGNvbnN0IGNhcmQ0ID0gbWFrZUNhcmQoJyMnLCAnbmFtZScsICdkZXNjcmlwdGlvbicsICdwcmljZScpO1xuICBjb25zdCBjYXJkNSA9IG1ha2VDYXJkKCcjJywgJ25hbWUnLCAnZGVzY3JpcHRpb24nLCAncHJpY2UnKTtcbiAgY29uc3QgY2FyZDYgPSBtYWtlQ2FyZCgnIycsICduYW1lJywgJ2Rlc2NyaXB0aW9uJywgJ3ByaWNlJyk7XG5cbiAgY2FyZC5hcHBlbmQoY2FyZDEsIGNhcmQyLCBjYXJkMywgY2FyZDQsIGNhcmQ1LCBjYXJkNik7XG5cbiAgY29udGVudC5hcHBlbmRDaGlsZChjYXJkKTtcbiAgcmV0dXJuIGNvbnRlbnQ7XG59XG5cbmZ1bmN0aW9uIGZvcm1EaXYodHlwZSwgbmFtZSwgaWQsIGxhYmVsVGV4dCkge1xuICB0aGlzLnR5cGUgPSB0eXBlO1xuICB0aGlzLm5hbWUgPSBuYW1lO1xuICB0aGlzLmlkID0gaWQ7XG4gIHRoaXMubGFiZWxUZXh0ID0gbGFiZWxUZXh0O1xuICB0aGlzLmNyZWF0ZURpdiA9IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdGhpcy5kaXYuY2xhc3NOYW1lID0gXCJmb3JtLWRpdlwiO1xuICAgIGlmICh0aGlzLnR5cGUgPT09IFwidGV4dGFyZWFcIikge1xuICAgICAgdGhpcy5sYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgICB0aGlzLnRleHRhcmVhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGV4dGFyZWEnKTtcbiAgICAgIHRoaXMubGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCAndGV4dGFyZWEnKTtcbiAgICAgIHRoaXMudGV4dGFyZWEuc2V0QXR0cmlidXRlKCdpZCcsICd0ZXh0YXJlYScpO1xuICAgICAgdGhpcy50ZXh0YXJlYS5zZXRBdHRyaWJ1dGUoJ3Jvd3MnLCA4KTtcbiAgICAgIHRoaXMubGFiZWwudGV4dENvbnRlbnQgPSBsYWJlbFRleHQrXCI6IFwiO1xuICAgICAgdGhpcy5kaXYuYXBwZW5kKHRoaXMubGFiZWwsIHRoaXMudGV4dGFyZWEpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMubGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgICAgdGhpcy5pbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICB0aGlzLmxhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgdGhpcy5pZCk7XG4gICAgICB0aGlzLmxhYmVsLnRleHRDb250ZW50ID0gbGFiZWxUZXh0K1wiOiBcIjtcbiAgICAgIHNldE11bHRpcGxlQXR0cmlidXRlKHRoaXMuaW5wdXQsIHsndHlwZSc6IHRoaXMudHlwZSwgJ25hbWUnOiB0aGlzLm5hbWUsICdpZCc6IHRoaXMuaWR9KTtcbiAgICAgIHRoaXMuZGl2LmFwcGVuZCh0aGlzLmxhYmVsLCB0aGlzLmlucHV0KTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuZGl2O1xuICB9XG59XG5cbmZ1bmN0aW9uIG1ha2VDb250YWN0KCkge1xuICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XG4gIGNvbnN0IGZvcm1Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29uc3QgbWFzayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBtYXNrLmNsYXNzTmFtZSA9ICdtYXNrLWxlZnQnO1xuICBjb25zdCBjb250ZW50QmcgPSBuZXcgSW1hZ2UoKTtcbiAgY29udGVudEJnLnNyYyA9IGJnMztcbiAgY29udGVudC5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgYGJhY2tncm91bmQtaW1hZ2U6IHVybCgke2NvbnRlbnRCZy5zcmN9KWApO1xuICBjb250ZW50LmNsYXNzTmFtZSA9IFwiY29udGVudCBjb250YWN0IHRvLWRlbGV0ZVwiO1xuXG4gIGNvbnN0IGZpcnN0TmFtZSA9IG5ldyBmb3JtRGl2KCd0ZXh0JywgJ2ZOYW1lJywgJ2ZOYW1lJywgJ0ZpcnN0IE5hbWUnKTtcbiAgY29uc3QgbGFzdE5hbWUgPSBuZXcgZm9ybURpdigndGV4dCcsICdsTmFtZScsICdsTmFtZScsICdMYXN0IE5hbWUnKTtcbiAgY29uc3QgZW1haWwgPSBuZXcgZm9ybURpdignZW1haWwnLCAnZW1haWwnLCAnZW1haWwnLCAnRW1haWwnKTtcbiAgY29uc3QgdGVsID0gbmV3IGZvcm1EaXYoJ3RlbCcsICd0ZWwnLCAndGVsJywgJ1Bob25lIE51bWJlcicpO1xuICBjb25zdCB0ZXh0QXJlYSA9IG5ldyBmb3JtRGl2KCd0ZXh0YXJlYScsICd0ZXh0YXJlYScsICd0ZXh0YXJlYScsICdDb21tZW50Jyk7XG4gIGNvbnN0IGJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICBidG4udGV4dENvbnRlbnQgPSBcIlNlbmRcIjtcbiAgYnRuLnNldEF0dHJpYnV0ZSgndHlwZScsICdidXR0b24nKTtcbiAgY29uc3QgYnRuRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGJ0bkRpdi5jbGFzc05hbWUgPSAnYnRuLWRpdic7XG4gIGJ0bkRpdi5hcHBlbmRDaGlsZChidG4pO1xuXG4gIGZvcm1Db250YWluZXIuYXBwZW5kKGZpcnN0TmFtZS5jcmVhdGVEaXYoKSwgbGFzdE5hbWUuY3JlYXRlRGl2KCksIGVtYWlsLmNyZWF0ZURpdigpLCB0ZWwuY3JlYXRlRGl2KCksIHRleHRBcmVhLmNyZWF0ZURpdigpLCBidG5EaXYpO1xuICBmb3JtLmFwcGVuZENoaWxkKGZvcm1Db250YWluZXIpO1xuICBjb250ZW50LmFwcGVuZChtYXNrLCBmb3JtKTtcbiAgXG4gIHJldHVybiBjb250ZW50O1xufVxuXG5mdW5jdGlvbiBzd2l0Y2hNZW51KGNvbnRlbnQpIHtcbiAgY29uc3QgcGFyZW50c05vZGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGVtcGxhdGUnKTtcbiAgY29uc3QgY2hpbGQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG8tZGVsZXRlJyk7XG4gIHBhcmVudHNOb2RlLnJlbW92ZUNoaWxkKGNoaWxkKTtcbiAgdGVtcGxhdGUuYXBwZW5kQ2hpbGQoY29udGVudCk7IFxufVxuXG5jb25zdCB0ZW1wbGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xudGVtcGxhdGUuY2xhc3NMaXN0ID0gJ3RlbXBsYXRlJztcbnRlbXBsYXRlLmFwcGVuZChtYWtlU2lkZWJhcigpLCBtYWtlRm9vdGVyKCksIG1ha2VIb21lKCkpO1xuZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0ZW1wbGF0ZSk7XG5cbnRlbXBsYXRlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PiB7XG4gIGlmIChlLnRhcmdldC5pZCA9PT0gJ2hvbWUtYnRuJykge1xuICAgIHN3aXRjaE1lbnUobWFrZUhvbWUoKSlcbiAgfVxuICBlbHNlIGlmIChlLnRhcmdldC5pZCA9PT0gJ21lbnUtYnRuJykge1xuICAgIHN3aXRjaE1lbnUobWFrZU1lbnUoKSlcbiAgfVxuICBlbHNlIGlmIChlLnRhcmdldC5pZCA9PT0gJ2NvbnRhY3QtYnRuJykge1xuICAgIHN3aXRjaE1lbnUobWFrZUNvbnRhY3QoKSlcbiAgfVxufSlcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==
