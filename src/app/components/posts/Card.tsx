
import { Photo } from "../Photo";
import { IoHeartOutline } from "react-icons/io5";
import { FaRegCommentAlt } from "react-icons/fa";


interface CardProps {
  title: string;
  content: string;
  created_at: string;
  children?: React.ReactNode;
}

export function Card({ title, content, created_at }: CardProps) {
  return (
    <div
      className={`flex w-full flex-grow sm:h-72 md:h-max
    border-stroke border text-contrast flex-col bg-fume p-2 
    rounded-lg`}
    >
      <div className="flex w-full h-[30%] items-center gap-2">
        <Photo size="1.9" bg="D9D9D9" />
        <div className="flex flex-col text-sm">
          <span>{title}</span>
          <span className="text-xs text-copacity_25">{created_at}</span>
        </div>
      </div>

      <div className="flex justify-center max-h-full text-justify text-pretty p-3 px-7">
        {content}
      </div>

      <div className="flex w-full h-[20%] gap-6 px-7 ">
        <button
          className="hover:text-rose-500
        hover:border-b-violet-600"
        >
          <IoHeartOutline size={20} />
        </button>
        <button
          className="hover:text-blue-500
        hover:border-b-violet-600"
        >
          <FaRegCommentAlt />
        </button>
      </div>
    </div>
  );
}
