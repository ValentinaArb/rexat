import React from 'react'
import styled from 'styled-components'

function Navbar() {
  return (
    <>
        <NavContainer>
           <div>
            <a href="/">Rexat</a>
            <a href="/">Concientizate</a>
            <a href="/">Conocenos</a>
            <a href="/">Mapa</a>
           </div>           
        </NavContainer>
    </>
  )
}

export default Navbar

const NavContainer = styled.nav`
  padding: .4rem;
  background-color: #23395B;
  display: flex;
  align-items: center;
  justify-content: space-between;
  a {
    color: white;
    text-decoration: none;
    margin-right: 1rem;
  }
`