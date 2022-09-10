import { useEffect, useContext } from "react";
//Container
import { HomeContainer } from "../App/container";
//Services
import { FetchCall } from "../App/lib/FetchService";
import AppContext from "../App/lib/AppContext";

export async function getServerSideProps(context) {
  const cate = await FetchCall();
  const product = await FetchCall("product");
  return {
    props: { cate, product }, // will be passed to the page component as props
  };
}

export default function Home({ cate, product }) {
  const { appContext, setAppContext } = useContext(AppContext);
  useEffect(() => {
    setAppContext({
      ...appContext,
      productList: product,
    });
  }, [product]);

  return (
    <>
      <HomeContainer categoryList={cate} />
    </>
  );
}
