import { CardProvider, useCardContext } from "../context/CardContext";
import BgDesktop from "../assets/images/bg-main-desktop.png";
import BgMobile from "../assets/images/bg-main-mobile.png";
import CardDetails from "./CardDetails";
import CardForm from "./CardForm";
import ThankYou from "./ThankYou";

function AppContent() {
  const { showForm } = useCardContext();

  return (
    <main className="lg:h-screen flex flex-col md:flex-row items-center justify-center">
      <picture className="absolute top-0 bottom-0 left-0 right-0 lg:inset-0 -z-20">
        <source media="(max-width: 768px)" srcSet={BgMobile} />
        <source media="(min-width: 768px)" srcSet={BgDesktop} />
        <img
          className="w-full lg:w-1/3 h-1/3 lg:h-full object-cover"
          src={BgDesktop}
          alt="gradient background"
        />
      </picture>
      <div className="grid grid-cols-1 lg:grid-cols-2 w-full md:w-auto items-center justify-center px-6 md:px-0 py-6 lg:py-0 gap-8 md:gap-10 lg:gap-32">
        <CardDetails />
        {showForm ? <CardForm /> : <ThankYou />}
      </div>
    </main>
  );
}

function App() {
  return (
    <CardProvider>
      <AppContent />
    </CardProvider>
  );
}

export default App;
