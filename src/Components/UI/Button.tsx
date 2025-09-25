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

// import * as React from 'react';

// type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
//   variant?: 'primary' | 'secondary' | 'ghost';
// };

// const base =
//   'inline-flex items-center justify-center rounded-full px-6 py-3 font-medium transition focus:outline-none focus:ring disabled:opacity-60 disabled:cursor-not-allowed';

// const variants: Record<NonNullable<ButtonProps['variant']>, string> = {
//   primary: 'bg-blue-600 text-white hover:bg-blue-700',
//   secondary: 'bg-gray-200 text-gray-900 hover:bg-gray-300',
//   ghost: 'bg-transparent text-blue-600 hover:bg-blue-50',
// };

// const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
//   ({ variant = 'primary', className = '', children, ...props }, ref) => {
//     return (
//       <button
//         ref={ref}
//         className={`${base} ${variants[variant]} ${className}`}
//         {...props} // <- прокидує type, onClick, disabled, etc.
//       >
//         {children}
//       </button>
//     );
//   }
// );

// Button.displayName = 'Button';
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
