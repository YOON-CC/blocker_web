import React, { useState, useEffect, useRef  } from 'react';
import { Link, useNavigate } from "react-router-dom";
import styled from 'styled-components';
import Header from '../components/header';
import Footer from '../components/footer';
import appStore from '../store/appStore';
import { Element, animateScroll as scroll } from 'react-scroll'; 

interface AnimatedBoxProps {
    isVisible: boolean;
  }

const Main: React.FC = () => {
    const [isVisible1, setIsVisible1] = useState(false);
    const [isVisible2, setIsVisible2] = useState(false);
    const [isVisible3, setIsVisible3] = useState(false);
    const targetRef1 = useRef<HTMLDivElement | null>(null);
    const targetRef2 = useRef<HTMLDivElement | null>(null);
    const targetRef3 = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const options = {
            root: null,
            rootMargin: '0px',
            threshold: 0.5, // Change threshold to trigger animation when partially visible
        };

        const handleIntersect1: IntersectionObserverCallback = (entries) => {
            entries.forEach((entry) => {
                setIsVisible1(entry.isIntersecting);
            });
        };

        const handleIntersect2: IntersectionObserverCallback = (entries) => {
            entries.forEach((entry) => {
                setIsVisible2(entry.isIntersecting);
            });
        };
        const handleIntersect3: IntersectionObserverCallback = (entries) => {
            entries.forEach((entry) => {
                setIsVisible3(entry.isIntersecting);
            });
        };

        const observer1 = new IntersectionObserver(handleIntersect1, options);
        const observer2 = new IntersectionObserver(handleIntersect2, options);
        const observer3 = new IntersectionObserver(handleIntersect3, options);

        if (targetRef1.current) {
            observer1.observe(targetRef1.current);
        }

        if (targetRef2.current) {
            observer2.observe(targetRef2.current);
        }

        if (targetRef3.current) {
            observer3.observe(targetRef3.current);
        }

        return () => {
            observer1.disconnect();
            observer2.disconnect();
            observer3.disconnect();
        };
    }, []);
        
    return (
        <div>
            <Container>
                <Header />
                <Container_main>
                    <img src="./image/main_img.png" style={{ width: "1100px", height: "500px", marginTop:"70px"}}></img>
                </Container_main>
                <Container_1>
                    <Container_1_page_1>
                        <Container_1_page_1_element_1>
                            Introduce 
                        </Container_1_page_1_element_1>
                        <Container_1_page_1_element_2>
                            모두를 위한 비대면 계약 서비스
                        </Container_1_page_1_element_2>
                        <Container_1_page_1_element_3>
                            바쁜 삶과 스케줄때문에 대면 계약을 하지 못하신다면 BLOCKER를 <br/> 추천합니다. '블록체인 '을 적용한 안전한 비대면 서비스로 당신의 시간을  <br/> 절약하세요.
                        </Container_1_page_1_element_3>
                        <Container_1_page_1_element_4>
                            <img src="./image/enter_1.png" style={{ width: "30px", height: "30px", marginTop:"15px", marginLeft:"10px"}}></img>
                            <div style={{marginTop:"20px" , marginLeft:"10px"}}>자세히 보기</div>
                        </Container_1_page_1_element_4>
                    </Container_1_page_1>
                    <Container_1_page_2>
                        <AnimatedBox1 ref={targetRef1} isVisible={isVisible1}>
                            <img src="./image/temp_img.png" style={{ width: "600px", height: "360px", marginTop:"140px"}}></img>
                        </AnimatedBox1>
                    </Container_1_page_2>
                </Container_1>
                <Container_2>
                    <Container_2_page_1>
                        <AnimatedBox2 ref={targetRef2} isVisible={isVisible2}>
                            <img src="./image/temp_img2.png" style={{ width: "600px", height: "340px"}}></img>
                        </AnimatedBox2>
                    </Container_2_page_1>
                    <Container_2_page_2>
                        <Container_2_page_2_element_1>
                            SUPPORT
                        </Container_2_page_2_element_1>
                        <Container_2_page_2_element_2>
                            WEB & APP 지원
                        </Container_2_page_2_element_2>
                        <Container_2_page_2_element_3>
                            BLOCKER는 웹버전과 앱버전을 지원합니다. <br/> 다양한 디바이스를 통해 BLOCKER를 이용해보세요.
                        </Container_2_page_2_element_3>
                        <Container_2_page_2_element_4>
                            <img src="./image/enter_1.png" style={{ width: "30px", height: "30px", marginTop:"15px", marginLeft:"10px"}}></img>
                            <div style={{marginTop:"20px" , marginLeft:"10px"}}>자세히 보기</div>
                        </Container_2_page_2_element_4>
                    </Container_2_page_2>
                </Container_2>
                <Container_3>
                    <Container_3_page_1>
                        <Container_3_page_1_element_1>
                            function 
                        </Container_3_page_1_element_1>
                        <Container_3_page_1_element_2>
                            전자서명 & 실시간 채팅 & 분산원장 
                        </Container_3_page_1_element_2>
                        <Container_3_page_1_element_3>
                            법적효력이 있는 전자서명과 실시간채팅 그리고 분산원장을 통한 <br/> 안전한 서비스등 다양한 기능을 BLOCKER를 통해 만나요.
                        </Container_3_page_1_element_3>
                        <Container_3_page_1_element_4>
                            <img src="./image/enter_1.png" style={{ width: "30px", height: "30px", marginTop:"15px", marginLeft:"10px"}}></img>
                            <div style={{marginTop:"20px" , marginLeft:"10px"}}>자세히 보기</div>
                        </Container_3_page_1_element_4>
                    </Container_3_page_1>
                    <Container_3_page_2>
                        <AnimatedBox3 ref={targetRef3} isVisible={isVisible3}>
                            <img src="./image/temp_img.png" style={{ width: "600px", height: "360px", marginTop:"140px"}}></img>
                        </AnimatedBox3>
                    </Container_3_page_2>
                </Container_3>
            </Container>
        </div>
    );
};

