/* import React, {useState,UseEffect, useEffect} from 'react'
import { makeStyles } from '@mui/material/core/styles';
import ExpandLessIcon from '@material/icons/ExpandLess';
import { IconButton } from '@mui/material/core/IconButton';

const Scroll = (
    showBelow
) =>{
    const [show,setShow] = useState(showBelow ? false:true)

    const HandleScroll = () =>{
        if (window.pageYOffset > showBelow){
            if (!show) setShow(true)
        }
        else{
            if (show) setShow(false)
        }
    }

    useEffect(()=>{
        if(showBelow){
            window.addEventListener('scroll',HandleScroll)
            return()=> window.removeEventListener('scroll',handleScroll)
        }    
    })

    const HandleClick=()=>{
        window['scrollTo']({top:0, behavior:'smooth'})
    }
    return(
        <div>
            <IconButton onCLick={HandleClick}>
                <ExpandLessIcon/>   
            </IconButton>
        </div>
    )
}

export default Scroll */