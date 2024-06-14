import { Comment } from "./Comment";
import { Like } from "./Like";
import { User } from "./User";

export type Post = {
  title: string;
  content: string;
  author: User;
  likes: Like[];
  comments: Comment[];
};

export type PostEntity = Post & {
  id: string;
  authorId: string;
  createdAt: string;
}