import React from 'react';
import logo from "../../img/logoRXT.png"
import "./Navbar.css"
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import TextField from '@mui/material/TextField';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function Navbar(){
  const [open, setOpen] = React.useState(false);

  const handleClickOpenInicio = () => {
    setOpen(true);
  };

  const handleCloseInicio = () => {
    setOpen(false);
  };

return(
  <nav className="nav">
      <a><img href="/" className= "logo" src= {logo} alt=" "></img></a>
      <ul>
        <li>
          <a className="Seccion" href="#Rexat">Rexat</a>
          <a className="Seccion" href="#Conocenos">Conocenos</a>
          <a className="Seccion" href="#titulo">Mapa</a>
          <button /* variant="outlined" */ onClick={handleClickOpenInicio}>
            Ingresar
        </button>
        <Dialog
            open={open}
            TransitionComponent={Transition}
            keepMounted
            onClose={handleCloseInicio}
            aria-describedby="alert-dialog-slide-description"
        >
          <DialogTitle className = "centrar">{"INICIAR SESIÓN"}</DialogTitle>
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
               <a className = "" onClick={handleCloseInicio}>Registrarme</a>
            </DialogContentText>        
            <DialogActions> 
              <Button onClick={handleCloseInicio}>CANCELAR</Button>
              <Button onClick={handleCloseInicio}>CONTINUAR</Button>
            </DialogActions>
        </Dialog>      

     {/*  <Dialog
          open={openRegistro}
          TransitionComponent={Transition}
          keepMounted
          onClose={handleCloseRegistro}
          aria-describedby="alert-dialog-slide-description"
      >
          <DialogTitle className = "centrar">{"REGISTRARME"}</DialogTitle>
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
            <a className = "" onClick={handleClickOpenInicio}>Registrarme</a>
            <Button onClick={handleClickOpenRegistro}>Registrarme</Button>
            
          </DialogContentText>        
          <DialogActions>
             <Button onClick={handleCloseRegistro}>CANCELAR</Button>
             <Button onClick={handleCloseRegistro}>CONTINUAR</Button>
          </DialogActions>
      </Dialog>    */}
      </li>
    </ul>
  </nav>
);
}