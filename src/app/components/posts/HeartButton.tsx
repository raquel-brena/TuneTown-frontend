import { useState } from "react";
import { IoHeartOutline } from "react-icons/io5";
import { IoHeart } from "react-icons/io5";

export const HeartButton = () => { 
    const [liked, setLiked] = useState(false);


    return (
      <button
        className="hover:text-rose-500
        hover:border-b-violet-600 "
        onClick={() => setLiked(!liked)}
      >
        {liked ? (
          <IoHeart size={20} className="text-theme" />
        ) : (
          <IoHeartOutline size={20} />
        )}
      </button>
    );

}