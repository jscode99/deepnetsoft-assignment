//Container
import { HomeContainer } from "../App/container";
//Services
import { FetchCall } from "../App/lib/FetchService";

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
