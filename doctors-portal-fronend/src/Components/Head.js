import React, {Components} from "react";
import { Link } from "react-router-dom";

const Head = () => {
    return(
        <div>
            <Link to="/">Doctorinfo</Link>
            <Link to="/emergency">Emergency</Link>
            <Link to="/contact">Contact</Link>
            {/* <Link to="/color">Color State</Link> */}
           {/*  <Link to="/effect">Effect State</Link>
            <Link to="/allposts">All Posts</Link>
            <Link to="/apiproducts">All Products</Link>
            <Link to="/login">Login</Link>
            <Link to="/logout">Log out</Link> */}
        </div>
    )
}
export default Head;