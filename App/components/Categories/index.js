import { useContext } from "react";
import Link from "next/link";
import { Box, Paper, Typography } from "@mui/material";

//Components
import { CategoryList, ProductTable } from "../../common";
import AppContext from "../../lib/AppContext";

const Categories = ({ categoryList }) => {
  const { appContext, setAppContext } = useContext(AppContext);
  return (
    <Box
      display={`flex`}
      flexDirection={`column`}
      height={`100vh`}
      justifyContent={`center`}
      alignItems={`center`}
    >
      <Typography variant={`h6`} mb={2}>
        {appContext} {`(200)`}
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
                onClick={() => setAppContext(data.title)}
              >
                {data.title} ({data.count})
              </Typography>
            </Link>
          ))}
        </Paper>
      )}
      <ProductTable />
    </Box>
  );
};

export default Categories;
