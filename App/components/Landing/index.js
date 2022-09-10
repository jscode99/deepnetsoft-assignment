import { useEffect, useState, useContext } from "react";
import Link from "next/link";
import { Box, Paper, Typography } from "@mui/material";

//Components
import { ProductTable } from "../../common";
import AppContext from "../../lib/AppContext";
import { CategoryName } from "../../lib/Utilis";

const Landing = ({ categoryList }) => {
  const { appContext, setAppContext } = useContext(AppContext);
  const [totalProduct, setTotalProduct] = useState(0);

  useEffect(() => {
    setTotalProduct(
      () =>
        categoryList &&
        categoryList.length > 0 &&
        categoryList.reduce((acc, cur) => {
          return acc + Number(cur.count);
        }, 0),
    );
  }, [categoryList]);

  return (
    <Box
      display={`flex`}
      flexDirection={`column`}
      height={`100vh`}
      justifyContent={`center`}
      alignItems={`center`}
    >
      <Typography variant={`h6`} mb={2}>
        {"Categories"} ({totalProduct})
      </Typography>
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
        {categoryList &&
          categoryList.length > 0 &&
          categoryList.map((data, index) => (
            <Link key={index} href={`category/${data.slug}`} target="_blank">
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
      {appContext?.productList && <ProductTable row={appContext.productList} />}
    </Box>
  );
};

export default Landing;
