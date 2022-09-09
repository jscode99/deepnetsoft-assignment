import { useEffect, useContext } from "react";
//Container
import { CategoryContainer } from "../App/container";
//Services
import AppContext from "../App/services/AppContext";

export async function getStaticPaths({ locales }) {
  const res = await fetch(process.env.API_ENDPOINT);
  const cate = await res.json();
  const paths = cate.map(item => {
    return {
      params: {
        slug: item.slug.toString(),
      },
    };
  });
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const { slug } = context.params;
  const apiURL = process.env.API_ENDPOINT + `${slug}`;
  const res = await fetch(apiURL);
  const categories = await res.json();
  return {
    props: { categories }, // will be passed to the page component as props
  };
}

export default function Home({ categories }) {
  // console.log(cate);
  return (
    <>
      <CategoryContainer categoryList={categories} />
    </>
  );
}
