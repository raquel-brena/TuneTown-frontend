import { MenuLeftItem } from "./MenuLeftItem";
import {
  home,
  home2,
  search,
  search2,
  profile,
  profile2,
  foruns,
  foruns2,
  more, more2,
  config,
  config2
} from "../../assets/left_menu";
import { useEffect, useState } from "react";
import { useAuth } from "../../../infra/contexts/auth/UseAuth";


type MenuLeftProps = {
  buttonSelected: string;
  setButtonSelected: (value: string) => void;
};


export const MenuLeft = ({
  buttonSelected,
  setButtonSelected,
}: MenuLeftProps) => {
  
  const [theme, setTheme] = useState<string>("light");
const { user } = useAuth();

  useEffect(() => {
    setTheme(localStorage.getItem("theme")!);
  }, []);

 
const items = {
  home: { src: theme === "light" ? home2 : home, alt: "home", to: "/home" },
  search: {
    src: theme === "light" ? search2 : search,
    alt: "search",
    to: "/search",
  },
  foruns: {
    src: theme === "light" ? foruns2 : foruns,
    alt: "foruns",
    to: "/foruns",
  },
  profile: {
    src: theme === "light" ? profile2 : profile,
    alt: "profile",
    to: `/${user?.username}`,
  },
  more: { src: theme === "light" ? more : more2, alt: "more", to: "/more" },
};

  return (
    <div
      className="md:h-full md:w-[10%] 
      justify-center items-center flex 
      h-12 w-full absolute bottom-0 border-box 
      border border-stroke md:relative overflow-hidden md:z-0 z-30"
    >
      <div
        className="h-2/3 w-full justify-between sm:flex-row text-contrast gap-4 
      md:flex-col flex md:bg-transparent bg-fume items-end mr-2"
      >
        <div
          className="h-[80%] flex md:flex-col md:bg-transparent 
        flex-row bg-fume w-full sh-full gap-6 items-end"
        >
          {Object.values(items).map((item, index) => (
            <MenuLeftItem
              key={index}
              src={item.src}
              alt={item.alt}
              to={item.to}
              buttonSelected={buttonSelected}
              setButtonSelected={setButtonSelected}
            />
          ))}
        </div>
       
          <MenuLeftItem
            buttonSelected={buttonSelected}
            setButtonSelected={setButtonSelected}
            src={config}
            to={"/config"}
            alt={"config"}
          />
    
      </div>

      <div
        className={`absolute pointer-events-none h-[30%] w-80 bg-copacity_theme rotate-45 blur-3xl translate-y-80 `}
      />
    </div>
  );
};
