import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import styled from 'styled-components';
import Header from '../components/header';


const Chat = () => {


    const [chat_activate, setChat_activate] = useState(false);

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
                <Chatting>
                    <Chatting_container></Chatting_container>
                    <Chatting_input_container >
                        <Chatting_input_container_content className='Chatting_input_container_content'></Chatting_input_container_content>
                        <Chatting_input_send_container className={chat_activate ? 'chat_activate' : ''} onMouseEnter={() => setChat_activate(true)} onMouseLeave={() => setChat_activate(false)}>
                            {!chat_activate && (<img src="/image/chat_1.png" style={{ width: "30px", height: "30px", marginTop : "2px", marginLeft : "2.8px"}}></img>)}
                            {chat_activate && (<img src="/image/chat_2.png" style={{ width: "30.5px", height: "31px", marginTop : "1px", marginLeft : "2.2px"}}></img>)}
                        </Chatting_input_send_container>
                    </Chatting_input_container>

                </Chatting>
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
const Chatting_container = styled.div`
    position : absolute;
    background : #ffffff;
    height : 380px;
    width : 650px;
`;
const Chatting_input_container = styled.div`
    position : absolute;
    // background : red;
    height : 34px;
    width : 580px;
    margin-top : 388px;
    margin-left : 8px;

    border-radius : 5px;
    border : 5px solid #8BF5FD;
`;
const Chatting_input_container_content = styled.textarea`
    position : absolute;
    background : none;
    height : 100%;
    width : 580px;

    outline : none;
    resize: none;
    border : none;

    color : #8BF5FD;

    overflow: auto;

    &.Chatting_input_container_content::-webkit-scrollbar {
        width: 3.5px;
    }
    &.Chatting_input_container_content::-webkit-scrollbar-thumb {
        background-color: #000000;
        border-radius: 10px;
        border: 1px solid transparent;
    }
    &.Chatting_input_container_content::-webkit-scrollbar-track {
        border-radius: 50px;
    }

`;
const Chatting_input_send_container = styled.div`
    position : absolute;
    background : #8BF5FD;
    height : 35px;
    width : 35px;
    border-radius : 5px;
    margin-left : 593.2px;

    &.chat_activate {
        box-shadow: 0px 0px 10px 0px #8BF5FD, 0px 0px 10px 0px #8BF5FD;
        cursor : pointer;
    }
`;



export default Chat;