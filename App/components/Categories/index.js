import { useEffect, useState, useContext } from "react";
import Link from "next/link";
import { Box, Paper, Typography } from "@mui/material";

//Components
import { CategoryList, ProductTable } from "../../common";
import AppContext from "../../lib/AppContext";
import { CategoryName } from "../../lib/Utilis";

const Categories = ({ categoryList }) => {
  const { appContext, setAppContext } = useContext(AppContext);
  const [totalProduct, setTotalProduct] = useState(0);
  // console.log(appContext);
  useEffect(() => {
    categoryList && categoryList.length > 0
      ? setTotalProduct(() =>
          categoryList.reduce((acc, cur) => acc + Number(cur.count), 0),
        )
      : setTotalProduct(
          () =>
            appContext?.productList.length > 0 && appContext.productList.length,
        );
  }, [categoryList, appContext]);

  return (
    <Box
      display={`flex`}
      flexDirection={`column`}
      height={`100vh`}
      justifyContent={`center`}
      alignItems={`center`}
    >
      <Typography variant={`h6`} mb={2}>
        {appContext?.title} ({totalProduct})
      </Typography>
      {categoryList && categoryList.length > 0 && (
        <Paper
          elevation={3}
          sx={{
            height: "200px",
            width: "300px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: "20px",
            border: "1px solid #c9c9c9",
          }}
        >
          {categoryList.map((data, index) => (
            <Link key={index} href={`${data.slug}`} target="_blank">
              <Typography
                variant={`body2`}
                sx={{
                  cursor: "pointer",
                  fontWeight: "500",
                  marginBottom: "20px",
                }}
                onClick={() =>
                  setAppContext({
                    ...appContext,
                    title: CategoryName(data.slug),
                  })
                }
              >
                {data.title} ({data.count})
              </Typography>
            </Link>
          ))}
        </Paper>
      )}

      {appContext?.productList && <ProductTable row={appContext.productList} />}
    </Box>
  );
};

export default Categories;
