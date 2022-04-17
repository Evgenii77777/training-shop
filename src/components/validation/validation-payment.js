import * as yup from "yup";

// const cartRegExp = /(\d{4})( )(\d{4})( )(\d{4})( )(\d{4})/;
const cartRegExp = /(\d{16})/;
const yearRegExp = /(\d{2})(\/)(\d{2})/;
const cvvRegExp = /(\d{3})/;

export const validationsSchemaPayment = yup.object().shape({
  card: yup
    .string()
    .max(16)
    .required("Поле должно быть заполнено")
    .matches(cartRegExp, "Неправильный номер"),
  cardDate: yup
    .string()
    .matches(yearRegExp, "Неправильный номер")
    .required("Поле должно быть заполнено"),
  cardCVV: yup
    .string()
    .max(3)
    .matches(cvvRegExp, "Неправильный номер")
    .required("Поле должно быть заполнено"),
});
