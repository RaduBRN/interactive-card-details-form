import IconComplete from "../icons/IconComplete";
import ButtonComponent from "./ButtonComponent";
import { useCardContext } from "../context/CardContext";

function ThankYou() {
  const { resetForm } = useCardContext();

  function handleClick() {
    resetForm();
  }

  return (
    <div className="flex flex-col items-center gap-6 w-full max-w-96 mx-auto lg:mx-0">
      <IconComplete />
      <div className="flex flex-col gap-4 items-center">
        <h3 className="uppercase text-[28px] text-[#21092F]">Thank you!</h3>
        <p className="text-[18px] text-[#8F8694]">
          We've added your card details
        </p>
      </div>
      <ButtonComponent onClick={handleClick}>Continue</ButtonComponent>
    </div>
  );
}

export default ThankYou;
