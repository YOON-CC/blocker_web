import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import styled from 'styled-components';
import Header from '../components/header';


const Board = () => {


    return (
        <div>
            <Header />
            <Container>
                <Container_header>
                    <Container_header_search></Container_header_search>
                    <Container_header_search_btn>
                        <img src="./image/button.png" style={{ width: "100%", height: "100%"}}></img>
                    </Container_header_search_btn>
                    <Link to="/postwrite">
                        <Container_header_postwrite>+</Container_header_postwrite>
                    </Link>
                    <Container_header_prev>PREV</Container_header_prev>
                    <Container_header_next>NEXT</Container_header_next>
                    
                </Container_header>
                <Container_body>
                    <Continer_body_List></Continer_body_List>
                    <Continer_body_List></Continer_body_List>
                    <Continer_body_List></Continer_body_List>
                    <Continer_body_List></Continer_body_List>
                </Container_body>
            </Container>
        </div>
    );
};

const Container = styled.div`
    position : absolute;
    // background : red;
    height: 600px;
    width: 100%;
    margin-top : 90px;
`;
const Container_header = styled.div`
    position : absolute;
    // background : red;
    height: 50px;
    width: 900px;
    
    left : 50%;
    transform: translate(-50%); 
`;
const Container_header_search = styled.input`
    position : absolute;
    background : none;
    height: 20px;
    width: 415px;
    padding : 10px;

    outline : none;
    border : none;
    border-radius : 12px;
    border : 5px solid #8BF5FD;

    font-size : 17px;
    font-weight : bold;
    color : #8BF5FD;
`;
const Container_header_search_btn = styled.div`
    position : absolute;
    background: linear-gradient(to right, #8BF5FD, #B0F4F7); 
    height: 30px;
    width: 30px;
    border-radius : 10px;
    cursor : pointer;

    margin-top: 10px;
    margin-left : 405px;
`;
const Container_header_postwrite = styled.button`
    position : absolute;
    background: linear-gradient(to right, #8BF5FD, #B0F4F7); 
    box-shadow: 0px 0px 10px 0px #8BF5FD;
    height: 100%;
    width: 55px;
    border-radius : 10px;
    cursor : pointer;
    margin-left : 455px;
    border : none;

    line-height: 1.7;

    font-size : 30px;
    font-weight: bold;

`;
const Container_header_prev = styled.button`
    position : absolute;
    background: linear-gradient(to right, #8BF5FD, #B0F4F7); 
    box-shadow: 0px 0px 10px 0px #8BF5FD;
    height: 100%;
    width: 185px;
    border-radius : 10px;
    cursor : pointer;
    margin-left : 520px;
    border : none;

    line-height: 2.8;

    font-size : 18px;
    font-weight: bold;
`;
const Container_header_next = styled.button`
    position : absolute;
    background : #8BF5FD;
    background: linear-gradient(to right, #8BF5FD, #B0F4F7); 
    box-shadow: 0px 0px 10px 0px #8BF5FD;
    height: 100%;
    width: 185px;
    border-radius : 10px;
    cursor : pointer;
    margin-left : 715px;
    border : none;

    line-height: 2.8;

    font-size : 18px;
    font-weight: bold
`;
const Container_body = styled.div`
    position : absolute;
    height: 540px;
    width: 920px;
    
    left : 50%;
    transform: translate(-50%); 
    margin-top: 50px;

    display: flex;
    flex-wrap: wrap;
`;
const Continer_body_List = styled.div`
    position : relative;
    background: linear-gradient(to right, #8BF5FD, #B0F4F7);    
    box-shadow: 0px 0px 15px 0px #8BF5FD;

    height: 260px;
    width: 445px;
    
    margin-top : 10px;
    margin-left : 10px;

    border-radius : 10px;

    cursor: pointer;
`;


export default Board;