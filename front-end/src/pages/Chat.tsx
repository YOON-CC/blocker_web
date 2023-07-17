import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import styled from 'styled-components';
import Header from '../components/header';


const Chat = () => {


    return (
        <div>
            <Header />
            <Container>
                <Phone>
                    <img src="./image/button.png" style={{ width: "30px", height: "30px", marginTop:"15px", marginLeft : "135px"}}></img>
                    <Chat_container>
                        <Chat_list></Chat_list>
                        <Chat_list></Chat_list>
                        <Chat_list></Chat_list>
                        <Chat_list></Chat_list>
                        <Chat_list></Chat_list>
                    </Chat_container>
                </Phone>
                <Chatting></Chatting>
            </Container>
        </div>
    );
};

const Container = styled.div`
    position : absolute;
    // background : red;
    height: 450px;
    width: 1000px;
    
    top : 50%;
    left : 50%;
    transform: translate(-50%, -50%); 

    display : flex;
    justify-content : space-between;
`;
const Phone = styled.div`
    position : absolute;
    height: 440px;
    width: 300px;


    border-radius : 10px;
    border : 5px solid #8BF5FD;
`;
const Chat_container = styled.div`
    position : absolute;
    // background : #8BF5FD;
    height: 400px;
    width: 100%;
    // margin-top : 40px;
`;
const Chat_list = styled.div`
    position : relative;
    background : #8BF5FD;
    height: 50px;
    width: 280px;
    border-radius : 5px;
    
    display : flex;
    justify-content : space-between;
    margin-top : 10px;
    margin-left : 10px;
`;
const Chatting = styled.div`
    position : absolute;
    height : 440px;
    width : 650px;
    
    margin-left : 340px;

    border-radius : 10px;
    border : 5px solid #8BF5FD;
`;


export default Chat;