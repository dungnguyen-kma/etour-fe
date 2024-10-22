import { DataGrid, GridColDef } from "@mui/x-data-grid";

export default function Ranking() {
  const createColumn = (
    field: string,
    headerName: string,
    align: "left" | "right" | "center",
    maxWidth?: number
  ): GridColDef => ({
    field,
    headerAlign: align,
    align,
    flex: 1,
    maxWidth,
    type:
      field === "rank" || field === "win" || field === "lose"
        ? "number"
        : "string",
    disableColumnMenu: true,
    sortable: false,
    renderHeader: () => (
      <span className="text-white font-bold">{headerName}</span>
    ),
    renderCell: (params) => (
      <span className="text-white font-bold">{params.value}</span>
    ),
  });
  const columns: GridColDef[] = [
    createColumn("rank", "Rank", "left"),
    createColumn("participantName", "Participant Name", "center"),
    createColumn("user", "User", "center"),
    createColumn("win", "Win", "center"),
    createColumn("lose", "Lose", "center"),
  ];

  const rows = [
    { id: 1, rank: 1, participantName: "A", user: "A", Win: 0, Lose: 0 },
    { id: 2, rank: 1, participantName: "B", user: "B", Win: 0, Lose: 0 },
    { id: 3, rank: 1, participantName: "C", user: "C", Win: 0, Lose: 0 },
    { id: 4, rank: 1, participantName: "D", user: "D", Win: 0, Lose: 0 },
    { id: 5, rank: 1, participantName: "E", user: "E", Win: 0, Lose: 0 },
    { id: 6, rank: 1, participantName: "F", user: "F", Win: 0, Lose: 0 },
  ];
  return (
    <div className="max-h-screen mt-6">
      <DataGrid
        columns={columns}
        rows={rows}
        getRowId={(row) => row.id}
        hideFooter
        disableColumnResize
        sx={{
          "& .MuiDataGrid-cell": {
            bgcolor: "#555",
            border: "none",
          },
          "& .MuiDataGrid-row:nth-of-type(even)": {
            "& .MuiDataGrid-cell": {
              bgcolor: "#4d4d4d",
            },
          },
          "& .MuiDataGrid-columnHeader": {
            bgcolor: "#2e2e2e",
          },
          border: "none",
        }}
      />
    </div>
  );
}
