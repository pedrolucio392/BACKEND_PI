"use strict"; function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express'); var _express2 = _interopRequireDefault(_express);
var _cors = require('cors'); var _cors2 = _interopRequireDefault(_cors);
var _dotenv = require('dotenv'); var _dotenv2 = _interopRequireDefault(_dotenv);
var _routes = require('./routes'); var _routes2 = _interopRequireDefault(_routes);

_dotenv2.default.config();

const app = _express2.default.call(void 0, );

app.use(_cors2.default.call(void 0, ));
app.use(_express2.default.json());

const PORT = process.env.PORT || 3001;

_routes2.default.call(void 0, app);

try {
  app.listen(PORT, () => {
    console.log(`🚀 Servidor iniciado em http://localhost:${PORT}`);
  });
} catch (error) {
  console.error("Erro ao iniciar o servidor:", error);
}
