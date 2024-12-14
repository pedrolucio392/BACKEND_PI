const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function resetDatabase() {
  try {
    // Apaga os registros de todas as tabelas (atenção à ordem para evitar violação de FK)
    await prisma.book.deleteMany();

    console.log("Banco de dados limpo com sucesso!");
  } catch (error) {
    console.error("Erro ao limpar o banco de dados:", error);
  } finally {
    await prisma.$disconnect();
  }
}

resetDatabase();
