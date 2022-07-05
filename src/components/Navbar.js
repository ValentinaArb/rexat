import React, { useRef, useEffect, useState } from 'react';
import logo from "../img/logoRXT.png"
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

      const handleClickOpen = () => {
        setOpen(true);
      };

      const handleClose = () => {
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
            <button /*variant="outlined"*/ onClick={handleClickOpen}>Ingresar</button>
        <Dialog
            open={open}
            TransitionComponent={Transition}
            keepMounted
            onClose={handleClose}
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
                 <a className = "" href="/Registrarse">Registrarme</a>
              </DialogContentText>        
            <DialogActions>
              <Button onClick={handleClose}>CANCELAR</Button>
              <Button onClick={handleClose}>CONTINUAR</Button>
            </DialogActions>
        </Dialog>      
          </li>
        </ul>
    </nav>
    );
}