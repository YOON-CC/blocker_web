import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import styled from 'styled-components';
import Header from '../components/header';
import axios from 'axios';

const Contracts_object = () => {


    return (
        <div>
            <Header/>
            <Container>
                <Container_1>계약서</Container_1>
                <Container_2>
                    <Container_2_title>제목</Container_2_title>
                    <Container_2_content></Container_2_content>
                </Container_2>
                <Container_3>
                    <Container_3_title>작성일자</Container_3_title>
                    <Container_3_content></Container_3_content>
                    <Container_3_title>수정일자</Container_3_title>
                    <Container_3_content></Container_3_content>
                </Container_3>
                <Container_4>
                    <Container_4_title>내용</Container_4_title>
                    <Container_4_content></Container_4_content>
                </Container_4>
            </Container>
            <Container_btn_container>
                <Container_btn_container_b1>취소</Container_btn_container_b1>
                <StyledLink to="/contract_edit" style={{ textDecoration: 'none' }}>
                    <Container_btn_container_b2>편집</Container_btn_container_b2>
                </StyledLink>
                <Container_btn_container_b3>삭제</Container_btn_container_b3>
            </Container_btn_container>
        </div>
    );
};
const StyledLink = styled(Link)`
  text-decoration: none;
  color: black; /* 원하는 색상으로 변경 */
  
  &:visited {
    color: black; /* 방문한 링크의 색상도 동일하게 유지 */
  }
`;
const Container = styled.div`
    background : #e8edf1;
    position : absolute;
    height: 300px;
    width: 600px;

    top : 50%;
    left : 50%;
    transform : translate(-50%, -50%);
    border : 1px solid #dfdfdf;
`;
const Container_1 = styled.div`
    background : black;
    position : relative;
    height: 40px;
    width: 100%;

    display : flex;
    justify-content : center;
    align-items: center;

    color : #ffffff;
`;
const Container_2 = styled.div`
    position : relative;
    // background : red;
    height: 40px;
    width: 100%;

    display : flex;
`;
const Container_2_title = styled.div`
    position : relative;
    // background : green;
    height: 100%;
    width: 100px;

    display : flex;
    justify-content : center;
    align-items: center;

    color : #000000;

    font-size : 13px;

`;
const Container_2_content = styled.div`
    position : relative;
    // background : #ffffff;
    height: 100%;
    width: 500px;
`;
const Container_3 = styled.div`
    position : relative;
    background : #ffffff;
    height: 40px;
    width: 100%;

    display : flex;
`;
const Container_3_title = styled.div`
    position : relative;
    // background : green;
    height: 100%;
    width: 100px;

    display : flex;
    justify-content : center;
    align-items: center;

    color : #000000;

    font-size : 13px;

`;
const Container_3_content = styled.div`
    position : relative;
    // background : blue;
    height: 100%;
    width: 200px;
`;
const Container_4 = styled.div`
    position : relative;
    // background : #ffffff;
    height: 180px;
    width: 100%;

    display : flex;
`;
const Container_4_title = styled.div`
    position : relative;
    // background : green;
    height: 100%;
    width: 100px;

    display : flex;
    justify-content : center;
    align-items: center;

    color : #000000;

    font-size : 13px;

`;
const Container_4_content = styled.div`
    position : relative;
    // background : blue;
    height: 100%;
    width: 500px;
`;

const Container_btn_container = styled.div`
    // background : red;
    position : absolute;
    height:40px;
    width: 240px;

    display : flex;
    justify-content : space-between;

    font-size : 12px;
    font-weight : bold;
    color : white;

    margin-top : 180px;
    margin-left : 180px;

    top : 50%;
    left : 50%;
    transform : translate(-50%, -50%);
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
const Container_btn_container_b3 = styled.button`
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
export default Contracts_object;