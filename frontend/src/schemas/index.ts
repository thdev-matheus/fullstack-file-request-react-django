import * as yup from "yup";

export const registerSchema = yup.object().shape({
  username: yup
    .string()
    .required("Campo obrigatório!")
    .min(4, "No mínimo 4 caracteres."),

  email: yup
    .string()
    .email("Digite um e-mail válido.")
    .required("Campo obrigatório!"),

  password: yup
    .string()
    .required("Campo obrigatório!")
    .matches(/[A-Z]/, "Ao menos 1 letra maiúscula.")
    .matches(/([a-z])/, "Ao menos 1 letra minúscula.")
    .matches(/(\d)/, "Ao menos 1 número.")
    .matches(/(\W)/, "Ao menos 1 caracter especial.")
    .matches(/.{8,}/, "Ao menos 8 dígitos."),

  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password")], "Senhas diferentes."),
});

export const loginSchema = yup.object().shape({
  username: yup
    .string()
    .email("Digite um email válido.")
    .required("Campo obrigatório!"),

  password: yup.string().required("Campo obrigatório!"),
});
