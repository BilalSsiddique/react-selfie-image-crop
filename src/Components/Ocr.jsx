import React, { useState, useRef } from "react";
import Webcam from "react-webcam";
import { Link } from "react-router-dom";
import "./ocr.css";
import ReactCrop from "react-image-crop";
import "react-image-crop/dist/ReactCrop.css";
import cameraIcon from "../Icons/camrea.svg";


const Ocr = () => {
  const [camera, setCamera] = useState("user");
  const [captureImage, setCaptureImage] = useState(null);
  const crop = {
    unit: "px",
    x: 25, // center the border horizontally
    y: 28, // adjust the top margin as needed
    width: 310.3,
    height: 220.58,
    // aspect: 1.5 / 1, // set to ID card aspect ratio
  };
  const webcamRef = useRef(null);

  const videoConstraints = {
    width: 360.3,
    height: 376.58,
    facingMode: camera,
  };

  const capture = () => {
    let imageSrc = webcamRef.current.getScreenshot();

    // After taking ss crop the image according to the given width and height and more
    const canvas = document.createElement("canvas");
    canvas.width = crop.width;
    canvas.height = crop.height;
    const ctx = canvas.getContext("2d");
    const imageObj = new Image();
    imageObj.src = imageSrc;
    imageObj.onload = () => {
      ctx.drawImage(
        imageObj,
        crop.x,
        crop.y,
        crop.width,
        crop.height,
        0,
        0,
        crop.width,
        crop.height
      );
      const croppedImage = canvas.toDataURL("image/jpeg");
      // now set the image after croping and converting
      setCaptureImage(croppedImage);
    };
  };
  // const handleCropChange = (newCrop) => {
  //   setCrop(newCrop);
  // };

  // const handleCameraFlip = () => {
  //   setCamera(camera === "user" ? "environment" : "user");
  // };

  return (
    <div className="capture-card-container-ocr">
      <div className="navigation-ocr">
        <div>Scan Your ID</div>
        
      </div>
     
      <div className="camera-ocr" id="crop-ocr">
        {captureImage === null ? (
          <Webcam
            audio={false}
            mirrored={camera === "user"}
            ref={webcamRef}
            videoConstraints={videoConstraints}
          />
        ) : (
          <></>
        )}
        <ReactCrop
          src={captureImage}
          crop={crop}
          
          className="reactCrop-ocr"
          ruleOfThirds
          circularCrop={false}
          locked={true}
          keepSelection={false}
          style={{
            width: "100%",
            height: "100%",
            position: "absolute",
            top: 0,
            left: 0,
            zIndex: 1,
          }}
        />

       
      </div>
      {captureImage !== null ? (
        ""
      ) : (
        <div className="paragraph-ocr">
          <div>Please put your ID with in the frame to capture correctly </div>
          <div>and make sure ID is clear and without refection's</div>
        </div>
      )}
      
      <div className="buttons-ocr">
       
          <Link to='./success4'>
          
          <img
            src={cameraIcon}
            onClick={capture}
            alt=""
            width={70}
            height={70}
            style={{ cursor: "pointer" ,marginLeft: "auto"}}
          />
          </Link>
        
        

        <img style={{marginLeft:'auto'}}   src={'./uploadDoc.svg'} alt="" width={70} height={41} />
       
        
      </div>
     
    </div>
  );
};

export default Ocr;
