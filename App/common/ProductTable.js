import { Box } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";

const ProductTable = ({ row }) => {
  const columns = [
    { field: "id", headerName: "No:", width: 70 },
    { field: "productName", headerName: "Product Name", width: 130 },
    { field: "price", headerName: "Price", width: 130 },
  ];
  return (
    <Box sx={{ marginTop: "30px", height: "250px", width: "400px" }}>
      <DataGrid
        rows={row}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </Box>
  );
};

export default ProductTable;
