"use server";

import { database } from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export async function createPost(formData: FormData) {
  const post = await database.post.create({
    data: {
      title: formData.get("title") as string,
      content: formData.get("content") as string,
    }
  });

  revalidatePath("/");

  return post;
}

export async function deletePost(formData: FormData) {
  const id = formData.get("id") as string;

  await database.post.delete({
    where: {
      id,
    }
  });

  revalidatePath("/");

  return null;
}
