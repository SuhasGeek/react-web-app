import React from "react"
import logo from "../assets/logo.png"
import close from "../assets/close.png"

const Header = ()=>{

    return(
        <div className="header"> 
        <img style={{height: '40px', width: '40px'}} src={logo}></img>
        <h4 style={{paddingTop:"10px"}}>Retirement </h4>
        <img style={{height: '30px', width: '30px', }} src={close}></img>
        
        
        </div>
    )
}
export default Header;