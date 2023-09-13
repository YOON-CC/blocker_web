import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from "react-router-dom";
import styled from 'styled-components';
import Header from '../components/header';
import Footer from '../components/footer';
import axios from 'axios';

interface ContractItem {
    contractId: number;
    title : number;
    content : string;
    createdAt : string;
    modifiedAt : string;
}


const Contracts = () => {

    const access_token = localStorage.getItem('access-token');
    const [contractData_1, setContractData_1] = useState<ContractItem[]>([]); 

    const [currentTime, setCurrentTime] = useState(new Date());

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000); // 1초마다 업데이트

        return () => clearInterval(interval); // 컴포넌트 언마운트 시 interval 해제
    }, []);

    //미체결 게약서 받아오기
    const handleContarctList = async () => {

        try {
            const response = await axios.get(`${process.env.REACT_APP_API_URL}/contracts`, {
                params: {
                    state: "NOT_CONCLUDED",
                },
                headers: {
                    'Authorization': access_token,
                }
            });

            console.log(response.data)
            if (response.status === 200) {
                console.log("옴")
                setContractData_1(response.data);
            }

        } catch (error) {

        }

    };

    useEffect(() => {
        // 페이지가 로드될 때 한 번만 호출되는 로직
        handleContarctList();
    }, []);

    return (
        <div>
            <Header />
            <Container_1>
                <Container_1_clock>{currentTime.toLocaleTimeString()}</Container_1_clock>
            </Container_1>
            <Container_2>
                <Container_2_contract>
                    {/* <StyledLink to={`/contracts/${boardId}`} style={{ textDecoration: 'none' }}> */}
                        <Container_2_contract_1>
                            <Container_2_contract_title_Container>
                                <img src="./image/login_logo.png" style={{ width: "60px", height: "60px", marginLeft:"10px", marginTop:"10px"}}></img>
                                <Container_2_contract_title_Container_content>
                                    <Container_2_contract_title_Container_content_1>미체결 계약서</Container_2_contract_title_Container_content_1>
                                    <Container_2_contract_title_Container_content_2>작성만 되어져있는 계약서</Container_2_contract_title_Container_content_2>
                                </Container_2_contract_title_Container_content>
                            </Container_2_contract_title_Container>
                            <Container_2_contract_line></Container_2_contract_line>

                            <Container_2_contarcts_container>
                                {contractData_1.map((item, index) => (
                                    <StyledLink to={`/contracts/${item.contractId}`} style={{ textDecoration: 'none' }} onClick={() => localStorage.setItem("contractId_1", item.contractId.toString())}>
                                        <Container_2_contarcts_1>
                                            <Container_2_contarcts_1_title>{item.title}</Container_2_contarcts_1_title>
                                            <Container_2_contarcts_1_content>{item.content}</Container_2_contarcts_1_content>
                                            <Container_2_contarcts_1_info>
                                                <Container_2_contarcts_1_info_content>작성일 : {item.createdAt.split("T")[0]}</Container_2_contarcts_1_info_content>
                                                <Container_2_contarcts_1_info_content>수정일 : {item.modifiedAt.split("T")[0]}</Container_2_contarcts_1_info_content>
                                            </Container_2_contarcts_1_info>
                                        </Container_2_contarcts_1>
                                    </StyledLink>
                                ))}
                            </Container_2_contarcts_container>

                        </Container_2_contract_1>
                    <Container_2_contract_2> 
                        <Container_2_contract_title_Container>
                            <img src="./image/login_logo.png" style={{ width: "60px", height: "60px", marginLeft:"10px", marginTop:"10px"}}></img>
                            <Container_2_contract_title_Container_content>
                                <Container_2_contract_title_Container_content_1>진행중 계약서</Container_2_contract_title_Container_content_1>
                                <Container_2_contract_title_Container_content_2>진행중인 계약서</Container_2_contract_title_Container_content_2>
                            </Container_2_contract_title_Container_content>
                        </Container_2_contract_title_Container>
                        <Container_2_contract_line></Container_2_contract_line>
                    </Container_2_contract_2>
                    <Container_2_contract_3>
                        <Container_2_contract_title_Container>
                            <img src="./image/login_logo.png" style={{ width: "60px", height: "60px", marginLeft:"10px", marginTop:"10px"}}></img>
                            <Container_2_contract_title_Container_content>
                                <Container_2_contract_title_Container_content_1>체결 계약서</Container_2_contract_title_Container_content_1>
                                <Container_2_contract_title_Container_content_2>계약이 완료된 계약서</Container_2_contract_title_Container_content_2>
                            </Container_2_contract_title_Container_content>
                        </Container_2_contract_title_Container> 
                        <Container_2_contract_line></Container_2_contract_line>
                    </Container_2_contract_3>
                </Container_2_contract>
            </Container_2>
            <Container_3_contract_write>
                <StyledLink to="/contractwrite" style={{ textDecoration: 'none' }}>
                    <Container_3_contract_write_btn>계약서 작성</Container_3_contract_write_btn>
                </StyledLink>    
            </Container_3_contract_write>
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
const Container_1 = styled.div`
    // position : absolute;
    // background : red;
    height: 140px;
    width: 100%;
`;
const Container_1_clock = styled.div`
    // position : absolute;
    // background : aqua;
    height: 80px;
    width: 100%;

    display : flex;
    align-items: center;
    justify-content : center;

    color : #5a5a5a;
    font-size : 25px;
    font-weight:bold;
    padding-top : 75px;
`;

const Container_2 = styled.div`
    // position : absolute;
    // background : blue;
    height: 500px;
    width: 100%;

    margin-top : 10px;

`;
const Container_2_contract = styled.div`
    position : absolute;
    // background : green;
    height: 500px;
    width: 1300px;


    left : 50%;
    transform : translate(-50%);

    display : flex;
    justify-content : space-between;
`;
const Container_2_contract_1 = styled.div`
    background : white;
    height: 100%;
    width: 400px;
    border-radius : 3px;
    box-shadow: 1px 1px 6px 2px rgb(196, 196, 196);
`;
const Container_2_contract_2 = styled.div`
    background : white;
    height: 100%;
    width: 400px;
    border-radius : 3px;
    box-shadow: 1px 1px 6px 2px rgb(196, 196, 196);
`;
const Container_2_contract_3 = styled.div`
    background : white;
    height: 100%;
    width: 400px;
    border-radius : 3px;
    box-shadow: 1px 1px 6px 2px rgb(196, 196, 196);
`;
const Container_2_contract_title_Container = styled.div`
    // background : green;
    height: 80px;
    width: 100%;
    display : flex;
`;
const Container_2_contract_title_Container_content = styled.div`
    // background : red;
    height: 100%;
    width: 200px;
    margin-left : 30px;
`;
const Container_2_contract_title_Container_content_1 = styled.div`
    // background : aqua;
    height: 30px;
    width: 100%;
    margin-top : 10px;

    font-size : 20px;
    font-weight : bold;
    display : flex;
    justify-content : center;
    align-items: center;
`;
const Container_2_contract_title_Container_content_2 = styled.div`
    // background : blue;
    height: 25px;
    width: 100%;

    font-size : 13px;
    // font-weight : bold;
    color : #9c9c9c;

    display : flex;
    justify-content : center;
    align-items: center;
`;
const Container_2_contract_line = styled.div`
    background : #d1d1d1;
    height: 2px;
    width: 380px;
    margin-left : 10px;
`;
const Container_2_contarcts_container = styled.div`
    position : absolute;
    // background : green;
    height: 410px;
    width: 380px;
    margin-left : 10px;
    overflow : auto;

    /* 스크롤바 스타일링 */
    scrollbar-width: thin;
    scrollbar-color: rgba(0, 0, 0, 0.2) transparent;
    
    &::-webkit-scrollbar {
        width: 8px;
    }
    
    &::-webkit-scrollbar-thumb {
        background-color: rgba(0, 0, 0, 0.2);
        border-radius: 4px;
    }
    
    &::-webkit-scrollbar-thumb:hover {
        background-color: rgba(0, 0, 0, 0.4);
    }
    
    &::-webkit-scrollbar-track {
        background: transparent;
    }
`;
const Container_2_contarcts_1 = styled.div`
    position : relative;
    background : #ededed;
    height: 100px;
    width: 100%;
    margin-top : 10px;
    cursor : pointer;

    &:hover {
        filter: brightness(90%); 
    }
`;
const Container_2_contarcts_1_title = styled.div`
    
    // background : blue;
    height: 40px;
    width: 100%;
    margin-top : 7px;

    display : flex;
    justify-content : center;
    align-items: center;

    font-weight : bold;
    font-size : 20px;
`;
const Container_2_contarcts_1_content = styled.div`
    // background : yellow;
    height: 30px;
    width: 100%;

    display : flex;
    justify-content : center;
    align-items: center;

    font-size : 12px;
    color : #a9a9a9;
`;
const Container_2_contarcts_1_info = styled.div`
    // background : yellow;
    height: 30px;
    width: 100%;
    display : flex;
    justify-content : center;

`;
const Container_2_contarcts_1_info_content = styled.div`
    // background : blue;
    height: 100%;
    width: 170px;
    display : flex;
    justify-content : center;
    align-items : center;
    font-size : 12px;
`;
const Container_3_contract_write = styled.div`
    // position : absolute;
    // background : yellow;
    height: 40px;
    width: 100%;
    margin-top : 25px;
`;
const Container_3_contract_write_btn = styled.div`
    position : relative;
    background : black;
    height: 100%;
    width: 140px;

    border:none;
    cursor : pointer;

    font-size : 13px;
    color : #ffffff;

    left : 50%;
    transform : translate(-50%);

    border-radius : 4px;

    display : flex;
    justify-content : center;
    align-items : center;
`;


export default Contracts;