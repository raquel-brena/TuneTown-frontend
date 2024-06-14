import { useParams } from "react-router-dom";
import { Photo } from "../components/Photo";
import { useState } from "react";
import { MenuItem } from "../components/profile/MenuItem";
import { ContainerPosts } from "../components/profile/ContainerPosts";
import { Card } from "../components/posts/Card";
import { useAuth } from "../../infra/contexts/auth/UseAuth";

export const Profile = () => {
  const { user } = useAuth();
    const { profileId } = useParams<{profileId: string}>();
    const [ selectedButton, setSelectedButton ] = useState<string>("posts");

    const items = ["posts", "foruns", "curtidas" ]

    return (
      <div className="w-full h-full items-center">
        <div
          className="h-full md:w-11/12 w-full rounded-lg border-box relative border-r-[1px] 
       border-stroke overflow-hidden border-collapse overflow-y-auto scroll-smooth scroll"
        >
          <>
            {/* PROFILE HEADER */}
            <div className="h-[30%] border-b-[1px] border-stroke ">
              {/* BACK */}
              <div className="h-1/6 border-b-[1px] border-stroke ">
                @{user?.username}
              </div>
              {/* HEADER */}
              <div className="flex flex-col relative h-[84%] justify-between">
                {/* PROFILE INFO */}
                <div className="flex justify-between px-6  pt-4 ">
                  <div className="flex flex-row items-center gap-2">
                    <Photo bg="d9d9d9" size="4" />
                    <div
                      className="w-24 z-10 top-[4.5rem] left-16 absolute h-8
                     bg-fume rounded-tr-xl rounded-bl-xl rounded-br-xl border p-0
                      border-theme text-center text-sm font-semibold"
                    >
                      @{user?.username}
                    </div>
                    <div className="flex flex-col text-sm">
                      <span>
                        listen now <b> beautiful thins - benson boone</b>
                      </span>
                      <span>251 tuners shared</span>
                    </div>
                  </div>
                  <div>music</div>
                </div>
                {/* MENU */}
                <div className="flex h-1/6 w-full ">
                  <div className="flex flex-row gap-9 pl-4">
                    {items.map((item, index) => (
                      <MenuItem
                        key={index}
                        buttonSelected={selectedButton}
                        setButtonSelected={setSelectedButton}
                      >
                        {item}
                      </MenuItem>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            {/* PROFILE POSTS */}
            <div className="w-full h-full justify-center flex">
              <ContainerPosts>
                <Card
                  content="aaaaaaaaaaaaaaaaaaaaa"
                  created_at="10min ago"
                  title="teste"
                />
                <Card
                  content="aaaaaaaaaaaaaaaaaaaaa"
                  created_at="10min ago"
                  title="teste"
                />
                <Card
                  content="aaaaaaaaaaaaaaaaaaaaa"
                  created_at="10min ago"
                  title="teste"
                />
                <Card
                  content="aaaaaaaaaaaaaaaaaaaaa"
                  created_at="10min ago"
                  title="teste"
                />
                <Card
                  content="aaaaaaaaaaaaaaaaaaaaa"
                  created_at="10min ago"
                  title="teste"
                />
              </ContainerPosts>
            </div>
          </>
        </div>
      </div>
    );
};
