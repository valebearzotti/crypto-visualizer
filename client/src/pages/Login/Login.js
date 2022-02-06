import React, { useRef, useEffect } from 'react';
import { Container, Center, CircleOne, CircleTwo, Divider, Box, Title, Input, Subtitle, Button, Link } from './Login.styled'
import { GlobalStyle } from '../Home/Home.styled';
import circleOne from '../../assets/circleone.svg'
import circleTwo from '../../assets/circletwo.svg'
import { gsap } from 'gsap';

function Login() {

    const box1 = useRef();
    const box2 = useRef();
    const box3 = useRef();

    useEffect(() => {
        gsap.from(box1.current, { delay: 0.6, opacity: 0, y:50, duration: 1})
        gsap.from(box2.current, { delay: 0.6, opacity: 0, y:-100, duration: 1})
        gsap.from(box3.current, { delay: 0.4, opacity: 0, y:-50, duration: 1})
    }, [])

    const trigger = () => {
        gsap.to(box1.current, { opacity: 1, y:-1000, duration: 2})
        gsap.to(box2.current, { opacity: 1, y:-1000, duration: 2})
        gsap.to(box3.current, { opacity: 1, y:-1000, duration: 2})

    }

    return (
        <Container>
            <GlobalStyle />
            <Center>
                <CircleOne>
                    <img src={circleOne} alt="" ref={box1}></img>
                </CircleOne>
                <CircleTwo>
                    <img src={circleTwo} alt="" ref={box2}></img>
                </CircleTwo>
                <Divider ref={box3}>
                    <Box>
                        <Title>Log in</Title>
                        <Input>
                            <label>Username</label>
                            <input></input>
                        </Input>
                        <Input>
                            <label>Password</label>
                            <input></input>
                        </Input>
                        <Subtitle>Don't have an account? <Link href="/signup">Create one.</Link></Subtitle>
                        <Button onClick={() => trigger()}>Submit</Button>
                    </Box>
                </Divider>
            </Center>
        </Container>
        
    )
}


export default Login
