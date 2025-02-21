function ButtonComponent({ children, onClick }) {
  return (
    <button
      onClick={onClick}
      className="bg-[#21092F] hover:bg-[#610695] text-[#fff] text-[18px] h-14 rounded-lg w-full"
    >
      {children}
    </button>
  );
}

export default ButtonComponent;
