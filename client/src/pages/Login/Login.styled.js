import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    background: #161623;
`

export const CircleOne = styled.div`
    img{
        position: absolute;
        top: 50%;
        left: 60%;
    }
    @media (max-width: 1048px){
        img{
            width: 200px;
            left: 70%;
            top: 60%;
        }
    }
    @media (max-width: 768px){
        img{
            left: auto;
            right: 10px;
            width: 150px;
        }
    }
`

export const CircleTwo = styled.div`
    img{
        position: absolute;
        top: 10%;
        left: 12%;
    }
    @media (max-width: 1048px){
        img{
            width: 350px;
        }
    }
    @media (max-width: 768px){
        img{
            top: 20px;
            left: -50px;
            width: 250px;
        }
    }
`

export const Center = styled.div`
    width: 576px;
    height: 100vh;
    margin-top: auto;
    margin-bottom: auto;
    margin-left: auto;
    margin-right: auto;
    display: flex;
    flex-direction: row;
    @media (max-width: 768px){
        width: 450px;
    }
`

export const Divider = styled.div`
    height: 50%;
    width: 100%;
    display: flex;
    flex-direction: row;
    margin-top: auto;
    margin-bottom: auto;
    background: rgba( 255, 255, 255, 0.1 );
    box-shadow: 20px 20px 50px 0 rgba( 0, 0, 0, 0.5 );
    backdrop-filter: blur( 5px );
    -webkit-backdrop-filter: blur( 5px );
    border: 1px solid rgba( 255, 255, 255, 0.5 );    
    border-radius: 30px;
`

export const Box = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: auto;
    margin-right: auto;
    width: 300px;
    align-items: center;
`

export const Input = styled.div`
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    label{
        color: #fff;
        font-weight: 600;
        font-size: 20px;
        opacity: 0.6;
        margin-bottom: 1em;
    }
    input{
        width: 300px;
        color: #fff;
        background: rgba( 255, 255, 255, 0.2 );
        padding: 12px 20px;
        outline: none;
        border-radius: 10px;
        border: 1px solid rgba( 255, 255, 255, 0.2 );  
    }
`

export const Button = styled.button`
    margin-left: auto;
    margin-top: 30px;
    padding: 8px 26px;
    outline: none;
    color: #161623;
    padding: 6px 20px;
    border: 2px solid #13E8AB;
    border-radius: 30px;
    font-weight: 600;
    background-color: #13E8AB;
    cursor: pointer;
`

export const Title = styled.div`
    font-size: 32px;
    font-weight: 500;
    color: #fff;
    margin-top: 50px;
    margin-right: auto;
    margin-bottom: 30px;
`

export const Subtitle = styled.div`
    font-size: 14px;
    color: #fff;
    opacity: 0.6;
    margin-right: auto;
    margin-top: 20px;
    span {
        text-decoration: underline;
        cursor: pointer;
    }
`

export const Link = styled.a`
    text-decoration: none;
    cursor: pointer;
    color: #13E8AB;

`