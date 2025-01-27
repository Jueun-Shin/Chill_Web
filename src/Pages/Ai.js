import styled from "styled-components";
import React from "react";

import MyButton from './../Components/button';
import Image from "./../Components/Image";
import Upload_ment from "./../Components/upload_ment";
import { Link } from "react-router-dom";

const Ai = () => {

    return (
        <Wrapper>
            <Upload_ment></Upload_ment>
            <Image/>


            <Link to = {"/Ai_complete"}>
                <MyButton
                    text={"START"}
                />
            </Link>  
        </Wrapper>
    );
};

export default Ai;

const Wrapper = styled.div`
& > button {
    margin-top: 10px;
}
`