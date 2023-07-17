import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import styled from 'styled-components';
import Header from '../components/header';


const Postwrite = () => {


    return (
        <div>
            <Header />
            <Container>
                <Title_container>
                    <Title_container_title>Title</Title_container_title>
                    <Title_container_input></Title_container_input>
                </Title_container>
                <Upload>계약서 불러오기</Upload>
                <Content_container>
                    <Content_container_title>Content</Content_container_title>
                    <Content_container_input></Content_container_input>
                </Content_container>
                <Post_btn>POST</Post_btn>
            </Container>
        </div>
    );
};
const Container = styled.div`
    position : absolute;
    box-shadow: 0px 0px 25px 0px #8BF5FD;
    height: 550px;
    width: 600px;
    margin-top : 100px;

    left : 50%;
    transform: translate(-50%); 

    border-radius : 15px;
    border : 5px solid #8BF5FD;
    
`;
const Title_container = styled.div`
    position : absolute;
    // background : red;
    height: 60px;
    width: 550px;
    margin-left : 25px;
    margin-top : 20px;
`;
const Title_container_title = styled.div`
    position : absolute;
    // background : red;
    height: 60px;
    width: 600px;

    font-size : 15px;
    font-weight : bold;
    color : #8BF5FD;
`;
const Title_container_input = styled.input`
    position : absolute;
    background : none;
    height: 30px;
    width: 545px;
    outline : none;

    font-size : 15px;
    font-weight : bold;
    color : #8BF5FD;

    margin-top:20px;
    border: none;
    border-bottom: 3px solid #8BF5FD;
`;
const Upload = styled.div`
    position : absolute;
    background: linear-gradient(to right, #8BF5FD, #B0F4F7);
    height: 35px;
    width: 550px;
    border-radius : 5px;

    margin-left : 25px;
    margin-top : 90px;

    display : flex;
    justify-content : center;
    align-items : center;

    font-size : 15px;
    font-weight : bold;
    
    cursor : pointer;
`;
const Content_container = styled.div`
    position : absolute;
    // background : red;
    height: 340px;
    width: 550px;
    margin-left : 25px;
    margin-top : 145px;
`;
const Content_container_title = styled.div`
    position : absolute;
    // background : red;
    height: 60px;
    width: 600px;

    font-size : 15px;
    font-weight : bold;
    color : #8BF5FD;
`;
const Content_container_input = styled.textarea`
    position : absolute;
    background : none;
    height: 290px;
    width: 525px;
    outline : none;
    resize: none;

    font-size : 15px;
    font-weight : bold;
    color : #8BF5FD;

    margin-top:25px;
    padding : 10px;
    border: 3px solid #8BF5FD;
    border-radius : 5px;
`;
const Post_btn = styled.button`
    position : absolute;
    background: #8BF5FD;
    height: 35px;
    width: 605px;

    outline : none;
    border : none;
    border-radius : 0px 0px 10px 10px;

    margin-top : 515px;
    margin-left : -2.5px;
    line-height: 2.4;

    font-size : 15px;
    font-weight : bold;
`;



export default Postwrite;