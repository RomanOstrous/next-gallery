import Head from "next/head";
import OnePhoto from "../../components/OnePhoto";
import { useRouter } from "next/router";
import { PhotoType } from "@/src/types/PhotoType";
import { FC } from "react";
import { GetServerSideProps } from "next";

type Props = {
  photo: PhotoType
};

export const getServerSideProps: GetServerSideProps = async (context: any) => {
  const {id} = context.params;
  const response = await fetch(`https://jsonplaceholder.typicode.com/photos/${id}`);
  const data = await response.json();

  if (!data) {
    return {
      notFound: true
    }
  }

  return {
    props: { photo: data },
  };
};

const photo:FC<Props> = ({photo}) => {
  const router = useRouter();

  return (
    <div>
      <Head>
        <title>Photos</title>
      </Head>
      
      <button onClick={() => router.back()}>Назад</button>
      <OnePhoto photo={photo}/>
    </div>
  )
}

export default photo;
