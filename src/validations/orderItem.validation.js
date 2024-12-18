import * as Yup from "yup";

export const orderItemValidation = Yup.object().shape({
  orderId: Yup.number()
    .required("O ID do pedido é obrigatório.")
    .integer("O ID do pedido deve ser um número inteiro."),
  bookId: Yup.number()
    .required("O ID do livro é obrigatório.")
    .integer("O ID do livro deve ser um número inteiro."),
  quantity: Yup.number()
    .required("A quantidade é obrigatória.")
    .integer("A quantidade deve ser um número inteiro.")
    .min(1, "A quantidade mínima é 1."),
});