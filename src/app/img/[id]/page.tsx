import { getImage } from "~/server/queries";
import FullPageImageView from "~/common/full-page-image";

export default async function PhotoPage({ params }: { params: { id: string } }) {
  const { id } = await params;

  const idAsNumber = Number(id);
  if (isNaN(idAsNumber)) throw new Error("Invalid id");

  return <FullPageImageView id={idAsNumber} />;
}