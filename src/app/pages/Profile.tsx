import { useParams } from "react-router-dom";
import { Photo } from "../components/Photo";
import { useState } from "react";
import { MenuItem } from "../components/profile/MenuItem";
import { ContainerPosts } from "../components/profile/ContainerPosts";
import { Card } from "../components/posts/Card";
import { useAuth } from "../../infra/contexts/auth/UseAuth";
import { EditProfileButton } from "../components/profile/EditProfileButton";
import { FavoriteMusic } from "../components/profile/FavoriteMusic";
import { TbArrowBackUp } from "react-icons/tb";
import { ProfileMenu } from "../components/profile/ProfileMenu";

export const Profile = () => {
  const { user } = useAuth();
  const { profileId } = useParams<{ profileId: string }>();


  return (
    <div className="w-full h-full items-center">
      <div
        className="h-full md:w-11/12 w-full rounded-lg border-box relative border-r-[1px] 
       border-stroke overflow-hidden border-collapse overflow-y-auto scroll-smooth scroll"
      >
        <>
          {/* PROFILE MENU */}
         <ProfileMenu/>
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
