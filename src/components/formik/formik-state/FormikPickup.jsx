import { useFormik } from "formik";
import React from "react";
import { validationsSchema } from "../validation/validation-pickup";

const FormikPickup = () => {
  const formik = useFormik({
    initialValues: {
      phone: "",
      email: "",
      country: "",
      city: "",
      street: "",
      house: "",
      apartment: "",
      postcode: "",
    },

    validationSchema: validationsSchema,
  });
  return <> {formik}</>;
};

export default FormikPickup;
