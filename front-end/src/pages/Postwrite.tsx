import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import styled from 'styled-components';
import Header from '../components/header';
import Footer from '../components/footer';

const Postwrite = () => {


    return (
        <div>
            <Header />
            <Container>
                <Container_tip>🙌게시글을 작성하고, 동업자를 구해보세요!</Container_tip>
                <Container_title placeholder='제목을 작성해주세요.'></Container_title>
                <Container_img_select></Container_img_select>
                <Container_info_container>
                    <Container_info_container_select_location></Container_info_container_select_location>
                    <Container_info_container_select_contract></Container_info_container_select_contract>
                </Container_info_container>
                <Container_content placeholder='내용을 작성해주세요.'></Container_content>
                <Container_btn_container>
                    <Container_btn_container_b1>취소</Container_btn_container_b1>
                    <Container_btn_container_b2>작성</Container_btn_container_b2>
                </Container_btn_container>
            </Container>
        </div>
    );
};
const Container = styled.div`
    // background : #e8edf1;
    position : absolute;
    height: 500px;
    width: 600px;

    top : 50%;
    left : 50%;
    transform : translate(-50%, -50%);
`;
const Container_tip = styled.div`
    background : black;
    height: 40px;
    width: 100%;

    display : flex;
    justify-content : center;
    align-items : center;

    font-size : 12px;
    font-weight : bold;
    color : white;
`;
const Container_title = styled.input`
    height: 40px;
    width: 585px;

    display : flex;
    justify-content : center;
    align-items : center;

    font-size : 12px;
    font-weight : bold;
    color : black;

    border : 2px solid #e3e3e3;
    outline : none;

    padding-left : 10px;
    margin-top : 10px;

    border-radius : 4px;

`;
const Container_img_select = styled.div`
    background : #e3e3e3;
    height:100px;
    width: 100%;

    display : flex;
    justify-content : center;
    align-items : center;

    font-size : 12px;
    font-weight : bold;
    color : white;

    margin-top : 10px;

    border-radius : 4px;

`;
const Container_info_container = styled.div`
    background : aqua;
    height:40px;
    width: 100%;

    display : flex;
    justify-content : center;
    align-items : center;

    font-size : 12px;
    font-weight : bold;
    color : white;

    margin-top : 10px;

    display : flex;
    justify-content : space-between;
`;
const Container_info_container_select_location = styled.div`
    background : red;
    height:100%;
    width: 295px;
`;
const Container_info_container_select_contract = styled.div`
    background : red;
    height:100%;
    width: 295px;
`;
const Container_content = styled.textarea`
    height: 150px;
    width: 577px;

    display : flex;
    justify-content : center;
    align-items : center;

    font-size : 12px;
    font-weight : bold;
    color : black;

    border : 2px solid #e3e3e3;
    outline : none;

    padding : 10px;
    margin-top : 10px;

    font-family: 'Varela Round', sans-serif;

    resize : none;

    border-radius : 4px;
`;
const Container_btn_container = styled.div`
    // background : red;
    height:40px;
    width: 160px;

    display : flex;
    justify-content : space-between;

    font-size : 12px;
    font-weight : bold;
    color : white;

    margin-top : 10px;
    margin-left : 440px;

`;
const Container_btn_container_b1 = styled.div`
    background : #CFCFCF;
    height:100%;
    width: 75px;

    display : flex;
    justify-content : center;
    align-items: center;

    font-size : 12px;
    font-weight : bold;
    color : white;

    border-radius : 4px;
    
    cursor:pointer;
`;
const Container_btn_container_b2 = styled.button`
    background : black;
    height:100%;
    width: 75px;

    display : flex;
    justify-content : center;
    align-items: center;

    font-size : 12px;
    font-weight : bold;
    color : white;

    border-radius : 4px;
    border : none;

    cursor:pointer;
`;


export default Postwrite;