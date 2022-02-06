import React, { useState, useEffect } from 'react';
import axios from 'axios'
import styled from 'styled-components'
import '../styles.css'
import LineChart from './LineChart';

function Currency({coin}) {
    const [listOfValues, setListOfValues] = useState([])
    const [every, setEvery] = useState(0);

    const loadRecentData = () => {
        var end = new Date().toISOString().split('.')[0]
        const d = new Date();
        d.setHours(d.getHours() - 12)
        var start = d.toISOString().split('.')[0]
        axios.get(`https://api.exchange.coinbase.com/products/${coin}-USD/candles?start=${start}&end=${end}&granularity=300`).then((res) => {
            res.data.map((e, index)=>{
                var t = new Date(e[0] * 1000).toLocaleTimeString('en-US', {hour: '2-digit', minute: '2-digit', hour12: true});
                let obj = {
                    id: index + 1,
                    time: t,
                    lowest: e[1],
                    highest: e[2]
                }
                setListOfValues(l => [...l, obj])
            return true;
            })
        })
    }
    
    const reloadRecentData = () => {
        setListOfValues([]);
        loadRecentData();
    }

    useEffect(() => {
      loadRecentData()
    }, []);

    return (
        <Container>
            {/*<Button onClick={loadRecentData}>Load data up to 12 hours ago</Button>*/}
            <ChartContainer>
                {every!== 0 ? <LineChart dataset={listOfValues} every={every} coin={coin}></LineChart> : null}
            </ChartContainer>
            <Dashboard>
                <Option onClick={()=> setEvery(1)}>Every 5 minutes</Option>
                <Option onClick={()=> setEvery(2)}>Every 10 minutes</Option>
                <Option onClick={()=> setEvery(6)}>Every 30 minutes</Option>
                <Option onClick={reloadRecentData}>Reload data</Option>
            </Dashboard>
        </Container>
      );
}

const Container = styled.div`
    display: flex;
    flex-direction: row;
    height: 100vh;
`

const Dashboard = styled.div`
    padding: 20px;
    margin: auto;
`

const Option = styled.button`
    margin: 10px;
    padding: 10px 20px;
    background-color: #4287f5;
    color: #fff;
    border-radius: 30px;
    width: fit-content;
    border: none;
    font-size: 14px;
    cursor: pointer;
`

const ChartContainer = styled.div`
    margin-top: auto;
    margin-bottom: auto;
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

export default Currency;
