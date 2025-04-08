import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

interface PageProps {
  params: { slug: string };
}

export default async function PostPage({ params }: PageProps) {
  const post = await prisma.post.findUnique({ where: { slug: params.slug } });

  if (!post) return <div>Post not found</div>;

  return (
    <article>
      <h2 className="text-2xl font-semibold mb-2">{post.title}</h2>
      <p>{post.content}</p>
    </article>
  );
}

