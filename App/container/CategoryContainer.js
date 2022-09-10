import Layout from "./Layout";
import { Categories } from "../components";

const HomeContainer = ({ categoryList }) => {
  return (
    <Layout>
      <Categories categoryList={categoryList} />
    </Layout>
  );
};

export default HomeContainer;
