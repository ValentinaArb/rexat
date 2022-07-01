import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import TextField from '@mui/material/TextField';

import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import {Link} from "react-router-dom";
import "../Main.css"

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function Registrarse() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
   
    return (
        <>
        <h1>Registrarse</h1>
        <div>
        <Button variant="outlined" onClick={handleClickOpen}>
            Slide in alert dialog
        </Button>
        <Dialog
            open={open}
            TransitionComponent={Transition}
            keepMounted
            onClose={handleClose}
            aria-describedby="alert-dialog-slide-description"
        >
            <DialogTitle className = "centrar">{"Registrarse"}</DialogTitle>
              <DialogContent>
                <TextField className='input'
                autoFocus
                margin="dense"
                id="name"
                label="Email Address"
                type="email"
                fullWidth
                variant="standard"
                />
                <TextField className='input'
                  name="password"
                  type="password"
                  placeholder="password"
                  label="Password"
                  fullWidth
                  variant="standard"
                />
              </DialogContent>    
              <DialogContentText>
                 Ya tengo cuenta, <a className = "" href="/InicioSesion">Iniciar Sesión</a>
              </DialogContentText>        
            <DialogActions>
              <Button onClick={handleClose}>CANCELAR</Button>
              <Button onClick={handleClose}>CONTINUAR</Button>
            </DialogActions>
        </Dialog>        
        </div>
        <Link to = "/" className = "Volver"><button>Volver</button></Link>
        </>
  );
}
export default Registrarse