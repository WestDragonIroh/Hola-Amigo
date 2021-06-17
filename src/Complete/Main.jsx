import React from "react";
import { BrowserRouter , Switch , Route , Redirect } from "react-router-dom";
import Home from "./Home";
import Contact from "./Contact";
import About from "./About";
import Services from "./Services";
import Navbar from "./Navbar";
import Footer from "./Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import "./Main.css"


const Main = () => {
    return(
    <>
        <BrowserRouter>
            <Navbar /> 
            <Switch>
                <Route exact path = "/" component={Home} />
                <Route exact path = "/contact" component={Contact} />
                <Route exact path = "/about" component={About} />
                <Route exact path = "/service" component={Services} />
                <Redirect to = "/" />
            </Switch>
            <Footer />
        </BrowserRouter>
    </>
    )
}

export default Main