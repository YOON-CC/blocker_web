import React, { useState, useEffect} from 'react';
import { Link, useNavigate } from "react-router-dom";
import styled from 'styled-components';
import Header from '../components/header';
import Footer from '../components/footer';
import axios from 'axios';

const Postedit = () => {
    const access_token = localStorage.getItem('access-token');
    console.log(access_token)
    const boardId = localStorage.getItem('boardId');


    //게시글객체 기본 정보
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


    //로컬에서 이미지 가져오는 코드
    const [selectedImages, setSelectedImages] = useState<File[]>([]);

    const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const selectedFiles = event.target.files;
        if (selectedFiles) {
            const newSelectedImages = Array.from(selectedFiles).filter(file => file.type === 'image/png');
            setSelectedImages(prevImages => [...prevImages, ...newSelectedImages]);
        }
    };

    //png 파일을 서버에 보내고 주소를 받는 코드
    const [images, setImages] = useState<string[]>([]);
    const handlePngToUrl = async () => {
        if (selectedImages.length === 0) {
            return;
        }
        
        try {
            const formData = new FormData();
            const lastIndex = selectedImages.length - 1; 
            formData.append('image', selectedImages[lastIndex], 'image.png'); // 마지막 이미지만 추가
            console.log(formData)
            const response = await axios.post(`${process.env.REACT_APP_API_URL}/images`,
                formData,
                {
                    headers: {
                        'Authorization': access_token,
                        'Content-Type': 'multipart/form-data'
                    }
                }
            );
            // 서버 응답 처리 코드
            if (response.status == 201){
                setImages(prevImages => [...prevImages, response.data.address]);
            }

        } catch (error) {
            // 에러 처리 코드
            console.error('Error uploading images:', error);
        }
    };

    useEffect(() => {
        // 페이지가 로드될 때 한 번만 호출되는 로직
        handlePngToUrl();
    }, [selectedImages]);

    // 전체 데이터 전송 코드
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const handletitleChange = (event : any) => {
        setTitle(event.target.value)
    };

    const handlecontentChange = (event : any) => {
        setContent(event.target.value)
    };

    const handleBoardEdit = async (event : any) => {
        event.preventDefault();
        console.log(images)
        try {
            const response = await axios.patch(`${process.env.REACT_APP_API_URL}/boards/${boardId}`, {
                title: title,
                content : content,
                info : "부산 남구 대연동 부경대학교",
                representImage : images[0],
                contractId : 1,
                deleteImageIds : removeImg,
                addImageAddresses : images,
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


    //삭제할 이미지
    const [removeImg, setRemoveImg] = useState<number[]>([]);

    const handleImageClick = (number: number) => {
        if (removeImg.includes(number)) {
            // 이미 선택된 숫자라면 선택 해제
            setRemoveImg(removeImg.filter(item => item !== number));
        } else {
            // 선택되지 않은 숫자라면 선택 추가
            setRemoveImg([...removeImg, number]);
        }
    };

    console.log(removeImg)

    return (
        <div>
            <Header />
            <Container>
                <Container_tip>EDIT</Container_tip>
                <Container_title placeholder={postObject_title} onChange={handletitleChange}></Container_title>
                <Container_default_img>
                    {postObject_images_idx.map((id, index) => (
                        <div key={id} onClick={() => handleImageClick(index)}>
                            <img src={postObject_images_addr[index]} alt="이미지" style={{ width: '50px', height: '50px', marginLeft: '15px', cursor : 'pointer'}}/>
                        </div>
                    ))}
                </Container_default_img>
                <Container_img_select>
                    {selectedImages.map((image, index) => (
                        <div key={index}>
                            <Container_img src={URL.createObjectURL(image)} alt={`Selected ${index}`} style={{ width: 'fit-content', height: '50px', marginRight : '30px'}}></Container_img>
                        </div>
                    ))}
                    <StyledLabel htmlFor="upload">+</StyledLabel>
                    <Container_img_select_btn type="file" accept="image/png" multiple onChange={handleImageChange} id="upload"></Container_img_select_btn>
                </Container_img_select>
                <Container_info_container>
                    <Container_info_container_select_location></Container_info_container_select_location>
                    <Container_info_container_select_contract></Container_info_container_select_contract>
                </Container_info_container>
                <Container_content placeholder={postObject_content} onChange={handlecontentChange}></Container_content>
                <form onSubmit={handleBoardEdit}>
                    <Container_btn_container>
                        <StyledLink to={`/board/${boardId}`} style={{ textDecoration: 'none' }}>
                            <Container_btn_container_b1>취소</Container_btn_container_b1>
                        </StyledLink>
                        <Container_btn_container_b2>작성</Container_btn_container_b2>
                    </Container_btn_container>
                </form>
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
const Container_default_img = styled.div`
    height: 55px;
    width: 587px;

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
    padding-top : 4px;

    border-radius : 4px;
`;
const Container_img_select = styled.div`
    height: 100px;
    width: 596px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 12px;
    font-weight: bold;
    color: white;
    margin-top: 10px;
    border-radius: 4px;
    border: 2px dotted #e3e3e3;
    overflow-y: hidden; 
    overflow-x: auto; 

    // background : #f0f0f0;
`;
const Container_img = styled.img`
    position: relative;
    width: fit-content;
    height: 50px;
    margin-right: 30px;
    cursor: pointer;
    transition: filter 0.3s; /* 효과 전환 시간 설정 */

    &:hover {
        filter: brightness(0.3); /* 호버 시 필터 적용 */
    }
`;
const StyledLabel = styled.label`
    padding-left: 9px;
    padding-right: 9px;
    padding-bottom: 5px;
    background-color: #e3e3e3;
    color: #fff;
    border-radius: 4px;
    cursor: pointer;

    font-size : 20px;
    

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


export default Postedit;