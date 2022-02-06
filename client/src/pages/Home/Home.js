import React, { useState, useEffect } from 'react';
import axios from 'axios'
import styled from 'styled-components'
import '../../styles.css'
import { GlobalStyle, Container, Display } from './Home.styled'
import Navbar from '../../components/Navbar';

function Home() {
    const currencies = [
        {
            name:"Bitcoin",
            short: "BTC"
        },
        {
            name:"Ethereum",
            short: "ETH"
        },
        {
            name:"Cardano",
            short: "ADA"
        }
    ]

    return(
        <div>
            <GlobalStyle/>
            <Navbar />
            <Container>
                <Display>

                </Display>
            </Container>
        </div>
    )
    
}

export default Home;
