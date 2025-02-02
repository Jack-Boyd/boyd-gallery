import FullPageImageView from "~/components/full-page-image";
import { Modal } from "./modal";

export default async function PhotoModal({ params }: { params: { id: string } }) {
  const { id } = await params;

  const idAsNumber = Number(id);
  if (isNaN(idAsNumber)) throw new Error("Invalid id");

  return (
    <Modal>
      <FullPageImageView id={idAsNumber} />
    </Modal>
  );
}