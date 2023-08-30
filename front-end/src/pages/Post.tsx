import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import styled from 'styled-components';
import Header from '../components/header';
import axios from 'axios';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Post = () => {

    const access_token = localStorage.getItem('access-token');
    console.log(access_token)

    const boardId = localStorage.getItem('boardId');


    const handleBoardBookmark_1 = async (event : any) => {
        event.preventDefault();

        try {
            const response = await axios.post(`${process.env.REACT_APP_API_URL}/bookmarks`, {
                boardId: boardId,
            }, 
            {
                headers: {
                    'Authorization': access_token,
                }
            });
            console.log("북마크 등록",response.status)

        }
        catch (error) {

        }
    }


    return (
        <div>
            <Header/>
            <Container_1>
                <Container_1_c1></Container_1_c1>
                <Container_1_c2>
                    <Container_1_c2_title>낮에는 카페입니다. 밤에는 bar입니다. 동업 계약자 구해요. 새벽6~8시 사이에 변경 타임입니다.</Container_1_c2_title>
                    <Container_1_c2_info>
                        <Container_1_c2_info_1>
                            <FontAwesomeIcon icon="eye" style={{ color: '#b6b6b6', fontSize : "20px", marginRight : "5px", marginTop : "1px"}} />  
                            99
                        </Container_1_c2_info_1>
                        <Container_1_c2_info_2>
                            <FontAwesomeIcon icon="bookmark" style={{ color: '#b6b6b6', fontSize : "20px", marginRight : "5px"}} />
                            99
                        </Container_1_c2_info_2>
                        <Container_1_c2_info_3>
                            작성일 : 22222222
                        </Container_1_c2_info_3>
                        <Container_1_c2_info_4>
                            수정일 : 22222222
                        </Container_1_c2_info_4>
                    </Container_1_c2_info>
                    <Container_1_c2_detail>
                        <Container_1_c2_detail_1>
                            <Container_1_c2_detail_1_text1>• 작성자</Container_1_c2_detail_1_text1>
                            happycyc
                        </Container_1_c2_detail_1>
                        <Container_1_c2_detail_2>
                            <Container_1_c2_detail_2_text2>• 주소</Container_1_c2_detail_2_text2>
                            부산광역시 남구 대연동 부경대학교
                        </Container_1_c2_detail_2>
                        <Container_1_c2_detail_3>
                            <Container_1_c2_detail_3_text3>• 주소</Container_1_c2_detail_3_text3>
                            부산광역시 남구 대연동 부경대학교
                        </Container_1_c2_detail_3>
                    </Container_1_c2_detail>
                </Container_1_c2>

                <form onSubmit={handleBoardBookmark_1}>
                    <button>테스트</button>
                </form>


            </Container_1>
        </div>
    );
};
const Container_1 = styled.div`
    position : absolute;
    // background : red;
    height : 400px;
    width: 1000px;
    margin-top : 100px;
    left : 50%;
    transform : translate(-50%);

    display : flex;
    justify-content : space-between;

    border : 1px solid #000000;
`;
const Container_1_c1 = styled.div`
    background : red;
    height : 100%;
    width: 400px;
`;
const Container_1_c2 = styled.div`
    // background : blue;
    height : 100%;
    width: 580px;
`;
const Container_1_c2_title = styled.div`
    // background : aqua;
    height : 110px;
    width: 100%;

    display : flex;
    align-items : center;

    font-size : 20px;
    font-weight : bold;

    border-bottom : 2px solid #e8edf1;
`;
const Container_1_c2_info = styled.div`
    background : aqua;
    height : 25px;
    width: 100%;

    display : flex;

    font-size : 20px;
    font-weight : bold;
    margin-top:10px;
`;
const Container_1_c2_info_1 = styled.div`
    background : red;
    height : 25px;
    width: fit-content;

    display : flex;

    font-size : 15px;
    font-weight : bold;
    color : #b6b6b6;
`;
const Container_1_c2_info_2 = styled.div`
    background : red;
    height : 25px;
    width: fit-content;

    display : flex;

    font-size : 15px;
    font-weight : bold;
    color : #b6b6b6;

    margin-left : 15px;
`;
const Container_1_c2_info_3 = styled.div`
    background : red;
    height : 24px;
    width: fit-content;

    display : flex;

    font-size : 13px;
    font-weight : bold;
    color : #b6b6b6;

    margin-left : 15px;
    margin-top : 1px;
`;
const Container_1_c2_info_4 = styled.div`
    background : red;
    height : 24px;
    width: fit-content;

    display : flex;

    font-size : 13px;
    font-weight : bold;
    color : #b6b6b6;

    margin-left : 5px;
    margin-top : 1px;
`;
const Container_1_c2_detail = styled.div`
    background : aqua;
    height : 150px;
    width: 100%;

    font-size : 20px;
    font-weight : bold;
    margin-top:8px;
`;
const Container_1_c2_detail_1 = styled.div`
    background : red;
    height : 25px;
    width: 100%;

    display : flex;
    align-items:center;

    font-size : 15px;
    font-weight : bold;
    margin-left : 10px;
`;
const Container_1_c2_detail_1_text1 = styled.div`
    background : blue;
    height : 100%;
    width : 60px;

    display : flex;
    align-items : center;
    font-size : 13px;
    font-weight : bold;
    color : #b6b6b6;
`;
const Container_1_c2_detail_2 = styled.div`
    background : red;
    height : 25px;
    width: 100%;

    display : flex;
    align-items:center;

    font-size : 15px;
    font-weight : bold;
    margin-left : 10px;
`;
const Container_1_c2_detail_2_text2 = styled.div`
    background : blue;
    height : 100%;
    width : 60px;

    display : flex;
    align-items : center;
    font-size : 13px;
    font-weight : bold;
    color : #b6b6b6;
`;
const Container_1_c2_detail_3 = styled.div`
    background : red;
    height : 25px;
    width: 100%;

    display : flex;
    align-items:center;

    font-size : 15px;
    font-weight : bold;
    margin-left : 10px;
`;
const Container_1_c2_detail_3_text3 = styled.div`
    background : blue;
    height : 100%;
    width : 60px;

    display : flex;
    align-items : center;
    font-size : 13px;
    font-weight : bold;
    color : #b6b6b6;
`;

export default Post;