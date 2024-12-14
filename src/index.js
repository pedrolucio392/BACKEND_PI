import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import routes from "./routes";
const jwt = require("jsonwebtoken")

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 3001;

routes(app);

try {
  app.listen(PORT, () => {
    console.log(`🚀 Servidor iniciado em http://localhost:${PORT}`);
  });
} catch (error) {
  console.error("Erro ao iniciar o servidor:", error);
}
