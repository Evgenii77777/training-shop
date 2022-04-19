import * as yup from "yup";

const phoneRegExp = /( )(\()(29|25|(44)|33)(\))(\d{3})(\d{2})(\d{2})$/;
const postRegExp = /(\BY)( )(\d{6})/;

export const validationsSchema = yup.object().shape({
  phone: yup
    .string()
    .required("Поле должно быть заполнено")
    .matches(phoneRegExp, "Неправильный код"),
  email: yup
    .string()
    .email("Невалидный email")
    .required("Поле должно быть заполнено"),
  country: yup.string().required("Поле должно быть заполнено"),
  city: yup.string().required("Поле должно быть заполнено"),
  street: yup.string().required("Поле должно быть заполнено"),
  house: yup.string().required("Поле должно быть заполнено"),
  apartment: yup.number(),
  postcode: yup
    .string()
    .required("Поле должно быть заполнено")
    .matches(postRegExp, "Неправильный индекс"),
});
