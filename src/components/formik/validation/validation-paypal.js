import * as yup from "yup";

export const validationsSchemaPaymentPaypal = yup.object().shape({
  cashEmail: yup
    .string()
    .email("Невалидный email")
    .required("Поле должно быть заполнено"),
});
