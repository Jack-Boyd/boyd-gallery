import Link from "next/link";

const mockUrls = [
  "https://45tuovph5w.ufs.sh/f/WZDlHjQmJzGLHpjdM8TMe1VxlKYvjTbmztZhdCiQG7U86AX0",
  "https://45tuovph5w.ufs.sh/f/WZDlHjQmJzGLVRbG6T3KpA6zFUTGStL2Pnhb9exs7gkQWX5a",
  "https://45tuovph5w.ufs.sh/f/WZDlHjQmJzGLagr1VpWkY0gPJS9sKxNADXTc54hMvqOo1wiV",
  "https://45tuovph5w.ufs.sh/f/WZDlHjQmJzGL8tdTlLA5fnEyqoVH4G7vJTpb6rY30X8ijsmw",
  "https://45tuovph5w.ufs.sh/f/WZDlHjQmJzGLwemNgbGN1OxAGXD4WZ6dScHPBEMgUyF2Ihok",
  "https://45tuovph5w.ufs.sh/f/WZDlHjQmJzGLHgj8atTMe1VxlKYvjTbmztZhdCiQG7U86AX0",
  "https://45tuovph5w.ufs.sh/f/WZDlHjQmJzGLT6jgdM929bqBm82rJ4CMyfDshk3ERwZPlAXF",
  "https://45tuovph5w.ufs.sh/f/WZDlHjQmJzGLKzkJU5yzPn98efUyAuhMXCY6Zl32tmN0drGx",
  "https://45tuovph5w.ufs.sh/f/WZDlHjQmJzGLampEgYkY0gPJS9sKxNADXTc54hMvqOo1wiVj",
];

const mockImages = mockUrls.map((url, index) => ({
  id: index + 1,
  url,
}));

export default function HomePage() {
  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {mockImages.map((image) => (
          <div key={image.id} className="w-48">
            <img src={image.url} />
          </div>
        ))}
      </div>
    </main>
  );
}
