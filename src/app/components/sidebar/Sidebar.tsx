import { BoxSidebar } from "./BoxSidebar";
import { StatusTuner } from "./StatusTuner";

export const Sidebar = () => {

  return (
    <div className="md:flex flex-col items-center h-full w-[30%] gap-10 p-8 border-l border-stroke hidden ">

      <input className="w-[95%] h-12 bg-fume border border-stroke rounded-3xl focus:border-theme outline-none ring-0 placeholder:text-constrast placeholder:mx-3" placeholder="Buscar" />

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