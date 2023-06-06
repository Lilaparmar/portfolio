import React from 'react'
import { Link } from "react-router-dom";

function Contact() {
  return (
    <div style={{ display: 'flex', backgroundColor:'black' }}>
      <img className='contactimg' src={require('./contact.png')} alt="Image1" />
      <p className='contactpara'><b> Address:- </b>Dhantak Plaza, 203, 2nd Floor, Makwana Rd, Gamdevi, Marol, Andheri East, Mumbai, Maharashtra 400059 <br />
     <b>Email :</b> <Link to='#'> lilaparmar555@gmail.com</Link> <br />
     <b>Phone number :</b>9554445866 </p>
    </div>
  )
}

export default Contact
