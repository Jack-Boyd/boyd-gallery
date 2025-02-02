import { getImage } from "~/server/queries";

export default async function FullPageImageView(props: { id: number }) {
  const image = await getImage(props.id);
  return (
    <div className="flex w-full h-full min-w-0 justify-center py-4">
      <img id="full-page-img" src={image?.url} alt={image?.name} />
    </div>
  );
}