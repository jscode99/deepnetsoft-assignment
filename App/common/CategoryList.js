import { useRouter } from "next/router";
import { Paper, Typography } from "@mui/material";
import Link from "next/link";

import AppContext from "../services/AppContext";

const CategoryList = ({ categoryList }) => {
  const router = useRouter();
  const { slug } = router.query;
  return (
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
          <Link
            key={index}
            href={slug ? `subcategory/${data.slug}` : `/${data.slug}`}
          >
            <Typography
              variant={`body2`}
              sx={{
                cursor: "pointer",
                fontWeight: "500",
                marginBottom: "20px",
              }}
            >
              {data.title} ({data.count})
            </Typography>
          </Link>
        ))}
    </Paper>
  );
};

export default CategoryList;
