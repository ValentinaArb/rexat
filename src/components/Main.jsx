import * as React from 'react';
import "./Main.css"
import basura from "../img/basura.png"
import logo from "../img/logoRXT.png"
import planeta from "../img/planeta.png"
import {Link} from "react-router-dom";
import Scroll from "../components/Scroll"
import separador from "../img/separador.png"
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

function Main() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      {/* <Scroll showBelow={250}/> */}
      <div className="Navbar">  
        <img className= "logo" src= {logo} alt=" "/>
        <a className = "Seccion" href="#Rexat">Rexat</a>
    {/* <a className = "Seccion" href="#Parte2">Concientizate</a> */}        
        <a className = "Seccion" href="#Conocenos">Conocenos</a>
        <a className = "Seccion" href="#Parte4">Mapa</a>
        <button /* variant="outlined" */ onClick={handleClickOpen}>
            Ingresar
        </button>
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
      </div>
           
<div className='Inicio'>  
  <div id= "Parte1">
    <div className="Text">
     <div className = "Hola"> Hola, <br></br> Somos <b><span style={{ color: "#ff951c" }}>Rexat</span> </b></div>
      <Link to = "/mapview" className = "IralMapa"> <button className = "IrMapa">Ir al mapa</button> </Link>
    </div>    
      <img className='basura' src= {basura} alt=" "/>
  </div>

{/*    <div className='centrar'><img className='separador' src= {separador} alt=" "/></div>
 */}
  <div id='Parte2'> 
    <h2 className='frase'>Cuidemos nuestro planeta</h2>
    <h3 className='frase'>Actualmente hay mucha basura en las costas de todo el mundo </h3>
    <p className='frase'>Y hay que trabajar juntos para resolverlo, </p>
    <p className='frase'>para tener un futuro mejor.</p>      
  </div>

  <div id="Parte3">
  <div className='centrar'><img className='separador' src= {separador} alt=" "/></div>

  <h1 id="Rexat"> ¿Qué es Rexat?</h1>
    <div className="Grid1">
        <div className= "QuienesSomos"> 
          <h1> ¿Quiénes somos?</h1>
          <p>Somos un grupo de estudiantes de 5to año en ORT Argentina. Creamos Rexat, una plataforma que mediante imagenes satelitales permite reconocer grandes acumulaciones de basura marina en las costas , con el fin de ayudar al medio ambiente. </p>
        </div>
        <div className ="Conocenosimg"> IMAGEN </div>      
        <div className ="Conocenosimg"> IMAGEN </div>            
        <div className= "Finalidad">
          <h1>Nuestra Finalidad</h1>
          <p>Buscamos concientizar y crear una plataforma de libre acceso para que cualquier persona que quiera participar en la limpieza de las costas: una gran necesidad ambiental de hoy en día.</p>
        </div>
        <div className= "TecnoAplicada"> 
          <h1>Tecnología aplicada</h1>
          <p>Trabajamos con imagenes satelitales y creando un programa de machine lerning que nos permite localizar los puntos más grandes de basura en las costas en tiempo actual.</p>
        </div>  
      <div className ="Conocenosimg"> IMAGEN </div>  
    </div>    
    <h1 id="Conocenos"> Contactanos </h1>
    <div className = "Grid2">
      <div className = "Joaco">
        <h2 className='Nombre'> Joaquín<br></br>Marcel </h2>
        <div className = "Info"> 
          <button>L</button>
          <p> Back-End</p>
{/*           <button> IG </button>
 */}        </div>
      </div>

      <div className = "Tina">
        <h2 className='Nombre'> Valentina<br></br>Arbarello </h2>
        <div className = "Info"> 
          <button>L</button>
          <p> Full-Stack </p>
{/*           <button> IG </button>
 */}        </div>
      </div>

      <div className = "Iara">
        <h2 className='Nombre'> Iara<br></br>Srur </h2>
        <div className = "Info"> 
          <button>L</button>
          <p> Full-Stack </p>
{/*           <button> IG </button>
 */}        </div>
      </div>

      <div className = "Uma">
        <h2 className='Nombre'> Uma<br></br>Grün </h2>
        <div className = "Info"> 
          <button>L</button>
          <p>  UX/UI Designer  </p>
{/*           <button> IG </button>
 */}        </div>
      </div>
    </div>
  </div>
  <div id="Parte4">
  <div className='centrar'><img className='separador' src= {separador} alt=" "/></div>
    <h1 className='titulo'>Acceder al mapa</h1>
    <div className='centrar'><Link to = "/mapview" className = "IralMapa"> <img className= "planeta" src= {planeta} alt=" "/></Link> </div>
  </div>
   
  <footer className='footer'>Rexat - 2022</footer>

</div>
</>    
  );
}
export default Main