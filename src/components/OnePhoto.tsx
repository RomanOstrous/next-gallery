import Image from "next/image";
import { PhotoType } from "../types/PhotoType";
import { FC } from "react";

type Props = {
  photo: PhotoType
};

const OnePhoto: FC<Props> = ({ photo }) => {
  const { title, url, id } = photo;

  return (
    <div className="flex flex-col items-center gap-4">
      <p className="text-gray-600 mb-2">Photo №{id}</p>
      <Image src={url} alt={title} width={150} height={150} className="rounded-lg" />
      <p className="text-center text-gray-800 font-semibold">{title}</p>
    </div>
  );
};

export default OnePhoto;
