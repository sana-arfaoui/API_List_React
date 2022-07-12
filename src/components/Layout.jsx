import React from "react";
import { Outlet, Link } from "react-router-dom";
const Layout = () => {
    let activeStyle = {
        textDecoration: "none",
        color: "white",
    };
    return (
        <div >
            <nav >
                <div className=""> 
                <Link  className='link'to="/">Home</Link>
                <Link className='link' to="/users">Users</Link>
                
                
                </div>
            
            </nav>
            
            
            <Outlet />
        </div>
    );
};

export default Layout;
