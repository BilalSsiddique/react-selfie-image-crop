import React, { useState, useRef } from 'react'
import Webcam from 'react-webcam'
import { useNavigate } from 'react-router-dom'
import ReactCrop from 'react-image-crop'
import 'react-image-crop/dist/ReactCrop.css'
import cameraIcon from './Icons/camrea.svg'
import Flip2 from './Icons/Flip2.svg'
import faceki from './Icons/faceki.svg'
import 'react-image-crop/dist/ReactCrop.css'
import { Link } from 'react-router-dom'
const CaptureCard = (props) => {
  const { inputt, setinput } = props
  const [camera, setCamera] = useState('user')
  const [captureImage, setCaptureImage] = useState(null)

  /* States for managing buttons */
  const [enroll, setEnroll] = useState(false)
  const [verify, setVerify] = useState(false)
  const [check, setCheck] = useState(true)
  const [holddata, setHoldData] = useState('Active Check Button')
  const [url, setUrl] = useState('/success3')

  console.log(holddata)

  const crop = {
    unit: 'px',
    x: 40, // center the border horizontally
    y: 130, // adjust the top margin as needed
    width: 280,
    height: 380.58,
    // aspect: 1.5 / 1, // set to ID card aspect ratio
  }
  const webcamRef = useRef(null)

  const videoConstraints = {
    width: 360.3,
    height: 630.58,
    facingMode: camera,
  }

  const capture = () => {
    let imageSrc = webcamRef.current.getScreenshot()

    // After taking ss crop the image according to the given width and height and more
    const canvas = document.createElement('canvas')
    // let outSideImageArea= canvas.width-crop.width

    canvas.width = crop.width
    canvas.height = crop.height
    const ctx = canvas.getContext('2d')

    let imageObj = new Image()
    // imageObj.classList.add='image-custom'
    imageObj.src = imageSrc
    imageObj.onload = () => {
      ctx.beginPath()
      
      ctx.drawImage(
        imageObj,
        crop.x,
        crop.y,
        crop.width,
        crop.height,
        0,
        0,
        crop.width,
        crop.height,
      )

      const croppedImage = canvas.toDataURL('image/jpeg')
      // now set the image after croping and converting
      setCaptureImage(croppedImage)
    }
  }
 
  const handleCameraFlip = () => {
    setCamera(camera === 'user' ? 'environment' : 'user')
  }

  const handleEnroll = () => {
    setCheck(false)
    setVerify(false)
    setEnroll(true)
    setUrl('/success')
  }

  const handleVerify = () => {
    setEnroll(false)
    setCheck(false)
    setVerify(true)
    setHoldData('Verify Button Active')
    setUrl('/success2')
  }

  const handleCheck = () => {
    setEnroll(false)
    setCheck(true)
    setVerify(false)
    setHoldData('Check Button Active')
    setUrl('/success3')
  }

  const handleInput = (e) => {
    setinput(e.target.value)
    console.log(inputt)
  }
  const navigate = useNavigate()
  return (
    <>
      <div className="capture-card-container">
        <div className="navigation2">
          <div onClick={handleEnroll} className="nav-links">
            <img src={'./enroll.svg'} alt="" width={30} height={31} />
            <p className="nav-text">Enroll</p>
          </div>
          <div className="nav-links" onClick={handleVerify}>
            <img src={'./verify.svg'} alt="" width={30} height={31} />
            <p className="nav-text">Verify</p>
          </div>
          <div className="nav-links" onClick={handleCheck}>
            <img src={'./check.svg'} alt="" width={30} height={31} />
            <p className="nav-text">Check</p>
          </div>
          <Link to='./ocr' style={{textDecoration:'none'}}>

            <div className="nav-links">
              <img src={'/ocr.svg'} alt="" width={30} height={31} />
              <p className="nav-text">OCR</p>
            </div>
          </Link>
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
              mirrored={camera === 'user'}
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
              width: '100%',
              height: '100%',
              overflow:'hidden',
              position: 'absolute',
              top: 0,
              left: 0,
              zIndex: 0,
            }}
          />

          
        </div>
        

        {enroll && (
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
            }}
            className="enroll-text "
          >
            <p style={{ color: '#5A5A5A' }}>Place your face in center</p>
            <input
              value={inputt}
              style={{
                background: '#D9D9D9',
                marginTop: '-10px',
                border: 'none',
                outline: 'none',
                width: '145px',
                height: '32px',
                padding: '0px 15px',
              }}
              type="text"
              placeholder="Type your name"
              onChange={handleInput}
            />
          </div>
        )}

        <div
          style={{
            bottom: enroll ? '-1%' : '6.5%',
          }}
          className="Camera-buttons"
        >
          
          <div className="camera-buttons-icons">
            {captureImage != null ? (
              <button
                onClick={(e) => {
                  e.preventDefault()
                  setCaptureImage(null)
                }}
              >
                Retake
              </button>
            ) : (
              <Link to={url}>
                <img
                  src={cameraIcon}
                  onClick={capture}
                  alt=""
                  width={60}
                  height={enroll === true ? 50 : 60}
                />
              </Link>
            )}
            <img
              src={Flip2}
              onClick={handleCameraFlip}
              alt="flipcamera"
              width={90}
              height={41}
              style={{ marginLeft: 'auto', alignSelf: 'end' }}
            />
          </div>
          
        </div>
        {captureImage &&
          {
            /* <img
          src={captureImage}
          alt="Captured"
          style={{
            width: crop.width,
            height: crop.height,
            borderRadius: '50%',
            objectFit: 'cover',
          }}
        /> */
          }}
        <img
          src={faceki}
          alt="name"
          style={{
            alignSelf: 'flex-start',
            position: 'absolute',
            bottom: '2%',
            left: '2%',
          }}
        />
      </div>
    </>
  )
}

export default CaptureCard
