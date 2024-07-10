import { useParams } from "react-router-dom";
import { ContainerPosts } from "../components/profile/ContainerPosts";
import { Card } from "../components/posts/Card";
import { useAuth } from "../../infra/contexts/auth/UseAuth";
import { ProfileMenu } from "../components/profile/ProfileMenu";

export const Profile = () => {
const { posts } = useAuth();
  return (
    <div className="w-full h-full items-center">
      <div
        className="h-full md:w-11/12 w-full rounded-lg border-box relative border-r-[1px] 
       border-stroke overflow-hidden  flex flex-col items-center border-collapse overflow-y-auto scroll-smooth scroll"
      >
       
          {/* PROFILE MENU */}
          <ProfileMenu />
          {/* PROFILE POSTS */}
            <ContainerPosts>
              {posts.length > 0 ? (
                posts.map((post, index) => (
                  <Card
                    key={index}
                    author={post.author}
                    content={post.content}
                    created_at={post.created_at}
                    track={post.track}
                  />
                ))
              ) : (
                <p></p>
              )}
            </ContainerPosts>
       
       
      </div>
    </div>
  );
};
