import React from "react";
import "./Sidebar.css";
import SideNav, {NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import AddIcon from '@mui/icons-material/Add';
import ImportContactsOutlinedIcon from '@mui/icons-material/ImportContactsOutlined';
/* import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined'; */
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import logo from "../../img/logoRXT.png"
import {Link} from "react-router-dom";
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import TextField from '@mui/material/TextField';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import DraggableMark  from "../Pruebas/draggable_mark";

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });

export default function Navbar(){
    const [openInicio, setOpenInicio] = React.useState(false);
  
        const handleClickOpenInicio = () => {
          setOpenInicio(true);
        };
  
        const handleCloseInicio = () => {
          setOpenInicio(false);
        };
    const [openTelefonos, setOpenTelefonos] = React.useState(false);
        const handleClickOpenTelefonos = () => {
            setOpenTelefonos(true);
          };
    
          const handleCloseTelefonos = () => {
            setOpenTelefonos(false);
          };
    
    const [openPreguntas, setOpenPreguntas] = React.useState(false);
        const handleClickOpenPreguntas = () => {
            setOpenPreguntas(true);
          };
    
          const handleClosePreguntas = () => {
            setOpenPreguntas(false);
          };

    const [openDraggableMark, setOpenDraggableMark] = React.useState(false);
          const handleClickOpenDraggableMark = () => {
              setOpenDraggableMark(true);
            };
      
            const handleCloseDraggableMark = () => {
              setOpenDraggableMark(false);
            };

          
    return(
        <>
        <SideNav id="Sidebar">
            <SideNav.Toggle/>
                <SideNav.Nav>
                    <NavItem eventKey="añadir-punto">
                        <NavIcon>
                            <AddIcon/>
                            <i className="Sidebar-btn-contactanos" style={{ fontSize: '1.75em' }} />
                        </NavIcon>
                        <NavText>
                        <p onClick={handleClickOpenInicio}>Ingresar</p>
                            <Dialog
                                open={openInicio}
                                TransitionComponent={Transition}
                                keepMounted
                                onClose={handleCloseInicio}
                                aria-describedby="alert-dialog-slide-description"
                            >
                                <DialogTitle className = "Titulo">{"INICIAR SESIÓN"}</DialogTitle>
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
                                <Button onClick={handleCloseInicio}>CANCELAR</Button>
                                <Button onClick={handleCloseInicio}>CONTINUAR</Button>
                                </DialogActions>
                            </Dialog>      
                        </NavText>
                    </NavItem>
                    <NavItem eventKey="telefonos">
                        <NavIcon>
                            <ImportContactsOutlinedIcon/>
                            <i className="Sidebar-btn-contactanos" style={{ fontSize: '1.75em' }} />
                        </NavIcon>
                        <NavText>
                        <p onClick={handleClickOpenTelefonos}> Telefonos y contactos</p>
                            <Dialog
                                open={openTelefonos}
                                TransitionComponent={Transition}
                                keepMounted
                                onClose={handleCloseTelefonos}
                                aria-describedby="alert-dialog-slide-description"
                            >
                                <DialogTitle className = "Titulo">{"Telefonos y contactos"}</DialogTitle>
                                <DialogContent>
                                    <DialogContentText id="alert-dialog-description">
                                        <p className="Contacto"> Municipo de San Isidro: </p>
                                        <p className="Contacto"> Gobierno de la ciudad de Bs As: </p>
                                        <p className="Contacto"> AMBA: </p>
                                    </DialogContentText>
                                </DialogContent>     
                                <DialogActions>
                                <Button onClick={handleCloseTelefonos}>Ok</Button>
                                </DialogActions>
                            </Dialog>    
                        </NavText>
                    </NavItem>

                    <NavItem eventKey="Preguntas">
                        <NavIcon>
                            <HelpOutlineOutlinedIcon/>
                            <i className="Sidebar-btn" style={{ fontSize: '1.75em' }} />
                        </NavIcon>
                        <NavText>
                        <p onClick={handleClickOpenPreguntas}> Preguntas frecuentes</p>
                            <Dialog
                                open={openPreguntas}
                                TransitionComponent={Transition}
                                keepMounted
                                onClose={handleClosePreguntas}
                                aria-describedby="alert-dialog-slide-description"
                            >
                                <DialogTitle className = "Titulo">{"Preguntas frecuentes sobre el funcionamiento del mapa:"}</DialogTitle>
                                <DialogContent>
                                    <DialogContentText id="alert-dialog-description">
                                        <h4 className="Titulo-pregunta"> ¿Cómo puedo contribuir a la limpieza de las costas? </h4>
                                        <p className="Respuesta"> Hay que tener concincia de lo que consumimos y como lo consumimos. También es importante no dejar residuos en el piso ni en un lugar donde se puedan volar. </p>
                                        <h4 className="Titulo-pregunta"> ¿Cómo se utiliza el mapa? </h4>
                                        <p className="Respuesta"> El uso del mapa es simple. Si presionas un punto, vas a poder ver su localizacion. En la barra de herramientas podrás ingresar un punto, encontrar telefonos útiles o volver al inicio.
                                        Para cualquier otra cualquier consulta: Rexat.proyecto@gmail.com </p>
                                        <h4 className="Titulo-pregunta"> Recomendaciones a la hora de ir a limpiar costas</h4>
                                        <p className="Respuesta"> Recomendamos usar guantes de cocina, botas y ropa cómoda que se pueda ensuciar. Además, es importante llevar 2 bolsas: 1 para separar reciclables y la otra para basura.
                                        <br></br>Para más imfomación respecto a la separación de reciclables y basura: 
                                        <a target = "_blank" rel= "noreferrer" href="https://www.buenosaires.gob.ar/gobierno/basura-vs-reciclable" > https://www.buenosaires.gob.ar/gobierno/basura-vs-reciclable</a> </p>
                                    </DialogContentText>
                                </DialogContent>     
                                <DialogActions>
                                <Button onClick={handleClosePreguntas}>Ok</Button>
                                </DialogActions>
                            </Dialog>   
                        </NavText>
                    </NavItem>

                     <NavItem eventKey="Volver">
                    
                        <NavIcon>
                            <Link to = "/">
                                <HomeOutlinedIcon/>
                                <i className="Sidebar-btn-volver" style={{ fontSize: '1.75em' }} />
                            </Link>
                       
                        </NavIcon>
                        <NavText>
                            Volver
                        </NavText>                        
                    </NavItem>
                                          
                    <NavItem className="logo-Sidebar">
                        <NavIcon>
                            <img className="logo" src= {logo} alt=" "></img>
                        </NavIcon>
                        <NavText>
                            Rexat.proyecto@gmail.com
                        </NavText>
                    </NavItem>

                    <NavItem className="logo-Sidebar">
                        <NavText>
                        <p onClick={handleClickOpenDraggableMark}> Draggable mark</p>

                            <Dialog
                                fullScreen
                                open={openDraggableMark}
                                onClose={handleCloseDraggableMark}
                                TransitionComponent={Transition}
                            >
                                <AppBar sx={{ position: 'relative' }}>
                                <Toolbar>
                                    <IconButton
                                    edge="start"
                                    color="inherit"
                                    onClick={handleCloseDraggableMark}
                                    aria-label="close"
                                    >
                                    <CloseIcon />
                                    </IconButton>
                                    <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
                                    Agregar punto
                                    </Typography>
                                    <Button autoFocus color="inherit" onClick={handleCloseDraggableMark}>
                                    Agregar
                                    </Button>
                                </Toolbar>
                                </AppBar>

                                <h1>Hola</h1>
                                <DraggableMark/>

                            </Dialog>
                        </NavText>
                    </NavItem>
       
                </SideNav.Nav>   
                             
        </SideNav>
    </>
    );
}