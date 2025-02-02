import { SignedIn, SignedOut } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { getImages } from "~/server/queries";
export const dynamic = "force-dynamic";

async function Images() {
  const images = await getImages();
  
  return (
    <div className="flex flex-wrap justify-center gap-4">
      {images.map((image) => (
        <div key={image.id} className="flex items-center justify-center h-64 w-48">
          <Link className="h-64 w-48" href={`/img/${image.id}`}>
            <Image 
              src={image.url} 
              width={192} 
              height={192} 
              alt={image.name} 
              className="h-full w-full object-cover"
            />
          </Link>
        </div>
      ))}
    </div>
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
