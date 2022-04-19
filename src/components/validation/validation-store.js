import * as yup from "yup";

const phoneRegExp = /( )(\()(29|25|(44)|33)(\))(\d{3})(\d{2})(\d{2})$/;

export const validationsSchemaStore = yup.object().shape({
  phone: yup
    .string()
    .required("Поле должно быть заполнено")
    .matches(phoneRegExp, "Неправильный код"),
  email: yup
    .string()
    .email("Невалидный email")
    .required("Поле должно быть заполнено"),
  country: yup.string().required("Поле должно быть заполнено"),
  storeAddress: yup.string().required("Поле должно быть заполнено"),
});
