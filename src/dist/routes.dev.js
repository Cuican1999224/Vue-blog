"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ShowBlog = _interopRequireDefault(require("./components/ShowBlog.vue"));

var _AddBlog = _interopRequireDefault(require("./components/AddBlog.vue"));

var _SingleBlog = _interopRequireDefault(require("./components/SingleBlog.vue"));

var _EditBlog = _interopRequireDefault(require("./components/EditBlog.vue"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = [{
  path: '/',
  component: _ShowBlog["default"]
}, {
  path: '/add',
  component: _AddBlog["default"]
}, {
  path: '/blog/:id',
  component: _SingleBlog["default"]
}, {
  path: '/edit/:id',
  component: _EditBlog["default"]
}];
exports["default"] = _default;