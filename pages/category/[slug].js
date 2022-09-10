//Container
import { CategoryContainer } from "../../App/container";
//Services
import { FetchCall } from "../../app/lib/FetchService";

export async function getServerSideProps(context) {
  const { slug } = context.params;
  const categories = await FetchCall(slug);
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
