import { FC, useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import ReactPaginate from 'react-paginate';
import Link from 'next/link';
import { PhotoType } from '@/src/types/PhotoType';

type Props = {
  photos: PhotoType[]
}

export const getStaticProps = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/photos');
  const data = await response.json();

  const photos = data.slice(0, 100);

  return {
    props: { photos },
  };
};

const Photos: FC<Props> = ({ photos }) => {
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 10;

  const handlePageClick = (data: any) => {
    setCurrentPage(data.selected);
  };

  const offset = currentPage * itemsPerPage;
  const currentPhotos = photos.slice(offset, offset + itemsPerPage);

  return (
    <>
      <Head>
        <title>Photos</title>
      </Head>
      <div className="grid grid-cols-4 gap-4 p-4">
        {currentPhotos.map(photo => (
          <Link href={`/gallery-photos/${photo.id}`} key={photo.id} className="border p-2 rounded-lg">
            <Image src={photo.url} alt={photo.title} width={150} height={150} className="rounded-lg" />
            <p className="text-center mt-2">{photo.title}</p>
          </Link>
        ))}
      </div>
      <div className="flex justify-center mt-4 text-xl">
        <ReactPaginate
          previousLabel={'Previous'}
          nextLabel={'Next'}
          breakLabel={'...'}
          breakClassName={'break-me'}
          pageCount={Math.ceil(photos.length / itemsPerPage)}
          marginPagesDisplayed={3}
          pageRangeDisplayed={5}
          onPageChange={handlePageClick}
          containerClassName={'pagination'}
          activeClassName={'active'}
          className='flex gap-4'
        />
      </div>
    </>
  );
};

export default Photos;
