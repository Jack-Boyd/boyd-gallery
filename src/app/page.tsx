import { SignedIn, SignedOut } from "@clerk/nextjs";
import { db } from "~/server/db";
export const dynamic = "force-dynamic";

async function Images() {
  const images = await db.query.images.findMany({ 
    orderBy: (model, { desc }) => desc(model.createdAt),
  });
  
  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {images.map((image) => (
          <div key={image.id} className="w-48">
            <img src={image.url} alt={image.name} />
          </div>
        ))}
      </div>
    </main>
  );
}
export default async function HomePage() {
  return (
    <main className="">
      <SignedOut>
        <div className="h-full w-full text-2xl text-center">Please sign in to view the gallery.</div>
      </SignedOut>
      <SignedIn>
        <Images />
      </SignedIn>
    </main>
  )
}
