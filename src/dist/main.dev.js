"use strict";

var _vue = _interopRequireDefault(require("vue"));

var _vueResource = _interopRequireDefault(require("vue-resource"));

var _vueRouter = _interopRequireDefault(require("vue-router"));

var _App = _interopRequireDefault(require("./App"));

var _routes = _interopRequireDefault(require("./routes"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
_vue["default"].config.productionTip = false;

_vue["default"].use(_vueResource["default"]);

_vue["default"].use(_vueRouter["default"]); //自定义指令


_vue["default"].directive('rainbow', {
  bind: function bind(el, binding, vnode) {
    el.style.color = "#" + Math.random().toString(16).slice(2, 8);
  }
});

_vue["default"].directive('thenme', {
  bind: function bind(el, binding, vnode) {
    if (binding.value == 'wide') {
      el.style.maxWidth = "1260px";
    } else if (binding.value == 'narrow') {
      el.style.maxWidth = "560px";
    }
  }
}); //自定义过滤器


_vue["default"].filter("to-uppercase", function (value) {
  return value.toUpperCase();
});

_vue["default"].filter("snippet", function (value) {
  return value.slice(0, 100) + "...";
}); //创建路由


var router = new _vueRouter["default"]({
  routes: _routes["default"],
  mode: "history"
});
/* eslint-disable no-new */

new _vue["default"]({
  el: '#app',
  components: {
    App: _App["default"]
  },
  template: '<App/>',
  router: router
});