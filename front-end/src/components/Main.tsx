import React, { useState } from 'react';
import styled from 'styled-components';
import Header from './header/header';


const Main = () => {
    const [isFocused_1, setIsFocused_1] = useState(false);
    const [isFocused_2, setIsFocused_2] = useState(false);
    const [isFocused_3, setIsFocused_3] = useState(false);
    const [isFocused_4, setIsFocused_4] = useState(false);

    return (
        <div>
            <Header />
            {/* <Divd></Divd> */}
            <Block_1 className={isFocused_1 ? 'focused_1' : ''} onMouseEnter={() => setIsFocused_1(true)} onMouseLeave={() => setIsFocused_1(false)}>
                <img src="/image/block_1_img.png" style={{ width: "90px", height: "80px", marginTop : "45px", marginLeft : "37px"}}></img>
            </Block_1>
            <Block_2 className={isFocused_2 ? 'focused_2' : ''} onMouseEnter={() => setIsFocused_2(true)} onMouseLeave={() => setIsFocused_2(false)}>
                <img src="/image/block_2_img.png" style={{ width: "70px", height: "70px", marginTop : "45px", marginLeft : "45px"}}></img>
            </Block_2>
            <Block_3 className={isFocused_3 ? 'focused_3' : ''} onMouseEnter={() => setIsFocused_3(true)} onMouseLeave={() => setIsFocused_3(false)}>
                <img src="/image/block_3_img.png" style={{ width: "80px", height: "80px", marginTop : "40px", marginLeft : "50px"}}></img>
            </Block_3>
            <Block_4 className={isFocused_4 ? 'focused_4' : ''} onMouseEnter={() => setIsFocused_4(true)} onMouseLeave={() => setIsFocused_4(false)}>
                <img src="/image/block_4_img.png" style={{ width: "80px", height: "80px", marginTop : "40px", marginLeft : "43px"}}></img>
            </Block_4>
            <Focus_1 className={isFocused_1 ? 'focused_1' : ''}>
                <Title_1 className={isFocused_1 ? 'focused_1' : ''}>여러 게시글을 보며<br/>계약을 진행해보세요!</Title_1>
            </Focus_1>
            <Focus_2 className={isFocused_2 ? 'focused_2' : ''}>
                <Title_2 className={isFocused_2 ? 'focused_2' : ''}>사람들과 공유할 수 있는<br/>계약서를 작성해보세요!</Title_2>
            </Focus_2>
            <Focus_3 className={isFocused_3 ? 'focused_3' : ''}>
                <Title_3 className={isFocused_3 ? 'focused_3' : ''}>당신의 계약 상황을 확인해보세요!</Title_3>
            </Focus_3>
            <Focus_4 className={isFocused_4 ? 'focused_4' : ''}>
                <Title_4 className={isFocused_4 ? 'focused_4' : ''}>사람들과 소통해요!</Title_4>
            </Focus_4>
        </div>
    );
};
// const Divd = styled.div`
//     position : absolute;
//     background : red;
//     height: 340px;
//     width: 340px;

//     top : 50%;
//     left : 50%;
//     transform: translate(-50%, -50%);

