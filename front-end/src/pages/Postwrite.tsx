import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import styled from 'styled-components';
import Header from '../components/header';
import Footer from '../components/footer';
import axios from 'axios';

const Postwrite = () => {
    const access_token = localStorage.getItem('access-token');
    console.log(access_token)


    //png 이미지를 주소로 변환하는 코드
    const [selectedImages, setSelectedImages] = useState<File[]>([]);

    const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const selectedFiles = event.target.files;
        if (selectedFiles) {
            const newSelectedImages = Array.from(selectedFiles).filter(file => file.type === 'image/png');
            setSelectedImages(prevImages => [...prevImages, ...newSelectedImages]);
        }
    };
  
    const handleImageSave = () => {
        selectedImages.forEach((image) => {
            const reader = new FileReader();
            reader.onload = (e) => {
                if (e.target && e.target.result) {
                    const base64Data = e.target.result.toString();
                    console.log('이미지 데이터:', base64Data);
                }
            };
            reader.readAsDataURL(image);
        });
    };

    // 전체 데이터 전송 코드
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const handletitleChange = (event : any) => {
        setTitle(event.target.value)
    };

    const handlecontentChange = (event : any) => {
        setContent(event.target.value)
    };

    const handleBoardPost = async (event : any) => {
        event.preventDefault();
        try {
            const response = await axios.post(`${process.env.REACT_APP_API_URL}/boards`, {
                title: title,
                content : content,
                info : "부산 남구 대연동 부경대학교",
                representImage : "https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Flag_of_South_Korea.svg/255px-Flag_of_South_Korea.svg.png",
                contractId : 1,
                images : ['https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Flag_of_South_Korea.svg/255px-Flag_of_South_Korea.svg.png'],
            }, {
                headers: {
                    'Authorization': access_token,
                }
            });

            if (response.status === 201) {
                console.log("옴")
            }

        } catch (error) {

        }
    };

    return (
        <div>
            <Header />
            <Container>
                <Container_tip>🙌게시글을 작성하고, 동업자를 구해보세요!</Container_tip>
                <Container_title placeholder='제목을 작성해주세요.' onChange={handletitleChange}></Container_title>
                <Container_img_select>
                    {selectedImages.map((image, index) => (
                        <div key={index}>
                            <img src={URL.createObjectURL(image)} alt={`Selected ${index}`} style={{ width: '70px', height: '70px'}} />
                        </div>
                    ))}
                    <StyledLabel htmlFor="upload">업로드</StyledLabel>
                    <Container_img_select_btn type="file" accept="image/png" multiple onChange={handleImageChange} id="upload"></Container_img_select_btn>
                    
                    {selectedImages.length > 0 && (
                        <button onClick={handleImageSave}>이미지 저장</button>
                    )}
                </Container_img_select>
                <Container_info_container>
                    <Container_info_container_select_location></Container_info_container_select_location>
                    <Container_info_container_select_contract></Container_info_container_select_contract>
                </Container_info_container>
                <Container_content placeholder='내용을 작성해주세요.' onChange={handlecontentChange}></Container_content>
                <form onSubmit={handleBoardPost}>
                    <Container_btn_container>
                        <Container_btn_container_b1>취소</Container_btn_container_b1>
                        <Container_btn_container_b2>작성</Container_btn_container_b2>
                    </Container_btn_container>
                </form>
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
    height:100px;
    width: 598px;

    display : flex;
    justify-content : center;
    align-items : center;

    font-size : 12px;
    font-weight : bold;
    color : white;

    margin-top : 10px;

    border-radius : 4px;
    border : 1px solid #e3e3e3
`;
const StyledLabel = styled.label`
    display: inline-block;
    padding: .5em .75em;
    color: #999;
    font-size: inherit;
    line-height: normal;
    vertical-align: middle;
    background-color: #fdfdfd;
    cursor: pointer;
    border: 1px solid #ebebeb;
    border-bottom-color: #e2e2e2;
    border-radius: .25em;
`;
const Container_img_select_btn = styled.input`
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip:rect(0,0,0,0);
    border: 0;
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