import {Card} from "../components/posts/Card";
import { MenuFeed } from "../components/feed/menuTop/MenuFeed";
import { ContainerPosts } from "../components/feed/ContainerPosts";
import { useAuth } from "../../infra/contexts/auth/UseAuth";
import { useEffect } from "react";


export const Feed = () => {
  const { user, posts } = useAuth();

  useEffect(() => {
    
 console.log(posts)
  }),[posts];

    return (
      <div className="justify-center 
      mt-4 md:w-[85%] h-full flex flex-col 
      items-center">
        <MenuFeed
          username={user?.username}
          userAvatar={user?.profile?.avatarUrl}
        />
        <ContainerPosts>
          {posts.length > 0 && posts.map((post, index) => (
            <Card
              authorImg={user?.profile?.avatarUrl}
              key={index}
              author={post.author}
              content={post.content}
              created_at={post.created_at}
              track={post.track}
            />
          ))}
        </ContainerPosts>
      </div>
    );
}