import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import styled from 'styled-components';
import Header from '../components/header';
import Footer from '../components/footer';
import appStore from '../store/appStore';

const Mypage = () => {

    return (
        <div>
            <Header />
            <Footer/>
        </div>
    );
};

export default Mypage;