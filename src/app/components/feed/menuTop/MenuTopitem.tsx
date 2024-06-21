import { Img } from "../../Img";
import * as Dialog from "@radix-ui/react-dialog";

type MenuitemShareProps = {
src :string;
alt? :string;
name :string;
}

export const MenuitemShare = ({ src, alt, name }: MenuitemShareProps) => {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <button
          className="w-[25%] py-2 px-5 text-center 
        items-center gap-2 justify-center flex rounded-full
        border border-stroke color-constrast hover:bg-black/10
        duration-200 md:text-sm text-xs
        transition-all"
        >
          <div className=" flex w-[25%] h-auto">
            <Img src={src} alt="Logo" />
          </div>
          {name}
        </button>
      </Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Overlay className="bg-base opacity-50 data-[state=open]:animate-overlayShow fixed inset-0" />
        <Dialog.Content
          className=" bg-black border border-stroke text-contrast 
        rounded-xl
        stroke-stroke data-[state=open]:animate-contentShow fixed top-[30%] 
        left-[50%] w-[90vw] max-w-[30rem] h-[16rem] max-h-[30rem] translate-x-[-50%] 
        translate-y-[-50%]  px-7 py-3
        shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] 
        focus:outline-none"
        >
          <Dialog.Close asChild>
            <button className="flex self-end" aria-label="Close">
              X
            </button>
          </Dialog.Close>
          teste
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};
