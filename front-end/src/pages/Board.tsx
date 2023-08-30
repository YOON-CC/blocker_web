import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from "react-router-dom";
import styled from 'styled-components';
import Header from '../components/header';
import Footer from '../components/footer';
import axios from 'axios';
interface BoardItem {
    boardId: number;
    bookmarkCount : number;
    content : string;
    createdAt : string;
    modifiedAt : string;
    name : string;
    representImage : string;
    title : string;
    view : number;
}

const Board = () => {
    const [boardData, setBoardData] = useState<BoardItem[]>([]); 


    const access_token = localStorage.getItem('access-token');
    console.log(access_token)

    const handleBoardList = async () => {

        try {
            const response = await axios.get(`${process.env.REACT_APP_API_URL}/boards`, {
                params: {
                    size: 8,
                    page: 0,
                },
                headers: {
                    'Authorization': access_token,
                }
            });

            console.log(response.data)
            if (response.status === 200) {
                console.log("옴")
                setBoardData(response.data);
            }

        } catch (error) {

        }

    };

    useEffect(() => {
        // 페이지가 로드될 때 한 번만 호출되는 로직
        handleBoardList();
    }, []);


    return (
        <div>
            <Container>
                <Header></Header>
                <Container_main>
                    <Container_main_text_container>
                        <Container_main_title>
                            비대면 계약 서비스 BLOCKER를 통해 다양한 계약서들을 만나보세요!
                        </Container_main_title>
                        <Container_main_content>
                            간편하게 게시글을 올리기나, 현재 진행중인 계약을 확인 수 있고, 채팅을 통해서 다른 사람과의 계약을 진행할 수 있습니다. 
                        </Container_main_content>
                        <Container_main_btn>
                            <StyledLink to="/postwrite" style={{ textDecoration: 'none' }}>
                                <Container_main_btn_1>게시글 작성하기</Container_main_btn_1>
                            </StyledLink>
                            <StyledLink to="/contracts" style={{ textDecoration: 'none' }}>
                                <Container_main_btn_2>진행상황 보러가기</Container_main_btn_2>
                            </StyledLink>
                        </Container_main_btn>
                    </Container_main_text_container>
                </Container_main>
                <Container_board_frame>
                    {boardData.map((item, index) => (
                        <StyledLink to={`/board/${item.boardId}`} style={{ textDecoration: 'none' }} onClick={() => localStorage.setItem("boardId", item.boardId.toString())}>
                            <Container_board_item key={index}>
                                <Container_board_item_info>
                                    <img src="../image/see.png" style={{ width: "18px", height: "18px", marginTop:"1px", marginRight:"4px"}}></img>
                                    {item.view}
                                    <img src="../image/bookmark.png" style={{ width: "15px", height: "15px",marginTop:"2px", marginRight:"2px", marginLeft : "7px"}}></img>
                                    {item.bookmarkCount}
                                </Container_board_item_info>
                                <Container_board_title_frame>
                                    {item.title}
                                </Container_board_title_frame>
                                <Container_board_content_frame>
                                    {item.content}
                                </Container_board_content_frame>
                                <Container_board_line>

                                </Container_board_line>
                                <Container_board_profile>
                                    <Container_board_profile_img>
                                        {/* 이미지가 들어가야 하는 부분 */}
                                        <img src="../image/profile.jpg" style={{ width: "100%", height: "100%"}}></img>
                                    </Container_board_profile_img>
                                    <Container_board_profile_frame>
                                        <Container_board_profile_user_info1>
                                            {item.name}
                                        </Container_board_profile_user_info1>
                                        <Container_board_profile_user_info2>
                                            게시일 : {item.createdAt.split("T")[0]}
                                        </Container_board_profile_user_info2>
                                        <Container_board_profile_user_info3>
                                            수정일 : {item.modifiedAt.split("T")[0]}
                                        </Container_board_profile_user_info3>
                                    </Container_board_profile_frame>
                                </Container_board_profile>
                            </Container_board_item>
                        </StyledLink>
                    ))}
                </Container_board_frame>
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
    // background : red;
    height: fit-content;
    width: 100%;
`;
const Container_main = styled.div`
    // position : relative;
    background : #e8edf1;
    position : relative;
    height: 400px;
    width: 100%;
`;
const Container_main_text_container = styled.div`
    position : absolute;
    // background : green;
    height: 200px;
    width: 100%;
    margin-top:180px;

`;
const Container_main_title = styled.div`
    postion:relative;
    // background : red;
    height: fit-content;
    width: 100%;
    
    display:flex;
    align-items : center;
    justify-content : center;

    font-size : 25px;
    font-weight : bold;
`;
const Container_main_content = styled.div`
    // background : aqua;
    height: 40px;
    width: 100%;
    color : #252525;

    display:flex;
    align-items : center;
    justify-content : center;
`;
const Container_main_btn = styled.div`
    // background : aqua;
    height: 50px;
    width: 100%;
    color : #252525;

    display:flex;
    align-items : center;
    justify-content : center;

    margin-top : 20px;
`;
const Container_main_btn_1 = styled.div`
    background : black;
    height: 50px;
    width: 180px;
    color : #ffffff;

    display:flex;
    align-items : center;
    justify-content : center;
    margin-right:10px;

    border-radius : 7px;

    font-weight:bold;

    cursor : pointer;
`;
const Container_main_btn_2 = styled.div`
    background : black;
    height: 50px;
    width: 180px;
    color : #ffffff;

    display:flex;
    align-items : center;
    justify-content : center;
    margin-left:10px;

    border-radius : 7px;

    font-weight:bold;
    cursor : pointer;

`;
const Container_board_frame = styled.div`
    position : absolute;
    // background : aqua;

    height: fit-content;
    height : fit-content;
    width: 1300px;

    left : 50%;
    transform : translate(-50%);

    display : flex;
    flex-wrap: wrap;
`;
const Container_board_item = styled.div`
    background : white;
    width : 300px;
    height : 350px;
    margin-top : 20px;
    margin-left : 20px;
    border-radius : 3px;
    box-shadow: 2px 2px 10px 1px rgb(196, 196, 196);
    &:hover {
        filter: brightness(95%); 
        cursor : pointer;
    }
`;
const Container_board_item_info = styled.div`
    position : relative;
    height : 35px;
    width : 290px;
    // background : red;
    display: flex;
    justify-content: flex-end; /* 자식 요소들을 오른쪽 끝으로 정렬 */
    font-size : 14px;
    padding-right : 10px;
    margin-top : 10px;
    
`;
const Container_board_item_info_item = styled.div`
    // background : blue;
    height : 100%;
    width : fit-content;
    display : flex;
    align-items:center;
    justify-content : center;

    font-size : 13px;
    font-weight:bold;
    
    margin-right : 7px;
`;
const Container_board_title_frame = styled.div`
    // background : aqua;
    height : 60px;
    width : 280px;
    
    display : flex;
    justify-content : center;
    align-items:center;
    
    font-size : 23px;
    font-weight:bold;
    padding-left : 10px;
    padding-right : 10px;

    margin-top:10px;
`;
const Container_board_content_frame = styled.div`
    // background : red;
    height : 70px;
    width : 280px;
    width : fit-content;
    display : flex;
    align-items:center;
    justify-content : center;

    color: #9c9c9c;
    font-size : 13px;
    font-weight:bold;

    padding-left : 10px;
    padding-right : 10px;
`;
const Container_board_line = styled.div`
    background : #d1d1d1;
    height : 2px;
    width : 280px;  
    display : flex;
    align-items:center;
    justify-content : center;

    font-size : 13px;
    font-weight:bold;
    margin-left : 10px;
    margin-top : 5px;
`;
const Container_board_profile = styled.div`
    // background : #d1d1d1;
    height : 135px;
    width : 280px;  
    display : flex;

    margin-top : 10px;
    margin-left : 10px;
    margin-right : 10px;
`;
const Container_board_profile_img = styled.div`
    // background : red;
    width : 140px;
    height : 100%;
`;
const Container_board_profile_frame = styled.div`
    // background : aqua;
    height : 100%;
    width : 140px;  
`;
const Container_board_profile_user_info1 = styled.div`
    // background : red;
    width : 140px;
    height : 20px;
    margin-top : 32px;

    display : flex;
    justify-content : center;
    align-items : center;

    font-size : 16px;
    font-weight:bold;
`;
const Container_board_profile_user_info2 = styled.div`
    // background : red;
    width : 140px;
    height : 20px;

    display : flex;
    justify-content : center;
    align-items : center;

    font-size : 13px;
    font-weight:bold;
    color : #d1d1d1;

    margin-top : 10px;
`;

const Container_board_profile_user_info3 = styled.div`
    // background : red;
    width : 140px;
    height : 20px;

    display : flex;
    justify-content : center;
    align-items : center;

    font-size : 13px;
    font-weight:bold;
    color : #d1d1d1;
`;



export default Board;