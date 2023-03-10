import React, { useState, useRef } from "react";
import Webcam from "react-webcam";
// import "./App.css";
import ReactCrop from "react-image-crop";
import "react-image-crop/dist/ReactCrop.css";
import cameraIcon from "./Icons/camrea.svg";
import Flip2 from "./Icons/Flip2.svg";
import upload from "./Icons/Object.svg";
import faceki from "./Icons/faceki.svg";
import "react-image-crop/dist/ReactCrop.css";

const CaptureCard = () => {
  const [camera, setCamera] = useState("user");
  const [captureImage, setCaptureImage] = useState(null);
  const crop = {
    unit: "px",
    x: 40, // center the border horizontally
    y: 130, // adjust the top margin as needed
    width: 280,
    height: 380.58,
    // aspect: 1.5 / 1, // set to ID card aspect ratio
  };
  const webcamRef = useRef(null);

  const videoConstraints = {
    width: 360.3,
    height: 630.58,
    facingMode: camera,
  };

  const capture = () => {
    let imageSrc = webcamRef.current.getScreenshot();

    // After taking ss crop the image according to the given width and height and more
    const canvas = document.createElement("canvas");
    // let outSideImageArea= canvas.width-crop.width
    
    canvas.width = crop.width;
    canvas.height = crop.height;
    const ctx = canvas.getContext("2d");
    
    let imageObj = new Image();
    // imageObj.classList.add='image-custom'
    imageObj.src = imageSrc;
    imageObj.onload = () => {
      ctx.beginPath();
      // ctx.arc(100, 100, 60, 0, 6.28, false); //draw the circle
      // ctx.clip(); //call the clip method so the next render is clipped in last path
      // ctx.stroke();
      // ctx.closePath();
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
  

  const handleCameraFlip = () => {
    setCamera(camera === "user" ? "environment" : "user");
  };

  return (
    <div className="capture-card-container" >
      <div className="navigation2">
        <div>
          <img src={'./enroll.svg'} alt="" width={30} height={31} />
          <p className="nav-text">Enroll</p>
        </div>
        <div>
          <img src={'./verify.svg'} alt="" width={30} height={31} />
          <p className="nav-text">Check</p>
        </div>
        <div>
          <img src={'./check.svg'} alt="" width={30} height={31} />
          <p className="nav-text">Verify</p>
        </div>
        <div>
          <img src={'/ocr.svg'} alt="" width={30} height={31} />
          <p className="nav-text">OCR</p>
        </div>
      </div>
      <div className="text-capture">
          <p>Capture</p>
      </div>

      {/* <div className={captureImage===null ? 'front-back' : ''}>
        <h5>
          {captureImage === null ? (camera === "user"
              ? "FRONT SIDE"
              : "BACK SIDE")
            : ''}
        </h5>
      </div> */}
      <div className="camera">
        {captureImage === null ? (
          <Webcam
            audio={false}
            mirrored={camera === "user"}
            ref={webcamRef}
            videoConstraints={videoConstraints}
            className="webcam"
           
          />
        ) : (
          <></>
        )}
          
        
        <ReactCrop
          src={captureImage}
          crop={crop}
          // onChange={handleCropChange}
          // circularCrop
          // ruleOfThirds
          locked={true}
          keepSelection={false}
          className="white-transparent"
          style={{
            width: "100%",
            height: "100%",
            position: "absolute",
            top: 0,
            left: 0,
            zIndex: 0,
          }}
        />
       
        
        
        

        {/* <div className="webcamBorder"></div> */}
      </div>
      {/* {captureImage !== null ? (
        ""
      ) : (
        <div className="paragraph">
          <div>We'll ask you to enable camera access.</div>
          <div>More about verification</div>
        </div>
      )} */}

      <div className="Camera-buttons">
        {/* <button onClick={capture}>Capture</button>  */}
        <div className="camera-buttons-icons">
          {captureImage != null ? (
            <button
              onClick={(e) => {
                e.preventDefault();
                setCaptureImage(null);
              }}
            >
              Retake
            </button>
          ) : (
            <img
              src={cameraIcon}
              onClick={capture}
              alt=""
              width={60}
              height={60}
            />
          )}
          <img
            src={Flip2}
            onClick={handleCameraFlip}
            alt="flipcamera"
            width={90}
            height={41}
            style={{ marginLeft:"auto",alignSelf:'end'}}
          />
        </div>
        {/* <img src={upload} alt="" width={30} height={31} /> */}
      </div>
      {captureImage && (
        <img
          src={captureImage}
          alt="Captured"
          style={{
            width: crop.width,
            height: crop.height,
            borderRadius: "50%",
            objectFit: "cover",
          }}
        />
      )}
      <img src={faceki} alt="name" style={{ alignSelf: "flex-start", position:'absolute',bottom:"3%",left: '2%' }} />
    </div>
  );
};

export default CaptureCard;
