import React from "react";
import { Link } from "react-router-dom";
// import GoogleAuth from "./GoogleAuth";
// import GoogleAuthGIS from "./GoogleAuthGIS";
import GoogleGIS from "./GoogleGIS";

const Header = () => {
    return(
        <div className="ui secondary pointing menu">
            <Link to="/" className="item">
                Ultimate Streaming App
            </Link>
            <div className="right menu">
                <Link to="/" className="item">
                    All streams
                </Link>
                {/* <GoogleAuthGIS /> */}
                <GoogleGIS />
            </div>
        </div>
    );
};

export default Header;