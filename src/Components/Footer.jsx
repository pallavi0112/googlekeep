import React from "react";


const Footer = () =>{
    const year = new Date().getFullYear();
    return(
        <>
            <footer className="bg-light text-center p-1">
                <p className="fs-5 fw-semibold"> copyright &copy; {year} </p>
            </footer>
        </>
    )
}

export default Footer;