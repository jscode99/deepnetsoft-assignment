// import { useEffect, useContext } from "react";
//Container
import { HomeContainer } from "../App/container";
//Services
// import AppContext from "../App/services/AppContext";

export async function getStaticProps(context) {
  const res = await fetch(process.env.API_ENDPOINT);
  const cate = await res.json();
  return {
    props: { cate }, // will be passed to the page component as props
  };
}

export default function Home({ cate }) {
  console.log(cate);
  return (
    <>
      <HomeContainer categoryList={cate} />
    </>
  );
}
