import "./workerstable.scss"
import { DataGrid } from '@mui/x-data-grid';
import { userRows, userColumns } from "../../workersTableSource";
import { Link } from 'react-router-dom';


const Workerstable = () => {

  const actionColumn = [
    { 
      field: "action", 
      headerName: "Action",
      width: 200,
      renderCell: () => {
        return (
            <div className="cellAction">
                <Link to="/workers/12" className="linkStlyes">
                <div className="viewButton">View</div>
                </Link>
            </div>
        );
      },
    },
];
  
  return (
    <div className="workerstable">
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

export default Workerstable
