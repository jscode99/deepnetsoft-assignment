import { useContext } from "react";
import Head from "next/head";

import AppContext from "../../lib/AppContext";

const Layout = ({ children, PageName }) => {
  const { appContext } = useContext(AppContext);
  return (
    <>
      <Head>
        <title>{`DeepNetSoft - ${
          appContext.title ? appContext.title : "Categories"
        }`}</title>
      </Head>
      {children}
    </>
  );
};

export default Layout;
