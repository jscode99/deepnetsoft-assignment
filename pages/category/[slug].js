//Container
import { CategoryContainer } from "../../App/container";

 export async function getServerSideProps(context){
  const { slug } = context.params;
  const apiURL = process.env.API_ENDPOINT + `${slug}`;
  const res = await fetch(apiURL);
  const categories = await res.json();
  return {
    props: { categories }, // will be passed to the page component as props
  };
}

export default function Category({ categories }) {
  return (
    <>
      <CategoryContainer categoryList={categories} />
    </>
  );
}
