import { Link } from "react-router-dom";
import { Img } from "../Img";

interface MenuLeftItemProps {
  src: string;
  alt: string;
  buttonSelected: string;
  setButtonSelected: (value: string) => void;
  to: string; // Adicione esta linha
}

export const MenuLeftItem = ({
  src,
  alt,
  buttonSelected,
  setButtonSelected,
  to,
}: MenuLeftItemProps) => {
  function selectMenu(alt: string) {
    setButtonSelected(alt);
  }

  return (
    <Link
      to={to} // Adicione esta linha
      onClick={() => selectMenu(alt)}
      className="flex  h-10 p-6 fill-contrast stroke-contrastw-full items-center justify-center group"
    >
      <Img src={src} alt={alt} />
      <div
        className={`${
          alt !== "more"
            ? alt === buttonSelected
              ? `absolute size-12 bg-copacity_25 rounded-full`
              : "transition-all group-hover:absolute group-hover:size-12 group-hover:bg-copacity_25 group-hover:rounded-full"
            : `md:-z-10  absolute size-12 bg-theme rounded-full hover:bg-copacity_theme/5 transition-all`
        }`}
      ></div>
    </Link>
  );
};
