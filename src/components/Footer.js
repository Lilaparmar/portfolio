import React from 'react'
import { Link } from 'react-router-dom'


const Footer = () => {
  return (
    <div className='footer'>
      <h5 style={{
        fontSize: "1.25rem",
        marginLeft: "43px",
        marginTop: "8px",
        fontFamily: " ui-monospace"
      }}> FOLLOW US ON </h5>
      <div className='line' style={{
        fontSize: '19px',
        marginLeft: "75px",
    marginBottom: "35px"
}}>____________ </div>
      <ul className='foot-list'>
        <li className='foot-item'>
          <h3><a href="http://www.facebook.com/">
          <i class="fa fa-facebook-square"></i></a></h3>
          </li>
        <li className='foot-item'>
         <h3><a href="http://www.gamil.com"><i class="fa fa-envelope"></i></a></h3>
        </li>
        <li className='foot-item'>
        <h3> <a href=""><i class="fa fa-twitter-square"></i></a></h3> 
        </li>
        <li className='foot-item'>
         <h3><a href=""><i class="fa fa-linkedin"></i></a></h3> 
        </li>
        <li className='foot-item'>
          <h3><a href=""><i class="fa fa-github-square"></i></a></h3>
        </li>
        <li className='foot-item'>
          <h3 ><a href=""><i class="fa fa-whatsapp"></i></a></h3>
        </li>
      </ul>
    </div>
  )
}

export default Footer
