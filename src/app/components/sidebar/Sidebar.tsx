import { BoxSidebar } from "./BoxSidebar";
import SearchInput from "./SearchInput";
import { ShareTuner } from "./ShareTuner";
import { StatusTuner } from "./StatusTuner";
import { IoIosSearch } from "react-icons/io";

export const Sidebar = () => {

  return (
    <div className="md:flex flex-col items-center h-full w-[30%] gap-10 p-8 border-l border-stroke hidden ">
      <SearchInput />

      <div className="w-full h-[90%] md:flex flex-col gap-3 ">
        <BoxSidebar>
          <StatusTuner />
          <StatusTuner />
          <StatusTuner />
          <StatusTuner />
          <StatusTuner />
        </BoxSidebar>
        <BoxSidebar>
          <div className="flex gap-3 w-full p-3 flex-col items-start justify-start h-full font-light">
            <p className="font-bold self-center">
              As mais compartilhadas do momento
            </p>
            <ShareTuner />
          </div>
        </BoxSidebar>
      </div>
    </div>
  );
}