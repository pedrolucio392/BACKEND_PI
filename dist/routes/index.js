"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _userroutes = require('./user.routes'); var _userroutes2 = _interopRequireDefault(_userroutes);
var _bookroutes = require('./book.routes'); var _bookroutes2 = _interopRequireDefault(_bookroutes);

const routes = (app) => {
  _userroutes2.default.call(void 0, app);
  _bookroutes2.default.call(void 0, app);
};

exports. default = routes;
