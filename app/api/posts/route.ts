import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function POST(req: Request) {
  const data = await req.json();
  const { title, slug, content } = data;

  const post = await prisma.post.create({
    data: { title, slug, content },
  });

  return NextResponse.json(post);
}