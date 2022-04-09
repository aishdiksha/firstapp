import React, { useState } from "react";

const Gallery = () => {
  const img1 =
    "https://thumbs.dreamstime.com/b/spring-flowers-blue-crocuses-drops-water-backgro-background-tracks-rain-113784722.jpg";

  const img2 =
    "https://thumbs.dreamstime.com/b/frangipani-flowers-10997030.jpg";
  const img3 =
    "https://www.thoughtco.com/thmb/U3uVJMsgzLd00DbkIicnnIYM_kM=/1414x1414/smart/filters:no_upscale()/lotus-flower-828457262-5c6334b646e0fb0001dcd75a.jpg";
  const img4 =
    "https://d3cif2hu95s88v.cloudfront.net/blog/wp-content/uploads/2020/05/14134924/Tulip-MyFlowerTree-1024x768.jpg";
  const img5 =
    "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/gh-best-flower-delivery-1641571598.png?crop=0.502xw:1.00xh;0,0&resize=640:*";
  const img6 =
    "https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Flower_July_2011-2_1_cropped.jpg/1200px-Flower_July_2011-2_1_cropped.jpg";

  const [mainImg, setMainImg] = useState(img3);

  return (
    <div className="container">
      <img className="img-fluid" src={mainImg} alt="" />
      
      <div className="row mt-5">
        <div className="col-md-3">
          <img
            className="img-fluid"
            src={img1}
            alt=""
            onMouseEnter={() => {
              setMainImg(img1);
            }}
          />
        </div>

        <div className="col-md-3">
          <img
            className="img-fluid"
            src={img2}
            alt=""
            onMouseEnter={() => {
              setMainImg(img2);
            }}
          />
        </div>

        <div className="col-md-3">
          <img
            className="img-fluid"
            src={img3}
            alt=""
            onMouseEnter={() => {
              setMainImg(img3);
            }}
          />
        </div>

        <div className="col-md-3">
          <img
            className="img-fluid"
            src={img4}
            alt=""
            onMouseEnter={() => {
              setMainImg(img4);
            }}
          />
        </div>

        <div className="col-md-3">
          <img
            className="img-fluid"
            src={img5}
            alt=""
            onMouseEnter={() => {
              setMainImg(img5);
            }}
          />
        </div>

        <div className="col-md-3">
          <img
            className="img-fluid"
            src={img6}
            alt=""
            onMouseEnter={() => {
              setMainImg(img6);
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
