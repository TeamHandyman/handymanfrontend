import "./ticketstable.scss"
import { DataGrid } from '@mui/x-data-grid';
import { userRows, userColumns } from "../../workersTableSource";

const Ticketstable = () => {

    const actionColumn = [
      { 
        field: "action", 
        headerName: "Action",
        width: 200,
        renderCell: () => {
          return (
              <div className="cellAction">
                  <div className="viewButton">View</div>
              </div>
          );
        },
      },
  ];
    
    return (
      <div className="ticketstable">
         <DataGrid
          rows={userRows}
          columns={userColumns.concat(actionColumn)}
          pageSize={7}
          rowsPerPageOptions={[7]}
          // checkboxSelection
        />
      </div>
    )
  }
  
  export default Ticketstable
  