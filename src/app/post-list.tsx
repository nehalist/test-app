import { Post } from "@prisma/client";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { deletePost } from "@/app/actions";
import { Button } from "@/components/ui/button";

export function PostList({ posts }: { posts: Post[] }) {
  if (posts.length === 0) {
    return <>no posts</>
  }

  return (
    <div className="space-y-2 mt-2">
      {posts.map((post) => (
        <Card key={post.id}>
          <CardHeader>
            <CardHeader>{post.title}</CardHeader>
          </CardHeader>
          <CardContent>
            <p>{post.content}</p>
          </CardContent>
          <CardFooter>
            <form action={deletePost}>
              <input type="hidden" name="id" value={post.id} />
              <Button variant="destructive">delete</Button>
            </form>
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}
