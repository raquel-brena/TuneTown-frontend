
import { Photo } from "../Photo";
import { IoHeartOutline } from "react-icons/io5";
import { FaRegCommentAlt } from "react-icons/fa";
import { HeartButton } from "./HeartButton";


interface CardProps {
  author: string;
  authorImg?: string;
  track: any;
  content: string;
  created_at: string;
  children?: React.ReactNode;
}

export function Card({ author, authorImg, content, track, created_at }: CardProps) {
  return (
    <div
      className={`flex w-full sm:h-[20%] md:h-fit
    border-stroke border text-contrast flex-col bg-fume p-2 
    rounded-lg`}
    >
      <div className="flex w-full h-[30%] items-center gap-2">
        <Photo size="1.9" src={authorImg} />
        <div className="flex flex-col text-sm">
          <span>@{author}</span>
          <span className="text-xs text-copacity_25">{created_at}</span>
        </div>
      </div>

      <div className="flex justify-center flex-col max-h-full  text-pretty p-3 px-7 w-full">
        <div className="flex-grow">{content}</div>
        <div className="w-full bg-copacity_25 rounded-lg p-4">
          <div className="flex gap-3">
            {" "}
            <img className="size-32" src={track?.album?.images[0].url} />
            <div>
              <p>{track?.artists[0].name}</p>
              <p>{track?.name}</p>
              <p>{track?.album?.name}</p>
              <p>
                {Math.floor(track?.duration_ms / 60000)}:
                {String(
                  Math.floor((track?.duration_ms % 60000) / 1000)
                ).padStart(2, "0")}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex w-full h-[20%] gap-6 px-7 ">
        <HeartButton />
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
