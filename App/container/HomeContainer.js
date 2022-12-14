import Layout from "./Layout";
import { Landing } from "../components";

const HomeContainer = ({ categoryList }) => {
  return (
    <Layout PageName={`DeepNetSoft - Categories`}>
      <Landing categoryList={categoryList} />
    </Layout>
  );
};

export default HomeContainer;
