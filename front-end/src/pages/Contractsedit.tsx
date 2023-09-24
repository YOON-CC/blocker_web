import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from "react-router-dom";
import styled from 'styled-components';
import Header from '../components/header';
import axios from 'axios';

const Contract_edit= () => {

    const access_token = localStorage.getItem('access-token');
    const contractId = localStorage.getItem('contractId_1');
    const [contractObject_contractId, setContractObject_contractId] = useState(0); 
    const [contractObject_title, setContractObject_title] = useState(''); 
    const [contractObject_content, setContractObject_content] = useState(''); 

    const handleContarctObject_1 = async () => {

        try {
            const response = await axios.get(`${process.env.REACT_APP_API_URL}/contracts/${contractId}`, {
                params: {
                    state: "NOT_CONCLUDED",
                },
                headers: {
                    'Authorization': access_token,
                }
            });

            console.log(response.data)
            if (response.status === 200) {
                setContractObject_contractId(response.data.contractId);
                setContractObject_title(response.data.title);
                setContractObject_content(response.data.content);
            }

        } catch (error) {

        }

    };

    useEffect(() => {
        // 페이지가 로드될 때 한 번만 호출되는 로직
        handleContarctObject_1();
    }, []);

    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const handletitleChange = (event : any) => {
        setTitle(event.target.value)
    };
    const handlecontentChange = (event : any) => {
        setContent(event.target.value)
    };

    const handleContractEdit = async (event : any) => {
        event.preventDefault();

        try {
            const response = await axios.patch(`${process.env.REACT_APP_API_URL}/contracts/${contractId}`, {
                title: title,
                content : content,
            }, {
                headers: {
                    'Authorization': access_token,
                }
            });

            if (response.status === 200) {
                console.log("수정완료")
            }

        } catch (error) {

        }
    };

    return (
        <div>
            <Header/>
            <Container>
                <Container_title placeholder={contractObject_title} onChange={handletitleChange}></Container_title>
                <Container_content placeholder={contractObject_content} onChange={handlecontentChange}></Container_content>
                <Container_btn_container>
                    <StyledLink to="/contracts" style={{ textDecoration: 'none' }}>
                        <Container_btn_container_b1>취소</Container_btn_container_b1>
                    </StyledLink>
                    <form onSubmit={handleContractEdit}>
                        <Container_btn_container_b2>수정</Container_btn_container_b2>
                    </form>
                </Container_btn_container>
            </Container>
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
    position : absolute;
    // background : red;
    height: fit-content;
    width: 500px;

    top : 50%;
    left : 50%;
    transform : translate(-50%, -50%);
`;

const Container_title = styled.input`
    height: 40px;
    width: 485px;

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
const Container_content = styled.textarea`
    height: 150px;
    width: 477px;

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
    margin-left : 340px;

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
export default Contract_edit;