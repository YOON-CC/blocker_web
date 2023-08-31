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
    const [postObject_images_idx, setPostObject_images_idx] = useState([]); 
    const [postObject_images_addr, setPostObject_images_addr] = useState([]); 

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
                setPostObject_images_idx(response.data.images.map((image: { imageId: number; }) => image.imageId));
                setPostObject_images_addr(response.data.images.map((image: { imageAddress: string; }) => image.imageAddress));
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

    //이미지 클릭 확대
    const [modalImage, setModalImage] = useState(null);

    const handleImageClick = (index : any) => {
        const imageUrl = postObject_images_addr[index];
        setModalImage(imageUrl);
    };

    const handleCloseModal = () => {
        setModalImage(null);
    };

    //게시글 삭제
    const handleBoardDelete = async (event: any) => {
        event.preventDefault();
    
        try {
            const response = await axios.delete(`${process.env.REACT_APP_API_URL}/boards/${boardId}`, // 경로 변수 사용
                {
                    headers: {
                        Authorization: access_token,
                    },
                }
            );
            console.log(response.status)

        } catch (error) {
            // 에러 처리 코드 추가
        }
    };
    return (
        <div>
            <Header/>
            {postObject_isWriter === true && 
                <Edit_container>
                    <Edit_container_btn_container>
                        <StyledLink to={`/postedit/${boardId}`} style={{ textDecoration: 'none' }}>
                            <Edit_container_b1>편집</Edit_container_b1>
                        </StyledLink>
                        <form onSubmit={handleBoardDelete}>
                            <Edit_container_b2>삭제</Edit_container_b2>
                        </form>
                    </Edit_container_btn_container>
                </Edit_container>
            }
            <Container_1>
                {modalImage && (
                    <ModalContainer onClick={handleCloseModal}>
                        <ModalImage src={modalImage} alt="확대 이미지" />
                    </ModalContainer>
                )}
                <Container_1_c1>
                {postObject_representImage ? (<img src={postObject_representImage} alt="이미지" style={{ width: '400px', height: '400px'}}/>
                ) : (<img src="../image/no_img.png" alt="대체 이미지" style={{ width: '400px', height: '400px' }}/>)}
                </Container_1_c1>
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
            <Container_2>
                <Container_2_img_container>
                    {postObject_images_idx.map((id, index) => (
                        <div key={id} onClick={() => handleImageClick(index)}>
                            <img src={postObject_images_addr[index]} alt="이미지" style={{ width: '50px', height: '50px', marginLeft: '15px', cursor : 'pointer'}}/>
                        </div>
                    ))}
                </Container_2_img_container>
            </Container_2>
            <Container_3>
                <Container_3_content_container>
                    <Container_3_content_container_title>작성 내용</Container_3_content_container_title>
                    <Container_3_content_container_content>{postObject_content}</Container_3_content_container_content>
                </Container_3_content_container>
            </Container_3>
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
const Edit_container = styled.div`
    position : absolute;
    // background : red;
    height : 20px;
    width: 1000px;

    left : 50%;
    transform : translate(-50%);
    margin-top: 90px;
    display : flex;
    justify-content : end;

    // border : 1px solid #000000;
`;
const Edit_container_btn_container = styled.div`
    // position : absolute;
    // background : aqua;
    height : 20px;
    width: 95px;

    display : flex;
    justify-content : space-between;

    // border : 1px solid #000000;
`;
const Edit_container_b1 = styled.button`
    background : #e8edf1;
    height : 100%;
    width: 45px;

    font-size : 10px;
    font-weight : bold;
    color : grey;
    display : flex;
    justify-content : center;
    align-items : center;

    border-radius : 2px;
    cursor : pointer;
    border : none;
`;
const Edit_container_b2 = styled.button`
    background : #e8edf1;
    height : 100%;
    width: 45px;

    font-size : 10px;
    font-weight : bold;
    color : grey;
    display : flex;
    justify-content : center;
    align-items : center;

    border-radius : 2px;
    cursor : pointer;
    border : none;
`;
const Container_1 = styled.div`
    position : absolute;
    // background : red;
    height : 400px;
    width: 1000px;
    margin-top : 120px;
    left : 50%;
    transform : translate(-50%);

    display : flex;
    justify-content : space-between;

    // border : 1px solid #000000;
`;
const Container_1_c1 = styled.div`
    // background : red;
    height : 100%;
    width: 400px;
    display: flex;
    justify-content: center;
    align-items: center;
    border : 1px solid #e8edf1;

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
const Container_2 = styled.div`
    position : absolute;
    // background : blue;
    height : 50px;
    width : 100%;
    margin-top : 530px;


    display : flex;
    justify-content : space-between;

    // border : 1px solid #000000;
`;
const Container_2_img_container = styled.div`
    position : absolute;
    // background : #e8edf1;
    height : 100%;
    width : 1028px;
    display : flex;

    left : 50%;
    transform : translate(-50%);

`;
const Container_3 = styled.div`
    position : absolute;
    // background : red;
    height : 200px;
    width : 100%;
    margin-top : 600px;


    display : flex;
    justify-content : space-between;

    // border : 1px solid #000000;
`;
const Container_3_content_container = styled.div`
    position : relative;
    // background : aqua;
    height : 100%;
    width : 1000px;

    left : 50%;
    transform : translate(-50%);
`;
const Container_3_content_container_title = styled.div`
    // background : green;
    height : 45px;
    width : 100%;

    font-size : 25px;
    font-weight : bold;
    color : #b6b6b6;

    border-bottom : 1px solid #b6b6b6;
`;
const Container_3_content_container_content = styled.div`
    // background : red;
    height : fit-content;
    width : 100%;

    font-size : 15px;
    font-weight : bold;
    margin-top : 10px;
`;

const ModalContainer = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.8);
    backdrop-filter: blur(2.5px); 
`;

const ModalImage = styled.img`
    max-width: fit-content;
    max-height: 350px;
`;
export default Post;