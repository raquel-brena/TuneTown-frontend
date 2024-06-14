import { MenuitemShare } from "./MenuTopitem"
import { Photo } from "../../Photo"
import { forum_blue_logo, music_pink_logo, playlist_purple_logo, podcast_green_logo } from "../../../assets/top_menu"
import { Img } from "../../Img";

export const MenuTop = () => {
    return (
      <div
        className="  h-[15%] w-full rounded-lg border-box relative bg-fume 
      border border-stroke overflow-hidden"
      >
        <div className=" h-full px-3 md:px-6 w-full my-3 items-center justify-center">
          <div className="w-full items-center h-[30%] flex gap-4 ">
            <Photo size="3" bg="D9D9D9" />
            <input className="outline-none bg-copacity_25 w-full h-full rounded-md " />
          </div>

          <div className="w-full gap-4 mt-5 flex items-end justify-end ">
            <MenuitemShare>
              <div className=" flex w-[25%] h-auto">
                <Img src={music_pink_logo} alt="Logo" />
              </div>
              Música
            </MenuitemShare>

            <MenuitemShare>
              <div className=" flex w-[25%] h-auto">
                <Img src={playlist_purple_logo} alt="Logo" />
              </div>
              Playlist
            </MenuitemShare>

            <MenuitemShare>
              <div className=" flex w-[25%] h-auto">
                <Img src={podcast_green_logo} alt="Logo" />
              </div>
              Podcast
            </MenuitemShare>

            <MenuitemShare>
              <div className=" flex w-[25%] h-auto">
                <Img src={forum_blue_logo} alt="Logo" />
              </div>
              Forum
            </MenuitemShare>
          </div>
        </div>
      </div>
    );
}