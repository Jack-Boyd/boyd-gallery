import Image from "next/image";
import { SignedIn, SignedOut } from "@clerk/nextjs";
import { getImages } from "~/server/queries";

export const dynamic = "force-dynamic";

async function Images() {
  const images = await getImages();

  return (
    <div className="flex flex-wrap justify-center gap-4">        
      {images.map((image) => (
        <div key={image.id} className="flex flex-col w-48 h-64 overflow-hidden">
          <Image 
            src={image.url}
            alt={image.name}
            width={192}
            height={256}
            style={{ 
              objectFit: "cover", 
              objectPosition: "center",
              width: '100%',
              height: '100%',
            }}
          />
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
