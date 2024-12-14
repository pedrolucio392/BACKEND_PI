const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const books = [
  {
    title:
      "Tratado da Verdadeira Devoção à Santíssima Virgem (São Luís Montfort) - capa dura",
    author: "São Luís Montfort",
    price: 46.2,
    stock: 10,
    coverImage:
      "https://cdn.awsli.com.br/400x400/478/478284/produto/157553032/21-tratado---mockup-6mdr3o7utv.png",
    buyLink: "../../carrinho.html",
    miniatura1:
      "https://cdn.awsli.com.br/478/478284/produto/157553032/21-tratado---mockup-6mdr3o7utv.png",
    miniatura2:
      "https://cdn.awsli.com.br/478/478284/produto/157553032/21-tratado---contra-zz9ff1x51h.png",
    isBestSeller: true,
    isOnSale: false,
  },
  {
    title: "Vida de São Mauro (Fausto de Monte Cassino)",
    author: "Fausto de Monte Cassino",
    price: 23.56,
    stock: 15,
    coverImage:
      "https://cdn.awsli.com.br/400x400/478/478284/produto/228201698/31-vida-sa-o-mauro---mockup-kzx6gr5lai.png",
    buyLink: "../../carrinho.html",
    miniatura1:
      "https://cdn.awsli.com.br/478/478284/produto/228201698/31-vida-sa-o-mauro---mockup-kzx6gr5lai.png",
    miniatura2:
      "https://cdn.awsli.com.br/478/478284/produto/228201698/31-vida-sa-o-mauro---contra-yswynjntp2.png",
    isBestSeller: true,
    isOnSale: false,
  },
  {
    title: "Autoaperfeiçoamento - Rudolf Allers (CAPA DURA)",
    author: "Rudolf Allers",
    price: 84.9,
    stock: 5,
    coverImage:
      "https://cdn.awsli.com.br/300x300/618/618258/produto/226278119/photo_2023-07-24_00-18-51-y9xwrs0kae.jpg",
    buyLink: "../../carrinho.html",
    miniatura1:
      "https://cdn.awsli.com.br/618/618258/produto/226278119/photo_2023-07-24_00-18-49-9fpe60jls8.jpg",
    miniatura2:
      "https://cdn.awsli.com.br/618/618258/produto/226278119/photo_2023-07-24_00-18-51-y9xwrs0kae.jpg",
    isBestSeller: true,
    isOnSale: false,
  },
  {
    title: "Educação Sexual e Relações Humanas - Rudolf Allers (Capa Dura)",
    author: "Rudolf Allers",
    price: 89.9,
    stock: 8,
    coverImage:
      "https://cdn.awsli.com.br/300x300/618/618258/produto/245429878/frente-guy6xdc36y.jpg",
    buyLink: "../../carrinho.html",
    miniatura1:
      "https://cdn.awsli.com.br/478/478284/produto/157553032/21-tratado---mockup-6mdr3o7utv.png",
    miniatura2:
      "https://cdn.awsli.com.br/478/478284/produto/157553032/21-tratado---contra-zz9ff1x51h.png",
    isBestSeller: true,
    isOnSale: true,
  },
  {
    title: "Combo Poemas - Sergio de Carvalho Pachá",
    author: "Sergio de Carvalho Pachá",
    price: 97.8,
    stock: 20,
    coverImage:
      "https://cdn.awsli.com.br/300x300/618/618258/produto/231037583/sem-t-tulo-1-63t9qo4vum.jpg",
    buyLink: "../../carrinho.html",
    miniatura1:
      "https://cdn.awsli.com.br/618/618258/produto/231037583/sem-t-tulo-1-63t9qo4vum.jpg",
    miniatura2:
      "https://cdn.awsli.com.br/618/618258/produto/231037583/mockup---hist-ria-eclesi-stica-xg79na88io.jpg",
    isBestSeller: true,
    isOnSale: false,
  },
  {
    title: "Imitação de Cristo - Tomás de Kempis (CAPA DURA)",
    author: "Tomás de Kempis",
    price: 49.9,
    stock: 12,
    coverImage:
      "https://cdn.awsli.com.br/300x300/618/618258/produto/106653494/bd9233f774.jpg",
    buyLink: "../../carrinho.html",
    miniatura1:
      "https://cdn.awsli.com.br/478/478284/produto/157553032/21-tratado---mockup-6mdr3o7utv.png",
    miniatura2:
      "https://cdn.awsli.com.br/478/478284/produto/157553032/21-tratado---contra-zz9ff1x51h.png",
    isBestSeller: true,
    isOnSale: true,
  },
  {
    title: "Catecismo de São Pio X (Ilustrado e Comentado)",
    author: "São Pio X",
    price: 34.99,
    stock: 18,
    coverImage:
      "https://cdn.awsli.com.br/300x300/618/618258/produto/224474630/mockup---01--3--63m84d86r2.jpg",
    buyLink: "../../carrinho.html",
    miniatura1:
      "https://cdn.awsli.com.br/478/478284/produto/157553032/21-tratado---mockup-6mdr3o7utv.png",
    miniatura2:
      "https://cdn.awsli.com.br/478/478284/produto/157553032/21-tratado---contra-zz9ff1x51h.png",
    isBestSeller: true,
    isOnSale: true,
  },
  {
    title:
      "O Criador e a Criatura - as Maravilhas do Amor Divino (Pe. William Faber)",
    author: "Pe. William Faber",
    price: 124.6,
    stock: 20,
    coverImage:
      "https://cdn.awsli.com.br/400x400/478/478284/produto/242091415/o-criador-e-a-criatura_capa-3d-para-loja-l4hk68e3nn.png",
    buyLink: "../../carrinho.html",
    miniatura1:
      "https://cdn.awsli.com.br/478/478284/produto/157553032/21-tratado---mockup-6mdr3o7utv.png",
    miniatura2:
      "https://cdn.awsli.com.br/478/478284/produto/157553032/21-tratado---contra-zz9ff1x51h.png",
    isBestSeller: true,
    isOnSale: true,
  },
  {
    title: "Combo Psicologia Tomista (8 livros)",
    author: "Diversos Autores",
    price: 460.98,
    stock: 10,
    coverImage: "../assets/images/livro1.jpg",
    buyLink: "../../carrinho.html",
    miniatura1:
      "https://cdn.awsli.com.br/618/618258/produto/246616635/psicologia_tomista_combo-d76ag6hyl4.jpg",
    miniatura2:
      "https://cdn.awsli.com.br/618/618258/produto/246616635/frente--2--fyjqb92tyl-i2hk597l7s.jpg",
    isBestSeller: false,
    isOnSale: true,
  },
  {
    title: "Santo Tomás de Aquino - João Ameal (CAPA DURA)",
    author: "João Ameal",
    price: 84.9,
    stock: 15,
    coverImage:
      "https://cdn.awsli.com.br/300x300/618/618258/produto/237907702/mockup-pbe8wtwdcf.png",
    buyLink: "../../carrinho.html",
    miniatura1:
      "https://cdn.awsli.com.br/478/478284/produto/157553032/21-tratado---mockup-6mdr3o7utv.png",
    miniatura2:
      "https://cdn.awsli.com.br/478/478284/produto/157553032/21-tratado---contra-zz9ff1x51h.png",
    isBestSeller: false,
    isOnSale: true,
  },
  {
    title:
      "História de Portugal: Das Origens até 1940 - João Ameal (CAPA DURA)",
    author: "João Ameal",
    price: 112.0,
    stock: 12,
    coverImage:
      "https://cdn.awsli.com.br/300x300/618/618258/produto/169051827/8164e56bf4.jpg",
    buyLink: "../../carrinho.html",
    miniatura1:
      "https://cdn.awsli.com.br/478/478284/produto/157553032/21-tratado---mockup-6mdr3o7utv.png",
    miniatura2:
      "https://cdn.awsli.com.br/478/478284/produto/157553032/21-tratado---contra-zz9ff1x51h.png",
    isBestSeller: false,
    isOnSale: true,
  },
  {
    title: "História da Companhia de Jesus (2 volumes em 1) - (CAPA DURA)",
    author: "Autor Desconhecido",
    price: 74.9,
    stock: 25,
    coverImage:
      "https://cdn.awsli.com.br/300x300/618/618258/produto/50167778/photo_2023-07-17_16-12-29-conuhgzcq7.jpg",
    buyLink: "../../carrinho.html",
    miniatura1:
      "https://cdn.awsli.com.br/478/478284/produto/157553032/21-tratado---mockup-6mdr3o7utv.png",
    miniatura2:
      "https://cdn.awsli.com.br/478/478284/produto/157553032/21-tratado---contra-zz9ff1x51h.png",
    isBestSeller: false,
    isOnSale: false,
  },
  {
    title: "Vida de São José de Cupertino (Frei Roberto Brunelli)",
    author: "Frei Roberto Brunelli",
    price: 102.8,
    stock: 5,
    coverImage:
      "https://cdn.awsli.com.br/400x400/478/478284/produto/158934718/24-sa-o-jose--cupertino---mockup-cthzfsv3xd.png",
    buyLink: "../../carrinho.html",
    miniatura1:
      "https://cdn.awsli.com.br/400x400/478/478284/produto/158934718/24-sa-o-jose--cupertino---mockup-cthzfsv3xd.png",
    miniatura2:
      "https://cdn.awsli.com.br/400x400/478/478284/produto/158934718/24-sa-o-jose--cupertino---mockup-cthzfsv3xd.png",
    isBestSeller: false,
    isOnSale: true,
  },
];

async function main() {
  for (const book of books) {
    await prisma.book.create({
      data: book,
    });
  }
  console.log("Livros inseridos com sucesso!");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
