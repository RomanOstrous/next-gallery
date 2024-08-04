import Image from "next/image";
import { PhotoType } from "../types/PhotoType";
import { FC } from "react";

type Props = {
  photo: PhotoType
};

const OnePhoto:FC<Props> = ({photo}) => {
  const {title, url, id} = photo;

  return (
    <div className="border p-2 rounded-lg">
      <p>Photo №{id}</p>
      <Image src={url} alt={title} width={150} height={150} className="rounded-lg" />
      <p className="text-center mt-2">{title}</p>
    </div>
  )
}

export default OnePhoto
