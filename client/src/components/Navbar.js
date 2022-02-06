import React from 'react'
import styled from 'styled-components'
import logo from '../assets/logo.svg'

function Navbar() {
    return (
        <Nav>
            <img src={logo} alt=""/>
            <Button primary={false} href="/login">Log in</Button>
            <Button primary={true} href="/signup">Sign up</Button>
        </Nav>
    )
}

const Nav = styled.div`
    display: flex;
    padding: 20px 20%;
    img{
        margin-right: auto;
    }
`

const Button = styled.a`
    margin: ${props => props.primary ? "auto 0;" : "auto 20px auto 0"};
    text-decoration: none;
    color: ${props => props.primary ? "#161623" : "#13E8AB"};
    padding: 6px 20px;
    border: 2px solid #13E8AB;
    border-radius: 30px;
    font-weight: ${props => props.primary ? "600" : "400"};
    background-color: ${props => props.primary ? "#13E8AB" : "transparent"};
`

export default Navbar