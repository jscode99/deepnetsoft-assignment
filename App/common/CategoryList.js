import { Paper, Typography } from "@mui/material";
import Link from "next/link";

const CategoryList = () => {
  const data = [
    { title: "Mobiles, Computers", count: "200" },
    { title: "TV, Applications, Electronics", count: "30" },
    { title: "Mens Fashion", count: "30" },
  ];
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
      {data.map((data, index) => (
        <Link key={index} href={`/`}>
          <Typography
            variant={`body2`}
            sx={{
              cursor: "pointer",
              fontWeight: "500",
              marginBottom: "20px",
            }}
          >
            {data.title} {data.count}
          </Typography>
        </Link>
      ))}
    </Paper>
  );
};

export default CategoryList;
