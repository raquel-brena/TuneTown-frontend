import { BoxSidebar } from "./BoxSidebar";

export const Sidebar = () => {


    return (
      <div className="md:flex flex-col h-full w-[30%] p-8 border-l border-stroke hidden ">
        <div className="w-full  h-1/6">searc</div>
        <div className="w-full h-[90%] md:flex flex-col gap-10">
          <BoxSidebar />
          <BoxSidebar />
        </div>
      </div>
    );
}