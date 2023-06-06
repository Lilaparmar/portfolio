import React from 'react'

const Skills = () => {
  return (
    <><div style={{ backgroundColor: "##5a9997", display: "flex" }}>
      <div style={{
        width: "25vw",
        display: "inline"
      }}> <h4 style={{ marginLeft: "78px", marginTop: "18px" , fontWeight:"bolder" }}>HTML</h4><img className='ski' style={{ marginTop: "-29px" , marginBottom:"10px" }} src={require('./html.png')} alt="Image1" />
        <img className='ski' src={require('./css.png')} alt="Image1" />
        <img className='ski' src={require('./javascript.png')} alt="Image1" />
        <img className='ski' src={require('./bootsrap.png')} alt="Image1" />
        <img className='ski' src={require('./php.png')} alt="Image1" />
      </div>
      <div style={{
        color: "white",
        backgroundImage: `url("https://i0.wp.com/bestpractice.biz/wp-content/uploads/2021/02/Maddie-banner-skill-set.png?fit=1200%2C628&ssl=1") `,
        width: "100vw",
        height: "100vh",
        marginLeft: "-5px",
  
        color:"black",
        fontWeight:"bolder",
        fontSize:"18px",
      
      }}><h5 style={{textAlign: "center",
      width: "34vh",
      marginTop: "225px",
      marginLeft: "58px",
      fontFamily: "inherit",
      /*textShadow: 35 40 black,*/
      fontSize: "25px"
  }}>
        “Never chase opportunities. Let it come to you by creating value and building rare skillsets.”
      </h5>
        
      </div>
      <div style={{ width: "25vw" }}>
        <img className='sky' src={require('./mongo.png')} alt="Image1" />
        <img className='sky' src={require('./sql.png')} alt="Image1" />
        <img className='sky' src={require('./node.png')} alt="Image1" />
        <img className='sky' src={require('./react.png')} alt="Image1" /></div>
    </div>

    </>
  )
}

export default Skills
