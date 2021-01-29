"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ShowBlogs = _interopRequireDefault(require("./components/ShowBlogs.vue"));

var _AddBlog = _interopRequireDefault(require("./components/AddBlog.vue"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// import { component } from 'vue/types/umd'
var _default = [{
  path: '/',
  component: _ShowBlogs["default"]
}, {
  path: '/add',
  component: _AddBlog["default"]
}];
exports["default"] = _default;