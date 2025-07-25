// type Props = {
//   children: React.ReactNode;
// };

// const Button = ({ children }: Props) => {
//   return (
//     <button className="bg-primary transition hover:bg-[#158ace] px-8 py-1 shadow-lg rounded-3xl text-white">
//       {children}
//     </button>
//   );
// };

// export default Button;


// type Props = {
//   children: React.ReactNode;
// };

// const Button = ({ children }: Props) => {
//   return (
//     <button className="bg-primary transition hover:bg-[#158ace] px-8 py-2 shadow-lg rounded-3xl text-white font-semibold text-lg tracking-wide">
//       {children}
//     </button>
//   );
// };

// export default Button;

type Props = {
  children: React.ReactNode;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  className?: string; // ✅ додано className
};

const Button = ({ children, onClick, type = "button" }: Props) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className="bg-primary transition hover:bg-[#158ace] px-8 py-2 shadow-lg rounded-3xl text-white font-semibold text-lg tracking-wide"
    >
      {children}
    </button>
  );
};

export default Button;
