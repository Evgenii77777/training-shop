import * as yup from "yup";

// const cartRegExp = /(\d{4})( )(\d{4})( )(\d{4})( )(\d{4})/;
const cartRegExp = /(\d{16})/;
const yearRegExp = /(\d{2})(\/)(\d{2})/;
const cvvRegExp = /(\d{3})/;

export const validationsSchemaPayment = yup.object().shape({
  card: yup
    .string()
    .required("Поле должно быть заполнено")
    .matches(cartRegExp, "Неправильный номер"),
  cardDate: yup
    .string()
    .matches(yearRegExp, "Неправильный номер")
    .required("Поле должно быть заполнено"),
  cardCVV: yup
    .string()
    .matches(cvvRegExp, "Неправильный номер")
    .required("Поле должно быть заполнено"),
});
