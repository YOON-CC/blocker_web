import styled, { keyframes } from 'styled-components';
import React, { useState, useEffect, useRef  } from 'react';
import axios from 'axios';
import SignatureCanvas from 'react-signature-canvas';
import appStore from '../store/appStore';

const Signature = () => {

  const signatureRef = useRef<SignatureCanvas | null>(null); // 타입 지정

  const handleClearSignature = () => {
    if (signatureRef.current) {
      signatureRef.current.clear();
    }
  };

  const handleSaveSignature = async (signatureImage: string) => {

    console.log(signatureImage)
    try {
      const response = await axios.post(`${process.env.REACT_APP_API_URL}/users/login`, {
        signature: signatureImage,
      });

      if (response.status === 200) {
        
      }
    } catch (error) {
      // 에러 처리
    }
  };

  const handleSaveAndSend = () => {
    appStore.setValue(1)
    if (signatureRef.current) {
      const signatureImage = signatureRef.current.toDataURL();
      handleSaveSignature(signatureImage);
    }
  };

  return (
    <div>
        <Container>
            <Container_1>
              ▼ SIGN HERE ▼
            </Container_1>
            <Container_2>
              <SignatureCanvas ref={signatureRef} penColor="#8BF5FD" canvasProps={{ width: 589, height: 230, className: 'signatureCanvas'}}/>
            </Container_2>
            <Container_3>
              <Container_3_btn_1 onClick={handleClearSignature}>다시쓰기</Container_3_btn_1>
              <Container_3_btn_2 onClick={handleSaveAndSend}>저장</Container_3_btn_2>
            </Container_3>
        </Container>
    </div>
  );
};
const Container = styled.div`
  position : absolute;
  // background : red;
  height: 330px;
  width: 600px;
  
  top : 50%;
  left : 50%;
  transform: translate(-50%, -50%);
  
  justify-content : space-between;

`;
const Container_1 = styled.div`
  // background : blue;
  height: 30px;
  width: 100%;

  display : flex;
  justify-content : center;

  font-size: 20px;
  font-weight : bold;
  color : #8BF5FD;
`;
const Container_2 = styled.div`
  // background : blue;
  height: 230px;
  width: 589px;
  border : 6px solid #8BF5FD;
  border-radius : 10px;
`;
const Container_3 = styled.div`
  // background : blue;
  height: 50px;
  width : 100%;
  margin-top : 9px;
  display : flex;
  justify-content : space-between;
`;
const Container_3_btn_1 = styled.div`
  background : #8BF5FD;
  height: 50px;
  width : 295px;
  border-radius : 5px;

  display : flex;
  justify-content : center;
  align-items: center;

  color : #ffffff;
  font-weight : bold;
  font-size : 15px;

  cursor : pointer;
`;
const Container_3_btn_2 = styled.button`
  background : #8BF5FD;
  height: 50px;
  width : 295px;

  border : none;
  border-radius : 5px;

  display : flex;
  justify-content : center;
  align-items: center;

  color : #ffffff;
  font-weight : bold;
  font-size : 15px;

  cursor : pointer;
`;



export default Signature;