// `;
const Block_1 = styled.div`
    position: absolute;
    background: linear-gradient(to right, #8BF5FD, #B0F4F7);
    height: 165px;
    width: 165px;

    top : 50%;
    left : 50%;
    transform: translate(-50%, -50%);
    margin-left: -88px;
    margin-top: -88px;

    border-radius: 20px;
    box-shadow: 0px 0px 30px 0px #8BF5FD;
    cursor: pointer;

    &.focused_1 {
        z-index : 1;
    }
`;
const Block_2 = styled.div`
    position: absolute;
    background: linear-gradient(to right, #8BF5FD, #B0F4F7);
    height: 165px;
    width: 165px;

    top : 50%;
    left : 50%;
    transform: translate(-50%, -50%);
    margin-left: 88px;
    margin-top: -88px;

    border-radius: 20px;
    box-shadow: 0px 0px 30px 0px #8BF5FD;
    cursor: pointer;

    &.focused_2 {
        z-index : 1;
    }
`;
const Block_3 = styled.div`
    position: absolute;
    background: linear-gradient(to right, #8BF5FD, #B0F4F7);
    height: 165px;
    width: 165px;

    top : 50%;
    left : 50%;
    transform: translate(-50%, -50%);
    margin-left: -88px;
    margin-top: 88px;

    border-radius: 20px;
    box-shadow: 0px 0px 30px 0px #8BF5FD;
    cursor: pointer;

    &.focused_3 {
        z-index : 1;
    }
`;
const Block_4 = styled.div`
    position: absolute;
    background: linear-gradient(to right, #8BF5FD, #B0F4F7);
    height: 165px;
    width: 165px;

    top : 50%;
    left : 50%;
    transform: translate(-50%, -50%);
    margin-left: 88px;
    margin-top: 88px;

    border-radius: 20px;
    box-shadow: 0px 0px 30px 0px #8BF5FD;
    cursor: pointer;

    &.focused_4 {
        z-index : 1;
    }
`;
const Focus_1 = styled.div`
    position : absolute;
    height: 100%;
    width: 100%;
    z-index : -1;
    opacity : 0;
    transition: opacity 0.5s ease;
    &.focused_1 {
        background-color: rgba(0, 0, 0, 0.9);
        opacity : 1;
        z-index : 0;
    }
`;
const Focus_2 = styled.div`
    position : absolute;
    height: 100%;
    width: 100%;
    z-index : -1;
    opacity : 0;
    transition: opacity 0.5s ease;
    &.focused_2{
        background-color: rgba(0, 0, 0, 0.9);
        opacity : 1;
        z-index : 0;
    }
`;
const Focus_3 = styled.div`
    position : absolute;
    height: 100%;
    width: 100%;
    z-index : -1;
    opacity : 0;
    transition: opacity 0.5s ease;
    &.focused_3{
        background-color: rgba(0, 0, 0, 0.9);
        opacity : 1;
        z-index : 0;
    }
`;
const Focus_4 = styled.div`
    position : absolute;
    height: 100%;
    width: 100%;
    z-index : -1;
    opacity : 0;
    transition: opacity 0.5s ease;
    &.focused_4{
        background-color: rgba(0, 0, 0, 0.9);
        opacity : 1;
        z-index : 0;
    }
`;
const Title_1 = styled.div`
    position : absolute;
    
    top : 50%;
    left : 50%;
    transform: translate(-50%, -50%);
    margin-left: -246px;
    margin-top: -88px;

    text-align: right; /* 텍스트를 오른쪽으로 정렬 */
    font-size : 12px;
    font-weight : bold;
    color : #ffffff;

    z-index : -1;
    opacity : 0;
    transition: opacity 0.5s ease;
    &.focused_1{
        background-color: rgba(0, 0, 0, 0.9);
        opacity : 1;
        z-index : 0;
    }
`;
const Title_2 = styled.div`
    position : absolute;
    
    top : 50%;
    left : 50%;
    transform: translate(-50%, -50%);
    margin-left: 255px;
    margin-top: -88px;

    text-align: left; /* 텍스트를 오른쪽으로 정렬 */
    font-size : 12px;
    font-weight : bold;
    color : #ffffff;

    z-index : -1;
    opacity : 0;
    transition: opacity 0.5s ease;
    &.focused_2{
        background-color: rgba(0, 0, 0, 0.9);
        opacity : 1;
        z-index : 0;
    }
`;
const Title_3 = styled.div`
    position : absolute;
    
    top : 50%;
    left : 50%;
    transform: translate(-50%, -50%);
    margin-left: -280px;
    margin-top: 88px;

    text-align: left; /* 텍스트를 오른쪽으로 정렬 */
    font-size : 12px;
    font-weight : bold;
    color : #ffffff;

    z-index : -1;
    opacity : 0;
    transition: opacity 0.5s ease;
    &.focused_3{
        background-color: rgba(0, 0, 0, 0.9);
        opacity : 1;
        z-index : 0;
    }
`;
const Title_4 = styled.div`
    position : absolute;
    
    top : 50%;
    left : 50%;
    transform: translate(-50%, -50%);
    margin-left: 240px;
    margin-top: 88px;

    text-align: left; /* 텍스트를 오른쪽으로 정렬 */
    font-size : 12px;
    font-weight : bold;
    color : #ffffff;

    z-index : -1;
    opacity : 0;
    transition: opacity 0.5s ease;
    &.focused_4{
        background-color: rgba(0, 0, 0, 0.9);
        opacity : 1;
        z-index : 0;
    }
`;




export default Main;