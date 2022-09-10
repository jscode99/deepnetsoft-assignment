//Container
import { HomeContainer } from "../App/container";
//Services
import { FetchCall } from "../app/lib/FetchApi";

export async function getServerSideProps(context) {
  const cate = await FetchCall();
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
