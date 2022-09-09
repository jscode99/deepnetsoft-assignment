import { HomeContainer } from "../App/container";

export default function Home({ cate }) {
  console.log(cate);
  return (
    <>
      <HomeContainer />
    </>
  );
}

export async function getStaticProps(context) {
  const res = await fetch(process.env.BASE_URL + `/api`);
  const cate = await res.json();
  return {
    props: { cate }, // will be passed to the page component as props
  };
}
