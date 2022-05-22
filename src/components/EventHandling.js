import React, { useState } from "react";

const EventHandling = () => {
  // const myImg =
    const[myImg,setMyImg] = useState("https://cdn11.bigcommerce.com/s-dw3tqjqzk0/images/stencil/1280x1280/products/1979/2822/167398M__83000.1548527182__22710.1553218369.jpg?c=2");

  function handleClick() {
    alert("you click the wrong button");
  }

  let c = 1;

  const updateCount = () => {
    c++;
    console.log(c);
  };

  const [count, setCount] = useState(10);
  const [email,setEmail] = useState("");

  const updateState = () => {
    setCount(count + 1);
    console.log(count);
  };

  return (
    <div className="container">
      <h1 className="text-center">Event Handling</h1>
      <hr />
      <button
        className="btn btn-success mt-5 mb-5"
        onClick={() => {
          console.log("clicked!!");
        }}
      >
        Click me
      </button>

      <button className="btn btn-danger" onClick={handleClick}>
        Don't Click
      </button>

      <h1> C : {c}</h1>
      <button className="btn btn-primary" onClick={updateCount}>
        Add Count
      </button>

      <h1>State Variable : {count} </h1>
      <button className="btn btn-warning" onClick={updateState}>
        Increment State
      </button>

      <input
        className="form-control mt-5"
        onChange={(e) => {
          console.log("value change");
          console.log(e.target.value);
          setEmail(e.target.value);
        }}
      />

      <h2>{email}</h2>


      <input   className="form-control" onChange={(e) => {
        setMyImg(e.target.value);
      }}
      value={myImg}
      />
      <img src={myImg} alt="" />
      
    </div>
  );
};

export default EventHandling;
 

