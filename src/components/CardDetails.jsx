import IconLogo from "../icons/IconLogo";
import BgCardFront from "../assets/images/bg-card-front.png";
import BgCardBack from "../assets/images/bg-card-back.png";
import { useCardContext } from "../context/CardContext";

function CardDetails() {
  const { cardNumber, cardName, cardMonth, cardYear, cardCvc } =
    useCardContext();

  return (
    <div className="flex flex-col-reverse lg:flex-col lg:gap-10">
      <div className="-mt-16 md:-mt-20 z-10">
        <div
          className="shadow-2xl w-[286px] h-[157px] md:w-[400px] md:h-[220px] lg:w-[447px] lg:h-[245px] bg-cover bg-center rounded-xl"
          style={{ backgroundImage: `url(${BgCardFront})` }}
        >
          <div className="flex flex-col justify-between p-5 md:p-6 h-full">
            <IconLogo className="w-[54px] h-[30px] md:w-[84px] md:h-[45px]" />
            <div className="flex flex-col gap-4 md:gap-5">
              <p className="text-[18px] md:text-[22px] lg:text-[28px] tracking-[2.2px] md:tracking-[3.42px] font-medium text-[#fff]">
                {cardNumber.length === 0 ? "0000 0000 0000 0000" : cardNumber}
              </p>

              <div className="flex justify-between text-[9px] md:text-[12px] lg:text-[14px] text-[#fff] tracking-[1.29px] md:tracking-[2px] font-medium">
                <p className="uppercase">
                  {cardName.length === 0 ? "Jane Appleseed" : cardName}
                </p>
                <p>
                  {cardMonth.length === 0 ? "00" : cardMonth}/
                  {cardYear.length === 0 ? "00" : cardYear}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="self-end lg:self-start">
        <div
          className="relative shadow-2xl w-[286px] h-[157px] md:w-[400px] md:h-[220px] lg:w-[447px] lg:h-[245px] bg-cover bg-center rounded-xl md:ml-20"
          style={{ backgroundImage: `url(${BgCardBack})` }}
        >
          <div className="absolute top-[calc(50%-8px)] md:top-[calc(50%-12px)] right-8 md:right-12 lg:right-14 flex items-center justify-end">
            <p className="text-[9px] md:text-[14px] tracking-[2px] font-medium text-[#fff]">
              {cardCvc.length === 0 ? "000" : cardCvc}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardDetails;
