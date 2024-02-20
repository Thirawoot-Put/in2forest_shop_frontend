const colorClass = {
  primary: "bg-black hover:bg-gray-700 border border-black text-white",
  secondary: "bg-[#d9d9d9] hover:bg-[#d0d0d0] border border-[#d0d0d0]",
};

const widthClass = {
  full: "w-full",
  44: "w-44",
};

function Button({
  children,
  color = "primary",
  width = "w-full",
  onClick,
  type = "button",
  text = "text-xl",
}) {
  const className = `
    btn
    ${color ? colorClass[color] : ""} 
    ${width} 
    ${text}
    font-bold px-12 py-2 rounded-2xl shadow-[2px_2px_2px_rgb(0,0,0,0.2)]
    `;
  return (
    <button className={className} onClick={onClick} type={type}>
      {children}
    </button>
  );
}

export default Button;
