import React from "react";
import "./Sidebar.css";
import SideNav, {NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import AddIcon from '@mui/icons-material/Add';
import ImportContactsOutlinedIcon from '@mui/icons-material/ImportContactsOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import logo from "../../img/logoRXT.png"

export default function Sidebar(){
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
                            Añadir punto
                        </NavText>
                    </NavItem>
                    <NavItem eventKey="telefonos">
                        <NavIcon>
                            <ImportContactsOutlinedIcon className = "Telefonos"/>
                            <i className="Sidebar-btn-contactanos" style={{ fontSize: '1.75em' }} />
                        </NavIcon>
                        <NavText>
                            Telefonos y contactos
                        </NavText>
                    </NavItem>

                    <NavItem eventKey="Contactanos">
                        <NavIcon>
                            <PersonOutlineOutlinedIcon/>
                            <i className="Sidebar-btn" style={{ fontSize: '1.75em' }} />
                        </NavIcon>
                        <NavText>
                            Contactanos
                        </NavText>
                    </NavItem>

                    <NavItem eventKey="Preguntas">
                        <NavIcon>
                            <HelpOutlineOutlinedIcon/>
                            <i className="Sidebar-btn" style={{ fontSize: '1.75em' }} />
                        </NavIcon>
                        <NavText>
                            Preguntas frecuentes
                        </NavText>
                    </NavItem>

                    <NavItem eventKey="Volver" >
                        <NavIcon>
                            <HomeOutlinedIcon/>
                            <i className="Sidebar-btn" style={{ fontSize: '1.75em' }} />
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
                            <p className="frase-Sidebar">Reducir,</p>
                            <p className="frase-Sidebar">Reutilizar,</p>
                            <p className="frase-Sidebar">Reciclar,</p>
                            <p className="frase-Sidebar">Recuperar ,</p>
                            <p className="frase-Sidebar">Rexat.</p>
                        </NavText>
                    </NavItem>
                </SideNav.Nav>                
        </SideNav>
    </>
    );
}