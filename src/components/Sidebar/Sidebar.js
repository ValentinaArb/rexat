import React from "react";
import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import AddIcon from '@mui/icons-material/Add';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import {Link} from "react-router-dom";
import Main from "../Main/Main"

export default function Sidebar(){  
    return(

<SideNav>
    <SideNav.Toggle />
        <SideNav.Nav>
            <NavItem eventKey="volver">              
                <NavIcon>     
                    <Link to = "/">                                        
                        <HomeOutlinedIcon className = "BtnMapa"/>
                        <i className="Sidebar-btn-volver" style={{ fontSize: '1.75em' }} />                    
                    </Link> 
                </NavIcon>               
                <NavText>
                    Volver
                </NavText>
            </NavItem>            
        </SideNav.Nav>
    <SideNav.Nav>        
        <NavItem eventKey="contactanos ">
            <NavIcon>                   
                <HomeOutlinedIcon className = "BtnMapa"/>
                <i className="Sidebar-btn-contactanos" style={{ fontSize: '1.75em' }} />              
            </NavIcon>
            <NavText>
                Contactanos
            </NavText>
        </NavItem>            
    </SideNav.Nav>
</SideNav>
    );
}