const demos = document.getElementById(`demos`)
const liveView = document.getElementById(`liveView`)
const enableWebcamButton = document.getElementById(`webcamButton`)
const video = document.getElementById(`webcam`)

let model = true

const getUserMediaSupported = () => {
  return !!(navigator.mediaDevices && navigator.mediaDevices.getUserMedia)
}


const enableCam = (e) => {


  if(!model){
    return
  }
  
  e.target.classList.add(`removed`)
  
  const constraints = {
    video:true,
    height:480,
    width:640,
  }
  
  navigator.mediaDevices.getUserMedia(constraints).then((stream)=>{
    
    video.srcObject = stream
    video.addEventListener(`loadeddata`,predictWebcam)
    
  })
  
}

if(getUserMediaSupported()){
  enableWebcamButton.addEventListener(`click`,enableCam)
}else{
  console.warn(`your browser does not support webcam or media devices access`)
}

const predictWebcam = () => {
  return
}

demos.classList.remove(`invisible`)

