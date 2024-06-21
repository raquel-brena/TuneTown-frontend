import { BoxSidebar } from "./BoxSidebar";
import SearchInput from "./SearchInput";
import { StatusTuner } from "./StatusTuner";
import { IoIosSearch } from "react-icons/io";

export const Sidebar = () => {

  return (
    <div className="md:flex flex-col items-center h-full w-[30%] gap-10 p-8 border-l border-stroke hidden ">
      <SearchInput/>

      <div className="w-full h-[90%] md:flex flex-col gap-10 ">
        <BoxSidebar>
          <StatusTuner />
          <StatusTuner />
          <StatusTuner />
          <StatusTuner />
          <StatusTuner />
        </BoxSidebar>
        <BoxSidebar> StatusTuner</BoxSidebar>
      </div>
    </div>
  );
}