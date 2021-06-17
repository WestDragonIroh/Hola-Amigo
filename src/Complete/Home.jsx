import React from "react";
import { NavLink } from "react-router-dom";
import Common from "./Common"

const Home = () => {
    return(
        <>
            <Common
            name=" Grow your bussines "
            imgsrc="https://picsum.photos/seed/picsum/200/300"
            visit="/service"
            btname=" Get Started " 
            />
        </>
    )
}

export default Home