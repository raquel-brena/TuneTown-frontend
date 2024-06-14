import {Card} from "../components/posts/Card";
import { MenuTop } from "../components/feed/menuTop/MenuTop";
import { ContainerPosts } from "../components/feed/ContainerPosts";

export const Feed = () => {

  const text1= "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. ";
  const text2= "from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. ";
 const longText =
   "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, ";
    return (
      <div className="justify-center mt-4 md:w-[85%] flex flex-col items-center">
        <MenuTop />
        <ContainerPosts>
          <Card title="title" created_at="08 ago" content={text1} />
          <Card title="title" created_at="08 ago" content={longText} />
          <Card title="title" created_at="08 ago" content={text2} />
          <Card title="title" created_at="08 ago" content={text2} />
          <Card title="title" created_at="08 ago" content={text2} />
          <Card title="title" created_at="08 ago" content={text2} />
        </ContainerPosts>
      </div>
    );
}