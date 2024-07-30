import Image from "next/image";
import Link from "next/link";

const links = [
  { id: 2, title: 'Images', path: '/gallery-photos', img: '/img/foto.jpg' },
  { id: 3, title: 'Videos', path: '/gallery-videos', img: '/img/video.jpg' },
  { id: 4, title: 'Music', path: '/gallery-music', img: '/img/music.jpg' },
];

const Gallery = () => {
  return (
    <div className="flex items-center justify-center gap-10 mt-20">
      {links.map(({ id, title, path, img }) => (
        <Link
          key={id}
          href={path}
          className="block"
        >
          <Image
            src={img}
            width={400}
            height={300}
            className="object-cover w-[400px] h-[300px]"
            alt={title}
          />
          <div className="text-center mt-2">{title}</div>
        </Link>
      ))}
    </div>
  );
};

export default Gallery;
