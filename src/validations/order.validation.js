import * as Yup from "yup";

// Validação de cada item no carrinho
const cartItemSchema = Yup.object().shape({
  bookId: Yup
    .number()
    .integer()
    .positive()
    .required("O ID do livro é obrigatório."),
  quantity: Yup
    .number()
    .integer()
    .positive()
    .required("A quantidade é obrigatória.")
    .typeError("A quantidade deve ser um número positivo."),
});

export const orderValidation = Yup.object().shape({
  userId: Yup.number()
    .integer()
    .positive()
    .required("O ID do usuário é obrigatório."),
  items: Yup.array()
    .of(cartItemSchema)
    .min(1, "O carrinho deve ter pelo menos um item.")
    .required("Os itens do pedido são obrigatórios."),
});
