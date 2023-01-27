import "./App.scss";
import { DataGrid } from "@mui/x-data-grid";

function App() {
  const data = [
    { id: 0, Index: "A1", Value: 41 },
    { id: 1, Index: "A2", Value: 18 },
    { id: 2, Index: "A3", Value: 21 },
    { id: 3, Index: "A4", Value: 63 },
    { id: 4, Index: "A5", Value: 2 },
    { id: 5, Index: "A6", Value: 53 },
    { id: 6, Index: "A7", Value: 5 },
    { id: 7, Index: "A8", Value: 57 },
    { id: 8, Index: "A9", Value: 60 },
    { id: 9, Index: "A10", Value: 93 },
    { id: 10, Index: "A11", Value: 28 },
    { id: 11, Index: "A12", Value: 3 },
    { id: 12, Index: "A13", Value: 90 },
    { id: 13, Index: "A14", Value: 39 },
    { id: 14, Index: "A15", Value: 80 },
    { id: 15, Index: "A16", Value: 88 },
    { id: 16, Index: "A17", Value: 49 },
    { id: 17, Index: "A18", Value: 60 },
    { id: 18, Index: "A19", Value: 26 },
    { id: 19, Index: "A20", Value: 28 },
  ];
  const A = [
    0, 41, 18, 21, 63, 2, 53, 5, 57, 60, 93, 28, 3, 90, 39, 80, 88, 49, 60, 26,
    28,
  ];
  const category = [
    { id: 0, category: "Alpha", value: A[5] + A[20] },
    { id: 1, category: "Beta", value: A[15] / A[7] },
    { id: 2, category: "Charlie", value: A[13] * A[12] },
  ];

  const datacolumns = [
    { field: "Index", headerName: "Index #", width: 150 },
    { field: "Value", headerName: "Value", width: 150 },
  ];

  const categorycolumns = [
    { field: "category", headerName: "Category", width: 150 },
    { field: "value", headerName: "Value", width: 150 },
  ];

  return (
    <div>
      <div className="datatableData">
        <DataGrid
          rows={data}
          getRowId={(row) => row.id}
          columns={datacolumns}
          pageSize={10}
          rowsPerPageOptions={[10]}
        />
      </div>
      <div className="datatableCategory">
        <DataGrid
          rows={category}
          getRowId={(row) => row.id}
          columns={categorycolumns}
          pageSize={3}
          rowsPerPageOptions={[3]}
        />
      </div>
    </div>
  );
}

export default App;
