"use client";

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { createPost } from "@/app/actions";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export function PostCreator() {
  return (
    <Card>
      <CardHeader>
        Create Post
      </CardHeader>
      <CardContent>
        <form action={createPost} className="space-y-2">
          <Input type="text" name="title" placeholder="title" />
          <Textarea name="content" placeholder="content" />
          <Button type="submit">create</Button>
        </form>
      </CardContent>
    </Card>
  );
}