const Container = styled.div`
    // background : red;
    position : relative;
    height: fit-content;
    width: 100%;
`;
const Container_main = styled.div`
    position : relative;
    background : #025CFB;
    width : 100%;
    height : 600px;
    display: flex;
    justify-content: center;
    align-items: center;
`;
const Container_1 = styled.div`
    position : relative;
    // background : blue;
    position : relative;
    width : 1200px;
    height : 650px;
    left:50%;
    transform : translate(-50%);
    display : flex;
`;
const Container_1_page_1 = styled.div`
    position : relative;
    // background : green;
    position : relative;
    width : 600px;
    height : 100%;
    border-right: 2px dotted  #dfdfdf;
`;
const Container_1_page_1_element_1 = styled.div`
    position : relative;
    // background : blue;
    position : relative;
    width : fit-content;

    display : flex;
    justify-content : center;
    align-items : center;

    color : #000000;
    font-size : 60px;
    // font-weight : bold;
    font-family: 'Rubik Mono One', sans-serif;
    // text-shadow: 2px 2px 1px #04D0E7; /* 그림자 스타일 지정 */

    margin-top : 165px;
    margin-left : -3px;
`;
const Container_1_page_1_element_2 = styled.div`
    position : relative;
    // background : blue;
    position : relative;
    width : fit-content;

    display : flex;
    justify-content : center;
    align-items : center;

    color : #435DF1;
    font-size : 17px;
    font-weight : bold;

    margin-top: 15px;
`;
const Container_1_page_1_element_3 = styled.div`
    position : relative;
    // background : blue;
    position : relative;
    width : fit-content;

    display : flex;
    justify-content : center;
    align-items : center;
    color : #A0A0A0;
    font-size : 17px;
    font-weight : bold;

    margin-top: 15px;
`;
const Container_1_page_1_element_4 = styled.div`
    position : relative;
    // background : blue;
    width : 150px;
    height : 60px;

    border : 1px solid #dfdfdf;
    border-radius : 4px;
    margin-top: 50px;

    display : flex;
    cursor : pointer;

    &:hover {
        background:#435DF1;
        color : #ffffff;
    }
    &:hover img {
        content: url('/image/enter_2.png'); /* 호버 시 이미지 변경 */
    }
`;
const Container_1_page_2 = styled.div`
    position : relative;
    // background : brown;
    position : relative;
    width : 600px;
    height : 100%;
`;
const Container_2 = styled.div`
  position: relative;
//   background: aqua;
  position: relative;
  width: 1200px;
  height: 650px;
  left: 50%;
  transform: translate(-50%);
  display : flex;
`;
const Container_2_page_1 = styled.div`
    position : relative;
    // background : green;
    position : relative;
    width : 599.5px;
    height : 100%;
    
`;
const Container_2_page_2 = styled.div`
    position : relative;
    // background : green;
    position : relative;
    width : 600.5px;
    height : 100%;
    border-left: 2px dotted  #dfdfdf;
`;
const Container_2_page_2_element_1 = styled.div`
    position : relative;
    // background : blue;
    position : relative;
    width : fit-content;

    display : flex;
    justify-content : center;
    align-items : center;

    color : #000000;
    font-size : 60px;
    // font-weight : bold;
    font-family: 'Rubik Mono One', sans-serif;
    // text-shadow: 2px 2px 1px #04D0E7; /* 그림자 스타일 지정 */

    margin-top : 200px;
    margin-left : 50px;
`;
const Container_2_page_2_element_2 = styled.div`
    position : relative;
    // background : blue;
    position : relative;
    width : fit-content;

    display : flex;
    justify-content : center;
    align-items : center;

    color : #435DF1;
    font-size : 17px;
    font-weight : bold;

    margin-top: 15px;
    margin-left : 53px;
`;
const Container_2_page_2_element_3 = styled.div`
    position : relative;
    // background : blue;
    position : relative;
    width : fit-content;

    display : flex;
    justify-content : center;
    align-items : center;
    color : #A0A0A0;
    font-size : 17px;
    font-weight : bold;

    margin-top: 15px;
    margin-left : 53px;
`;
const Container_2_page_2_element_4 = styled.div`
    position : relative;
    // background : blue;
    width : 150px;
    height : 60px;

    border : 1px solid #dfdfdf;
    border-radius : 4px;
    margin-top: 50px;

    display : flex;
    cursor : pointer;
    margin-left : 53px;

    &:hover {
        background:#435DF1;
        color : #ffffff;
    }
    &:hover img {
        content: url('/image/enter_2.png'); /* 호버 시 이미지 변경 */
    }
`;

