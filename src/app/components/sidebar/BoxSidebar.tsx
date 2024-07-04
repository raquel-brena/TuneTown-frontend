export const BoxSidebar = ({ children }: { children: React.ReactNode }) => {


    return (
      <div
        className="flex overflow-hidden 
        items-center justify-center flex-col 
        h-[55%] gap-2 rounded-md w-full 
        bg-fume border border-stroke clip-path "
      >
        {children}
      </div>
    );
}