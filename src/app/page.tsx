import { db } from "~/server/db";

export const dynamic = "force-dynamic";

export default async function HomePage() {
  const images = await db.query.images.findMany({
    orderBy: (model, { desc }) => desc(model.id),
  });  
  return (
    <main className="">
      <div className="flex flex-wrap gap-4">        
        {[...images, ...images].map((image, index) => (
          <div key={image.id + '-' + index} className="w-48 h-64 overflow-hidden">
            <img src={image.url} alt={`Image ${image.name}`} className="object-cover object-center w-full h-full" />       
          </div>
        ))}
      </div>
    </main>
  );
}
