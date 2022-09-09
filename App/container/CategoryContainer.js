import Layout from "./Layout";
import { Categories } from "../components";

const HomeContainer = ({ categoryList }) => {
  return (
    <Layout PageName={`DeepNetSoft - Categories`}>
      <Categories categoryList={categoryList} />
    </Layout>
  );
};

export default HomeContainer;
