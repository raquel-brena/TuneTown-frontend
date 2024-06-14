
interface ButtonProps extends React.InputHTMLAttributes<HTMLInputElement> {
  full?: boolean;
  onClick?: () => void;
  bg?: string;
  children: React.ReactNode;
}

export const Button = ({  full, bg,  onClick, children, ...props }: ButtonProps) => {
  return (
    <button
      //onClick={onClick}
      className={`flex items-center border font-semibold justify-center text-center 
    ${
      full
        ? "bg-transparent text-theme border border-theme hover:text-theme/10"
        : bg
        ? `${bg} hover:bg-fume/10 border  border-stroke`
        : `bg-theme hover:bg-fume/10 border border-stroke`
    } 
    hover:opacity-90 transition-opacity 
    w-full py-2 rounded-sm text-base`}
    >
      {children}
    </button>
  );
};
