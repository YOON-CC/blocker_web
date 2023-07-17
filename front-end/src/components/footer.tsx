import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import styled from 'styled-components';


const Chat = () => {

    const [chat_activate, setChat_activate] = useState(false);


    return (
        <div>
            <Link to="/chat">
                <Container className={chat_activate ? 'chat_activate' : ''} onMouseEnter={() => setChat_activate(true)} onMouseLeave={() => setChat_activate(false)}>
                    {!chat_activate && (<img src="/image/chat_1.png" style={{ width: "50px", height: "50px", marginTop : "4px", marginLeft : "5px"}}></img>)}
                    {chat_activate && (<img src="/image/chat_2.png" style={{ width: "51px", height: "52px", marginTop : "1.5px", marginLeft : "3.74px"}}></img>)}
                </Container>
            </Link>
        </div>
    );
};

const Container = styled.div`
    position : absolute;
    background : #8BF5FD;
    height: 60px;
    width: 60px;
    
    margin-top : 100px;
    bottom : 1%;
    right : 1%;
    margin-bottom : -15px;
    margin-right : -20px;
    transform: translate(-50%, -50%);

    display : flex;
    justify-content : space-between;

    border-radius : 10px;

    cursor : pointer;
    z-index: 0;

    &.chat_activate {
        box-shadow: 0px 0px 20px 0px #8BF5FD, 0px 0px 20px 0px #8BF5FD;
    }
    
`;

export default Chat;