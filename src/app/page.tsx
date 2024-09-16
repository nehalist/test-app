import { database } from "@/lib/prisma";
import { PostList } from "@/app/post-list";
import { PostCreator } from "@/app/post-creator";

export default async function Home() {
  const posts = await database.post.findMany({
    orderBy: {
      id: "desc"
    }
  });

  return (
    <div className="container max-w-2xl mx-auto mt-16">
      <PostCreator />
      <PostList posts={posts} />
    </div>
  );
}
