import { SignedIn, SignedOut } from "@clerk/nextjs";
import { db } from "~/server/db";

export const dynamic = "force-dynamic";

async function Images() {
  const images = await db.query.images.findMany({
    orderBy: (model, { desc }) => desc(model.id),
  });  
  return (
    <div className="flex flex-wrap gap-4">        
      {images.map((image) => (
        <div key={image.id} className="w-48 h-64 overflow-hidden">
          <img src={image.url} alt={`Image ${image.name}`} className="object-cover object-center w-full h-full" />
        </div>
      ))}
    </div>
  );
}

export default function HomePage() {  
  return (
    <main className="">
      <SignedOut>
        <div className="h-full w-full text-2xl text-center">Please sign in</div>
      </SignedOut>
      <SignedIn>
        <Images />
      </SignedIn>      
    </main>
  );
}
