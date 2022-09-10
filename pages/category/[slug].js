import { useEffect, useContext } from "react";
//Container
import { CategoryContainer } from "../../App/container";
//Services
import { FetchCall } from "../../App/lib/FetchService";
import AppContext from "../../App/lib/AppContext";

export async function getServerSideProps(context) {
  const { slug } = context.params;
  const categories = await FetchCall(slug);
  const product = await FetchCall("product");
  return {
    props: { categories, product }, // will be passed to the page component as props
  };
}

export default function Category({ categories, product }) {
  const { appContext, setAppContext } = useContext(AppContext);
  useEffect(() => {
    setAppContext({ ...appContext, productList: product });
  }, [product]);
  return (
    <>
      <CategoryContainer categoryList={categories} />
    </>
  );
}
