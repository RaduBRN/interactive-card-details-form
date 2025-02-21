import { useCardContext } from "../context/CardContext";
import ButtonComponent from "./ButtonComponent";
import { useState } from "react";
import { formSchema } from "../validations/card-form.validations.js";

function CardForm() {
  const {
    cardName,
    setCardName,
    cardNumber,
    setCardNumber,
    cardMonth,
    setCardMonth,
    cardYear,
    setCardYear,
    cardCvc,
    setCardCvc,
    setShowForm,
  } = useCardContext();

  const [errors, setErrors] = useState([]);

  let currentYear = new Date().getFullYear();
  currentYear = String(currentYear).slice(-2);

  function handleSubmit(e) {
    e.preventDefault();

    const data = {
      cardName,
      cardNumber,
      cardMonth,
      cardYear,
      cardCvc,
    };

    formSchema
      .validate(data, { abortEarly: false })
      .then(() => setShowForm(false))
      .catch((err) => {
        let errors = [];

        err.inner.forEach((error) => {
          let key = error.path;
          let message = error.message;
          errors[key] = message;
        });

        setErrors(errors);
      });
  }

  function handleNumberChange(e) {
    if (e.target.value.length === 0) {
      setCardNumber("");
      return;
    }

    let value = e.target.value;

    value = value
      .replace(/[^0-9a-zA-Z]/g, "")
      .slice(0, 16)
      .match(/.{1,4}/g)
      .join(" ")
      .toUpperCase();

    setCardNumber(value);
  }

  function handleInput(e, fn, min, max) {
    let value = e.target.value;

    value = ("".padStart(max, "0") + value).slice(
      value.length <= max || Number(value) <= Number("".padStart(max, "9"))
        ? -Number(max)
        : value.length - 1
    );

    if (value.length < min && value !== "") return;
    if (value.length > max) return;

    fn(value);
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-5 max-w-96 mx-auto lg:mx-0"
    >
      <div className="flex flex-col gap-2">
        <label
          htmlFor="name"
          className="text-[12px] uppercase text-[#21092F] tracking-[2px]"
        >
          Cardholder Name
        </label>
        <input
          type="text"
          id="name"
          value={cardName}
          placeholder="e.g. Jane Appleseed"
          onChange={(e) => setCardName(e.target.value)}
          className={`border rounded-lg ${
            errors.cardName ? "border-[#FF5050]" : "border-[#DFDEE0]"
          } h-11 p-3 placeholder:opacity-25 text-[18px]`}
        />
        {errors.cardName && (
          <span className="text-[12px] text-[#FF5050] px-3">
            {errors.cardName}
          </span>
        )}
      </div>
      <div className="flex flex-col gap-2">
        <label
          htmlFor="card-number"
          className="text-[12px] uppercase text-[#21092F] tracking-[2px]"
        >
          Card Number
        </label>
        <input
          type="text"
          id="card-number"
          value={cardNumber}
          placeholder="e.g. 1234 5678 9123 0000"
          onChange={handleNumberChange}
          className={`border rounded-lg ${
            errors.cardNumber ? "border-[#FF5050]" : "border-[#DFDEE0]"
          } h-11 p-3 placeholder:opacity-25 text-[18px]`}
        />
        {errors.cardNumber && (
          <span className="text-[12px] text-[#FF5050] px-3">
            {errors.cardNumber}
          </span>
        )}
      </div>
      <div className="grid grid-cols-2 gap-4 md:gap-8 lg:gap-4">
        <div className="flex flex-col gap-2">
          <label className="text-[12px] uppercase text-[#21092F] tracking-[2px]">
            Exp. Date (MM/YY)
          </label>
          <div className="flex gap-2">
            <input
              type="number"
              placeholder="MM"
              value={cardMonth}
              min={1}
              max={12}
              onChange={(e) => handleInput(e, setCardMonth, 1, 2)}
              className={`border rounded-lg ${
                errors.cardMonth ? "border-[#FF5050]" : "border-[#DFDEE0]"
              } h-11 p-3 placeholder:opacity-25 text-[18px] w-full`}
            />
            <input
              type="number"
              placeholder="YY"
              value={cardYear}
              min={currentYear}
              onChange={(e) => handleInput(e, setCardYear, 1, 2)}
              className={`border rounded-lg ${
                errors.cardYear ? "border-[#FF5050]" : "border-[#DFDEE0]"
              } h-11 p-3 placeholder:opacity-25 text-[18px] w-full`}
            />
          </div>
          {(errors.cardMonth || errors.cardYear) && (
            <span className="text-[12px] text-[#FF5050] px-3">
              {errors.cardMonth || errors.cardYear}
            </span>
          )}
        </div>
        <div className="flex flex-col gap-2">
          <label
            htmlFor="cvc"
            className="text-[12px] uppercase text-[#21092F] tracking-[2px]"
          >
            CVC
          </label>
          <input
            type="number"
            id="cvc"
            placeholder="e.g. 123"
            value={cardCvc}
            onChange={(e) => handleInput(e, setCardCvc, 1, 3)}
            className={`border rounded-lg ${
              errors.cardCvc ? "border-[#FF5050]" : "border-[#DFDEE0]"
            } h-11 p-3 placeholder:opacity-25 text-[18px]`}
          />
          {errors.cardCvc && (
            <span className="text-[12px] text-[#FF5050] px-3">
              {errors.cardCvc}
            </span>
          )}
        </div>
      </div>
      <ButtonComponent>Confirm</ButtonComponent>
    </form>
  );
}

export default CardForm;
