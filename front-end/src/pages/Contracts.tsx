import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import styled from 'styled-components';
import Header from '../components/header';
import Footer from '../components/footer';

const Contracts = () => {


    return (
        <div>
            <Header />
            <Container>

                <Contracts_1>
                    <Contracts_1_title>미체결 계약서</Contracts_1_title>
                    <Contracts_1_list_container>
                        <List_1></List_1>
                        <List_1></List_1>
                        <List_1></List_1>
                        <List_1></List_1>
                        <List_1></List_1>
                        <List_1></List_1>
                    </Contracts_1_list_container>
                </Contracts_1>

                <Contracts_2>
                    <Contracts_2_title>진행중 계약서</Contracts_2_title>
                    <Contracts_2_list_container>
                        <List_2></List_2>
                        <List_2></List_2>
                        <List_2></List_2>
                        <List_2></List_2>
                        <List_2></List_2>
                        <List_2></List_2>
                    </Contracts_2_list_container>
                </Contracts_2>

                <Contracts_3>
                    <Contracts_3_title>체결 계약서</Contracts_3_title>
                    <Contracts_3_list_container>
                        <List_3></List_3>
                        <List_3></List_3>
                        <List_3></List_3>
                        <List_3></List_3>
                        <List_3></List_3>
                        <List_3></List_3>
                    </Contracts_3_list_container>
                </Contracts_3>
            </Container>
            <Footer/>
        </div>
    );
};

const Container = styled.div`
    position : absolute;
    // background : red;
    height: 550px;
    width: 1170px;
    
    margin-top : 100px;
    left : 50%;
    transform: translate(-50%);
    
    display : flex;
    justify-content : space-between;
`;
const Contracts_1 = styled.div`
    position : absolute;
    box-shadow: 0px 0px 20px 0px #8BF5FD;
    height: 540px;
    width: 360px;
    border: 6px solid #8BF5FD;
    border-radius : 20px;
`;
const Contracts_1_title = styled.div`
    position : absolute;
    // background : #ffffff;
    height: 65px;
    width: 300px;

    left : 50%;
    transform: translate(-50%);

    display : flex;
    justify-content : center;
    align-items : center;

    font-size : 18px;
    font-weight : bold;
    color : #8BF5FD;
`;
const Contracts_1_list_container = styled.div`
    position : absolute;
    // background : #ffffff;
    height: 470px;
    width: 340px;

    left : 50%;
    transform: translate(-50%);
    margin-top : 50px;

    font-size : 18px;
    font-weight : bold;
    color : #8BF5FD;
`;
const List_1 = styled.div`
    position : relative;
    background: linear-gradient(to right, #8BF5FD, #B0F4F7); 
    height: 70px;
    width: 340px;

    font-size : 18px;
    font-weight : bold;
    color : #8BF5FD;

    margin-top: 10px;

    border-radius : 12px;
`;

const Contracts_2 = styled.div`
    position : absolute;
    box-shadow: 0px 0px 20px 0px #8BF5FD;
    height: 540px;
    width: 360px;
    border: 6px solid #8BF5FD;
    border-radius : 20px;
    margin-left : 400px;
`;
const Contracts_2_title = styled.div`
    position : absolute;
    // background : #ffffff;
    height: 65px;
    width: 300px;

    left : 50%;
    transform: translate(-50%);

    display : flex;
    justify-content : center;
    align-items : center;

    font-size : 18px;
    font-weight : bold;
    color : #8BF5FD;
`;
const Contracts_2_list_container = styled.div`
    position : absolute;
    // background : #ffffff;
    height: 470px;
    width: 340px;

    left : 50%;
    transform: translate(-50%);
    margin-top : 50px;

    font-size : 18px;
    font-weight : bold;
    color : #8BF5FD;
`;
const List_2 = styled.div`
    position : relative;
    background: linear-gradient(to right, #8BF5FD, #B0F4F7); 
    height: 70px;
    width: 340px;

    font-size : 18px;
    font-weight : bold;
    color : #8BF5FD;

    margin-top: 10px;

    border-radius : 12px;
`;
const Contracts_3 = styled.div`
    position : absolute;
    box-shadow: 0px 0px 20px 0px #8BF5FD;
    height: 540px;
    width: 360px;
    border: 6px solid #8BF5FD;
    border-radius : 20px;
    margin-left : 800px;
`;
const Contracts_3_title = styled.div`
    position : absolute;
    // background : #ffffff;
    height: 65px;
    width: 300px;

    left : 50%;
    transform: translate(-50%);

    display : flex;
    justify-content : center;
    align-items : center;

    font-size : 18px;
    font-weight : bold;
    color : #8BF5FD;
`;
const Contracts_3_list_container = styled.div`
    position : absolute;
    // background : #ffffff;
    height: 470px;
    width: 340px;

    left : 50%;
    transform: translate(-50%);
    margin-top : 50px;

    font-size : 18px;
    font-weight : bold;
    color : #8BF5FD;
`;
const List_3 = styled.div`
    position : relative;
    background: linear-gradient(to right, #8BF5FD, #B0F4F7); 
    height: 70px;
    width: 340px;

    font-size : 18px;
    font-weight : bold;
    color : #8BF5FD;

    margin-top: 10px;

    border-radius : 12px;
`;

export default Contracts;