import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export default function FormDialog() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button style={{color: "#1c1c1c", border:"1px solid #1c1c1c", marginTop:"15px", marginLeft: "20px"}} variant="outlined" onClick={handleClickOpen}>
        Add New Job
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>New Job </DialogTitle>
        <DialogContent>
          <DialogContentText>
            Job Role :            
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label=""
            type="email"
            fullWidth
            variant="standard"
          />
        </DialogContent>

        <DialogContent>
          <DialogContentText>
             Job Category : 
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label=""
            type="email"
            fullWidth
            variant="standard"
          />
        </DialogContent>

        <DialogContent>
          <DialogContentText>
            Job Description : 
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label=""
            type="email"
            fullWidth
            variant="standard"
          />
        </DialogContent>

        <DialogActions>
          <Button style={{color: "red", border:"1px solid red"}} onClick={handleClose}>Cancel</Button>
          <Button style={{color: "#1c1c1c", border:"1px solid #1c1c1c"}} onClick={handleClose}>Confirm</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
