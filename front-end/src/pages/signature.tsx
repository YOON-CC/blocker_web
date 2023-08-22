import styled, { keyframes } from 'styled-components';
import React, { useState, useEffect, useRef  } from 'react';
import axios from 'axios';
import SignatureCanvas from 'react-signature-canvas';
import appStore from '../store/appStore';

const Signature = () => {

  const signatureRef = useRef<SignatureCanvas | null>(null); // 타입 지정

  //useState 설정
  const [access_token, setAccess_token] = useState('');

  useEffect(() => {
    //access_token 추출
    const temp_access_token = localStorage.getItem('access-token');
    if (temp_access_token !== null) {
      setAccess_token(temp_access_token);
    } else {
      console.log("access-token not found in localStorage");
    }
  },[]);
  
  //초기화 함수
  const handleClearSignature = () => {
    if (signatureRef.current) {
      signatureRef.current.clear();
    }
  };

  const handleSaveSignature = async (signatureImage: Blob) => {
    console.log(signatureImage);
    console.log(access_token);

    try {
      const formData = new FormData();
      formData.append('signature', signatureImage, 'signature.png');
      console.log(typeof formData)
      const response = await axios.post(`${process.env.REACT_APP_API_URL}/users/signature`,
        formData,
        {
          headers: {
            Authorization: access_token,
            'Content-Type': 'multipart/form-data',
          },
        }
      );

      console.log(response.status);
      if (response.status === 200) {
        console.log('상태값 200');
        console.log(response.headers['authorization'])
        appStore.setValue(1);
      }
    } catch (error) {
      // 에러 처리
    }
  };

  const handleSaveAndSend = () => {
    if (signatureRef.current) {
      const canvas = signatureRef.current.getCanvas();
      canvas.toBlob((blob) => {
        if (blob) {
          handleSaveSignature(blob);
        }
      }, 'image/png');
    }
  };

  return (
    <div>
        <Container>
          <Container_frame>
            <Container_1>
              전자서명(필수)
            </Container_1>
            <Container_2>
              <SignatureCanvas ref={signatureRef} penColor="#ffffff" canvasProps={{ width: 589, height: 230, className: 'signatureCanvas'}}/>
            </Container_2>
            <Container_3>
              <Container_3_btn_1 onClick={handleClearSignature}>다시쓰기</Container_3_btn_1>
              <Container_3_btn_2 onClick={handleSaveAndSend}>저장</Container_3_btn_2>
            </Container_3>
          </Container_frame>
        </Container>
    </div>
  );
};
const Container = styled.div`
  position : fixed;
  background : red;
  height: 100%;
  width: 100%;
  top : 50%;
  left : 50%;
  transform: translate(-50%, -50%);
  z-index : 1;
  background-color: rgba(0, 0, 0, 0.9);
  backdrop-filter: blur(2.5px); 
`;
const Container_frame = styled.div`
  position : absolute;

  width

  background : blue;
  top : 50%;
  left : 50%;
  transform: translate(-50%, -50%);
`;
const Container_1 = styled.div`
  // background : red;
  height : 50px;
  border-radius : 10px;

  display : flex;
  justify-content : center;
  align-items : center;

  color : white;
  font-size : 20px;
  font-weight : bold;
`;
const Container_2 = styled.div`
  // background : blue;
  height: 230px;
  width: 589px;
  border : 5px solid #ffffff;
  border-radius : 5px;
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
  background : #ffffff;
  height: 50px;
  width : 295px;
  border-radius : 5px;

  display : flex;
  justify-content : center;
  align-items: center;

  color : #000000;
  font-weight : bold;
  font-size : 15px;

  cursor : pointer;
`;
const Container_3_btn_2 = styled.button`
  background : #ffffff;
  height: 50px;
  width : 295px;

  border : none;
  border-radius : 5px;

  display : flex;
  justify-content : center;
  align-items: center;

  color : #000000;
  font-weight : bold;
  font-size : 15px;

  cursor : pointer;
`;



export default Signature;