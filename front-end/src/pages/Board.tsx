import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import styled from 'styled-components';
import Header from '../components/header';
import Footer from '../components/footer';


const Board = () => {


    return (
        <div>
            <Container>
                <Header></Header>
            </Container>
        </div>
    );
};
const Container = styled.div`
    background : red;
    position : relative;
    height: fit-content;
    width: 100%;
`;


export default Board;