const Container_3 = styled.div`
  position: relative;
//   background: aqua;
  position: relative;
  width: 1200px;
  height: 650px;
  left: 50%;
  transform: translate(-50%);
  display : flex;
`;
const Container_3_page_1 = styled.div`
    position : relative;
    // background : green;
    position : relative;
    width : 599.5px;
    height : 100%;
    border-right: 2px dotted  #dfdfdf;
`;
const Container_3_page_1_element_1 = styled.div`
    position : relative;
    // background : blue;
    position : relative;
    width : fit-content;

    display : flex;
    justify-content : center;
    align-items : center;

    color : #000000;
    font-size : 60px;
    // font-weight : bold;
    font-family: 'Rubik Mono One', sans-serif;
    // text-shadow: 2px 2px 1px #04D0E7; /* 그림자 스타일 지정 */

    margin-top : 165px;
    margin-left : -3px;
`;
const Container_3_page_1_element_2 = styled.div`
    position : relative;
    // background : blue;
    position : relative;
    width : fit-content;

    display : flex;
    justify-content : center;
    align-items : center;

    color : #435DF1;
    font-size : 17px;
    font-weight : bold;

    margin-top: 15px;
`;
const Container_3_page_1_element_3 = styled.div`
    position : relative;
    // background : blue;
    position : relative;
    width : fit-content;

    display : flex;
    justify-content : center;
    align-items : center;
    color : #A0A0A0;
    font-size : 17px;
    font-weight : bold;

    margin-top: 15px;
`;
const Container_3_page_1_element_4 = styled.div`
    position : relative;
    // background : blue;
    width : 150px;
    height : 60px;

    border : 1px solid #dfdfdf;
    border-radius : 4px;
    margin-top: 50px;

    display : flex;
    cursor : pointer;

    &:hover {
        background:#435DF1;
        color : #ffffff;
    }
    &:hover img {
        content: url('/image/enter_2.png'); /* 호버 시 이미지 변경 */
    }
`;
const Container_3_page_2 = styled.div`
    position : relative;
    // background : brown;
    position : relative;
    width : 600px;
    height : 100%;
`;

const AnimatedBox1 = styled.div<AnimatedBoxProps>`
  width: 100%;
  height:340px;
//   background-color: blue;
  position: absolute;
  opacity: ${props => (props.isVisible ? 1 : 0)};
  transition: opacity 1s ease-in-out;
//   margin-top : 170px;
`;
const AnimatedBox2 = styled.div<AnimatedBoxProps>`
  width: 100%;
  height:340px;
//   background-color: blue;
  position: absolute;
  opacity: ${props => (props.isVisible ? 1 : 0)};
  transition: opacity 1s ease-in-out;
  margin-top : 170px;
`;
const AnimatedBox3 = styled.div<AnimatedBoxProps>`
  width: 100%;
  height:340px;
//   background-color: blue;
  position: absolute;
  opacity: ${props => (props.isVisible ? 1 : 0)};
  transition: opacity 1s ease-in-out;
`;


export default Main;