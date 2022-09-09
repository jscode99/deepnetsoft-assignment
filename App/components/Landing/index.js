import { Box, Typography } from "@mui/material";

//Components
import { CategoryList, ProductTable } from "../../common";

const Landing = ({ categoryList }) => {
  return (
    <Box
      display={`flex`}
      flexDirection={`column`}
      height={`100vh`}
      justifyContent={`center`}
      alignItems={`center`}
    >
      <Typography variant={`h6`} mb={2}>
        {`Categories`} {`(200)`}
      </Typography>
      <CategoryList categoryList={categoryList} />
      <ProductTable />
    </Box>
  );
};

export default Landing;
