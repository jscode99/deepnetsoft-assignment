import Head from "next/head";
import React from "react";

const Layout = ({ children, PageName }) => {
  return (
    <>
      <Head>
        <title>{PageName}</title>
      </Head>
      {children}
    </>
  );
};

export default Layout;
