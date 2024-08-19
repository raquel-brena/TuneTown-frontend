import { MenuitemShare } from "./MenuTopitem"
import { Photo } from "../../Photo"
import { forum_blue_logo, music_pink_logo, playlist_purple_logo, podcast_green_logo } from "../../../assets/top_menu"

interface MenuFeedProps {
  userAvatar?: string | null;
  username?: string | null;
}

export const MenuFeed = ({ userAvatar }: MenuFeedProps) => {

  return (
    <div
      className="  h-[20%] flex w-full rounded-lg border-box relative bg-fume 
      border border-stroke overflow-hidden"
    >
      <div className=" h-full px-3 md:px-6 w-full my-3 items-center justify-center ">
        <div className="w-full items-center h-[30%] flex gap-4  ">
          <Photo size="3" src={userAvatar} />

          <div className="w-full h-full">
            <input className="outline-none bg-copacity_25 w-full h-full rounded-md " placeholder="" />
            <div className="w-full gap-4 mt-5 flex items-end justify-around ">
              <MenuitemShare src={music_pink_logo} name="Música" />
              <MenuitemShare src={playlist_purple_logo} name="Playlist" />
              <MenuitemShare src={podcast_green_logo} name="Podcast" />
              <MenuitemShare src={forum_blue_logo} name="Forum" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};