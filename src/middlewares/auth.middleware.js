import jwt from "jsonwebtoken";

// Middleware para verificar o token JWT
export const verifyToken = (req, res, next) => {
  // Extrai o token do cabeçalho Authorization
  const token =
    req.headers["authorization"] && req.headers["authorization"].split(" ")[1]; // "Bearer <token>"

  if (!token) {
    return res.status(403).json({ message: "Token ausente" });
  }

  // Verifica a validade do token
  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) {
      return res
        .status(403)
        .json({ message: "Token inválido", error: err.message });
    }
    
    next(); // Passa para o próximo middleware ou controller
  });
};
