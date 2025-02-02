import 'server-only';
import { db } from './db';
import { auth } from '@clerk/nextjs/server';

export async function getImages() {
  const user = await auth();
  if (!user.userId) throw new Error('Unauthorized');

  const images = await db.query.images.findMany({
    orderBy: (model, { desc }) => desc(model.createdAt),
  });
  return images
};

export async function getImage(id: number) {
  const user = await auth();
  if (!user.userId) throw new Error('Unauthorized');
  
  const image = await db.query.images.findFirst({
    where: (model, { eq }) => eq(model.id, id),
  });
  return image
};