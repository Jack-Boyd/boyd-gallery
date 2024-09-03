import { db } from "~/server/db";

export const dynamic = "force-dynamic";

const mockUrls = [
  'https://utfs.io/f/033d7ba5-0fac-470d-a7cf-002f3f93360e-hufggq.jpg',
  'https://utfs.io/f/2bfaebbf-f38c-4477-b750-19b7f1b57728-cjgcvy.jpg',
  'https://utfs.io/f/8d884c8f-9e0f-458e-ae72-0254ddebd25a-uyvw6o.jpg',
  'https://utfs.io/f/60da4662-043c-4cfb-917b-d6cc1716c49b-6g1p8z.jpg',
  'https://utfs.io/f/086e082d-f66b-45f7-92e9-dc4222e41ca1-9hnx4f.jpg',
  'https://utfs.io/f/f12c5d0a-037a-4564-b89e-ddd48ea0849c-tk6j2.jpg',
  'https://utfs.io/f/8e71827c-7e6d-4541-9e68-6f5db877d519-3d4aj9.jpg',
  'https://utfs.io/f/abac6886-f5ad-4ec7-bbd3-82dec12c434a-fv7abj.jpg'
];

const mockImages = mockUrls.map((url, index) => ({
  id: index + 1,
  url,
}));

export default async function HomePage() {
  const posts = await db.query.posts.findMany();
  console.log(posts);
  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {posts.map((post) => (<div key={post.id}>{post.name}</div>))}
        {[...mockImages, ...mockImages].map((image, index) => (
          <div key={image.id + '-' + index} className="w-48 h-64 overflow-hidden">
            <img src={image.url} alt={`Image ${image.id}`} className="object-cover object-center w-full h-full" />       
          </div>
        ))}
      </div>
    </main>
  );
}
