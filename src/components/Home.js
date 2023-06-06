import React from 'react'
import Footer from './Footer'

const Home = () => {
  return (
    <><div id='rooty'>
      <div className='container ' >
        <div >
          <div className='img'>

            <img className='oca' src={require('./photo.png')} alt="Image1" />
            <p style={{
              color: 'white', display: "inline",
              margin: "54px",
              marginTop: "180px",
              fontFamily: 'monospace'
            }}>

              <h2 style={{
                margin: "auto",
                color: "white",
                font: "700 normal 2.5em 'tahoma'",
                textShadow: "5px 2px #222324, 2px 4px #222324, 3px 5px #222324",
                fontFamily: "monospace"
              }}>
                <span>P</span>
                <span>A</span>
                <span>R</span>
                <span>M</span>
                <span>A</span>
                <span>R</span>
                <span> </span>
                <span>L</span>
                <span>I</span>
                <span>L</span>
                <span>A</span>
                </h2>
              <h3>I'm a Devloper.</h3>

              <button className='buten'>Downloade Resume</button> </p>
          </div>
        </div >

        <aside >
          <p style={{color:"white"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus magssimos ducimus nemo at perferendis hic velit, distinctio porro dicta. Nobis, autem! Fugiat, itaque?</p>
          <a class="btn  btn-dark" link="#" role="button">Download CV</a>
        </aside>
      </div >
     <Footer/>
     </div>
    </>
    
  )
}

export default Home
