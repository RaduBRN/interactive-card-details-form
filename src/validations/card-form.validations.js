import * as yup from "yup";

let currentYear = new Date().getFullYear();
currentYear = String(currentYear).slice(-2);

const formSchema = yup.object().shape({
  cardName: yup
    .string()
    .required("Can't be blank")
    .matches(/^[^0-9]*$/, "Numbers are not allowed in the name field"),
  cardNumber: yup
    .string()
    .required("Can't be blank")
    .matches(/^[^A-Z]*$/, "Wrong format, numbers only"),
  cardMonth: yup.string().required("Can't be blank"),
  cardYear: yup
    .string()
    .test(
      "",
      "Year should be more than the current year",
      (value) => Number(value) >= Number(currentYear)
    )
    .test(
      "",
      "Year limit exceeded",
      (value) => Number(value) <= Number(currentYear) + 5
    )
    .required("Can't be blank"),
  cardCvc: yup.string().required("Can't be blank"),
});

export { formSchema };
