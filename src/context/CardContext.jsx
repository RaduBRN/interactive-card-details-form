import { createContext, useState, useContext } from "react";

const CardContext = createContext();

export function useCardContext() {
  return useContext(CardContext);
}

export function CardProvider({ children }) {
  const [cardName, setCardName] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [cardMonth, setCardMonth] = useState("");
  const [cardYear, setCardYear] = useState("");
  const [cardCvc, setCardCvc] = useState("");
  const [showForm, setShowForm] = useState(true);

  function resetForm() {
    setCardName("");
    setCardNumber("");
    setCardMonth("");
    setCardYear("");
    setCardCvc("");
    setShowForm(true);
  }

  return (
    <CardContext.Provider
      value={{
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
        showForm,
        setShowForm,
        resetForm,
      }}
    >
      {children}
    </CardContext.Provider>
  );
}
