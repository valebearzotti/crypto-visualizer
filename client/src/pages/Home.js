import React, { useState, useEffect } from 'react';
import axios from 'axios'
import styled from 'styled-components'
import '../styles.css'

function Home() {

    const [data, setData] = useState([])
    const [listOfValues, setListOfValues] = useState([])
    const [display, setDisplay] = useState(false)

    useEffect(() => {
        axios.get('https://api.exchange.coinbase.com/products/ETH-USD/candles?start=2022-01-24T06:00:00&end=2022-01-24T12:00:00&granularity=3600').then((res) => {
            setData(res.data)
            res.data.map((e, index)=>{
                let obj = {
                    id: index + 1,
                    time: e[0],
                    lowest: e[1],
                    highest: e[2]
                }
                setListOfValues(l => [...l, obj])
            })
        })
    }, []);


    return (
        <Container>
            <Button onClick={() => setDisplay(true)}>Load data</Button>
            {display ? listOfValues.map(e =>
                <h1>{e.highest}</h1>
            ) : null}
        </Container>
      );
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    h1{
        margin-left: auto;
        margin-right: auto;
    }
`

const Button = styled.button`
    margin-left: auto;
    margin-right: auto;
    padding: 1em 3em;
    background-color: #4287f5;
    text-transform: uppercase;
    color: #fff;
    font-weight: bold;
    border-radius: 30px;
    width: fit-content;
    border: none;
    font-size: 16px;
    cursor: pointer;
`

export default Home;
