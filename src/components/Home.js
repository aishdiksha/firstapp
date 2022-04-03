// 1. You must create a Function
// 2. Function names should start with uppercase letter
// 3. Function should contain a top level return statement with atleast single tag
// 4. Function should be exported and then added to the App.js file


import React from 'react';
import "./Home.css";

const Home = () => {

     let myhobbies = "shopping and travelling";

     const btnStyles = {
           background : "purple",
           borderRadius : "5px",
           border : "none",
           color : "white",
           padding : "20px",
           borderShadow : "2px 2px 2px 1px #00000055",
           margin : "10px"
     };

     const btn1 = (
            <button style={{background : "darkblue" , color : "white" , padding : "10px" , margin : "10px"}}> A Custom Button</button>
     );

     const btn2 = <button style={btnStyles}>Click me</button>;

  return (
    <div>
        
        {btn1}
        <h1 className='mytext'>Home component</h1>
        <p className='mypro'>Home other text</p>
       <h2>{myhobbies}</h2>
        {btn2}
               
    </div> 
  );
};

export default Home;