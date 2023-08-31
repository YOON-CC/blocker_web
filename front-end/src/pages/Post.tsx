import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from "react-router-dom";
import styled from 'styled-components';
import Header from '../components/header';
import axios from 'axios';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const Post = () => {

    const access_token = localStorage.getItem('access-token');
    const boardId = localStorage.getItem('boardId');

    //게시글 object 배열
    const [postObject_boardId, setPostObject_boardId] = useState(0); 
    const [postObject_title, setPostObject_title] = useState(''); 
    const [postObject_name, setPostObject_name] = useState(''); 
    const [postObject_content, setPostObject_content] = useState(''); 
    const [postObject_representImage, setPostObject_representImage] = useState(''); 
    const [postObject_view, setPostObject_view] = useState(0); 
    const [postObject_bookmarkCount, setPostObject_bookmarkCount] = useState(0); 
    const [postObject_createdAt, setPostObject_createdAt] = useState(''); 
    const [postObject_modifiedAt, setPostObject_modifiedAt] = useState(''); 
    const [postObject_images, setPostObject_images] = useState([]); 
    const [postObject_info, setPostObject_info] = useState(''); 
    const [postObject_contractId, setPostObject_contractId] = useState(0); 
    const [postObject_isWriter, setPostObject_isWriter] = useState(false); 
    const [postObject_isBookmark, setPostObject_isBookmark] = useState(false); 

    //북마크 여부


    //초반 데이터
    const handlePostObject = async () => {

        try {
            const response = await axios.get(`${process.env.REACT_APP_API_URL}/boards/${boardId}`, {
                headers: {
                    'Authorization': access_token,
                }
            });

            
            if (response.status === 200) {
                setPostObject_boardId(response.data.boardId);
                setPostObject_title(response.data.title);
                setPostObject_name(response.data.name);
                setPostObject_content(response.data.content);
                setPostObject_representImage(response.data.representImage);
                setPostObject_view(response.data.view);
                setPostObject_bookmarkCount(response.data.bookmarkCount);
                setPostObject_createdAt(response.data.createdAt);
                setPostObject_modifiedAt(response.data.modifiedAt);
                setPostObject_images(response.data.images);
                setPostObject_info(response.data.info);
                setPostObject_contractId(response.data.contractId);
                setPostObject_isWriter(response.data.isWriter);
                setPostObject_isBookmark(response.data.isBookmark);
            }

        } catch (error) {

        }
    };

    useEffect(() => {
        // 페이지가 로드될 때 한 번만 호출되는 로직
        handlePostObject();
    }, []);


    //북마크 등록
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
            if (response.status == 200){
                setPostObject_isBookmark(true);
            }
        }
        catch (error) {

        }
    }

    //북마크 삭제
    const handleBoardBookmark_2 = async (event: any) => {
        event.preventDefault();
    
        try {
            const response = await axios.delete(`${process.env.REACT_APP_API_URL}/bookmarks/${boardId}`, // 경로 변수 사용
                {
                    headers: {
                        Authorization: access_token,
                    },
                }
            );
    
            if (response.status === 200) {
                setPostObject_isBookmark(false);
            }
        } catch (error) {
            // 에러 처리 코드 추가
        }
    };

    const handleBoardBookmark = (event : any) => {
        if (postObject_isBookmark === false) {
            handleBoardBookmark_1(event);
        }
        else {
            handleBoardBookmark_2(event);
        }
    };

    return (
        <div>
            <Header/>
            <Container_1>
                <Container_1_c1></Container_1_c1>
                <Container_1_c2>
                    <Container_1_c2_title>{postObject_title}</Container_1_c2_title>
                    <Container_1_c2_info>
                        <Container_1_c2_info_1>
                            <FontAwesomeIcon icon="eye" style={{ color: '#b6b6b6', fontSize : "20px", marginRight : "5px", marginTop : "1px"}} />  
                            {postObject_view}
                        </Container_1_c2_info_1>
                        <Container_1_c2_info_2>
                            <FontAwesomeIcon icon="bookmark" style={{ color: '#b6b6b6', fontSize : "20px", marginRight : "5px"}}/>
                            {postObject_bookmarkCount}
                        </Container_1_c2_info_2>
                        <Container_1_c2_info_3>
                            작성일 : {postObject_createdAt.split("T")[0]}
                        </Container_1_c2_info_3>
                        <Container_1_c2_info_4>
                            수정일 : {postObject_modifiedAt.split("T")[0]}
                        </Container_1_c2_info_4>
                    </Container_1_c2_info>
                    <Container_1_c2_detail>
                        <Container_1_c2_detail_1>
                            <Container_1_c2_detail_1_text1>• 작성자</Container_1_c2_detail_1_text1>
                            {postObject_name}
                        </Container_1_c2_detail_1>
                        <Container_1_c2_detail_2>
                            <Container_1_c2_detail_2_text2>• 주소</Container_1_c2_detail_2_text2>
                            {postObject_info}
                        </Container_1_c2_detail_2>
                        <Container_1_c2_detail_3>
                            <Container_1_c2_detail_3_text3>• 서명</Container_1_c2_detail_3_text3>
                            <FontAwesomeIcon icon="check" style={{ color: '#00ff6a', fontSize : "20px", marginRight : "5px", marginLeft : "2px"}}></FontAwesomeIcon>
                        </Container_1_c2_detail_3>
                    </Container_1_c2_detail>
                    <Container_1_c2_btn>
                    <form onSubmit={handleBoardBookmark}>
                        {postObject_isBookmark == false && <Container_1_c2_btn_1_false><FontAwesomeIcon icon="bookmark" style={{ color: '#ffffff', fontSize : "20px", marginRight : "5px"}} />찜</Container_1_c2_btn_1_false>}
                        {postObject_isBookmark == true && <Container_1_c2_btn_1_true><FontAwesomeIcon icon="bookmark" style={{ color: '#00ff6a', fontSize : "20px", marginRight : "5px"}} />찜</Container_1_c2_btn_1_true>}
                    </form>
                    <StyledLink to="/chat" style={{ textDecoration: 'none' }}>
                        <Container_1_c2_btn_2><FontAwesomeIcon icon="comment" style={{ color: '#ffffff', fontSize : "20px", marginRight : "5px"}} />채팅하기</Container_1_c2_btn_2>
                    </StyledLink>
                    <form>  
                        <Container_1_c2_btn_3><FontAwesomeIcon icon="bullhorn" style={{ color: '#ffffff', fontSize : "20px", marginRight : "5px"}} />신고하기</Container_1_c2_btn_3>
                    </form>  
                    </Container_1_c2_btn>
                </Container_1_c2>
            </Container_1>
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
    position : absolute;
    // background : red;
    height : 400px;
    width: 1000px;
    margin-top : 100px;
    left : 50%;
    transform : translate(-50%);

    display : flex;
    justify-content : space-between;

    // border : 1px solid #000000;
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
    height : 160px;
    width: 100%;

    display : flex;
    align-items : center;

    font-size : 25px;
    font-weight : bold;

    border-bottom : 2px solid #e8edf1;
`;
const Container_1_c2_info = styled.div`
    // background : aqua;
    height : 25px;
    width: 100%;

    display : flex;

    font-size : 20px;
    font-weight : bold;
    margin-top:10px;
`;
const Container_1_c2_info_1 = styled.div`
    // background : red;
    height : 25px;
    width: fit-content;

    display : flex;

    font-size : 15px;
    font-weight : bold;
    color : #b6b6b6;
`;
const Container_1_c2_info_2 = styled.div`
    // background : red;
    height : 25px;
    width: fit-content;

    display : flex;

    font-size : 15px;
    font-weight : bold;
    color : #b6b6b6;

    margin-left : 15px;
`;
const Container_1_c2_info_3 = styled.div`
    // background : red;
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
    // background : red;
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
    // background : aqua;
    height : fit-content;
    width: 100%;

    font-size : 20px;
    font-weight : bold;
    margin-top: 25px;
`;
const Container_1_c2_detail_1 = styled.div`
    // background : red;
    height : 25px;
    width: fit-content;

    display : flex;
    align-items:center;

    font-size : 15px;
    font-weight : bold;
    margin-left : 10px;
`;
const Container_1_c2_detail_1_text1 = styled.div`
    // background : blue;
    height : 100%;
    width : 60px;

    display : flex;
    align-items : center;
    font-size : 13px;
    font-weight : bold;
    color : #b6b6b6;
`;
const Container_1_c2_detail_2 = styled.div`
    // background : red;
    height : 25px;
    width: fit-content;

    display : flex;
    align-items:center;

    font-size : 15px;
    font-weight : bold;
    margin-left : 10px;
    margin-top : 5px;
`;
const Container_1_c2_detail_2_text2 = styled.div`
    // background : blue;
    height : 100%;
    width : 60px;

    display : flex;
    align-items : center;
    font-size : 13px;
    font-weight : bold;
    color : #b6b6b6;
`;
const Container_1_c2_detail_3 = styled.div`
    // background : red;
    height : 25px;
    width: fit-content;

    display : flex;
    align-items:center;

    font-size : 15px;
    font-weight : bold;
    margin-left : 10px;
    margin-top : 5px;
`;
const Container_1_c2_detail_3_text3 = styled.div`
    // background : blue;
    height : 100%;
    width : 60px;

    display : flex;
    align-items : center;
    font-size : 13px;
    font-weight : bold;
    color : #b6b6b6;
`;
const Container_1_c2_btn = styled.div`
    // background : blue;
    height : 65px;
    width : 580px;

    display : flex;
    justify-content : space-between;
    font-size : 13px;
    font-weight : bold;
    color : #b6b6b6;
    margin-top : 15px;
`;
const Container_1_c2_btn_1_false = styled.button`
    background : #d7d7d7;
    height : 100%;
    width : 180px;

    display : flex;
    justify-content : center;
    align-items : center;

    font-size : 17px;
    font-weight : bold;
    color : white;

    border : none;
    border-radius : 5px;
    outline : none;

    cursor : pointer;
`;
const Container_1_c2_btn_1_true = styled.button`
    background : #e5ff00;
    height : 100%;
    width : 180px;

    display : flex;
    justify-content : center;
    align-items : center;

    font-size : 17px;
    font-weight : bold;
    color : #00ff6a;

    border : none;
    border-radius : 5px;
    outline : none;

    cursor : pointer;

`;
const Container_1_c2_btn_2 = styled.button`
    background : #435DF1;
    height : 100%;
    width : 180px;

    display : flex;
    justify-content : center;
    align-items : center;

    font-size : 17px;
    font-weight : bold;
    color : white;

    border : none;
    border-radius : 5px;
    outline : none;

    cursor : pointer;

`;
const Container_1_c2_btn_3 = styled.button`
    background : #ff002b;
    height : 100%;
    width : 180px;

    display : flex;
    justify-content : center;
    align-items : center;

    font-size : 17px;
    font-weight : bold;
    color : white;

    border : none;
    border-radius : 5px;
    outline : none;

    cursor : pointer;
`;


export default Post;