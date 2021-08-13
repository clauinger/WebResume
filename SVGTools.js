

//**----------------------------- */
//** SVG TOOLS                    */
//**----------------------------- */

/*jshint esversion: 6 */
/*jshint asi: true */
/*jshint expr: true */


const {
  log
} = console

const setBg = () => {
  const randomColor = Math.floor(Math.random()*16777215).toString(16);
  document.body.style.backgroundColor = "#" + randomColor;
}

// const PAN_MODE = 'panMode', ZOOM_MODE = 'zoomMode'

//testSVG
let mousePressPoint = null
let twoFingerTouchPoints = null
let marginLeft
let marginTop
// let viewUserEditMode = PAN_MODE 
let startZoomFactor = 1


let imageElement = testSVG.children[0]

function matchSize(){ //log('matchsize')
  const box = imageElement.getBoundingClientRect()
  svgOverlay.style.width = box.width + 'px'
  svgOverlay.style.height = box.height + 'px'

  const marginLeft = Number(getComputedStyle(imageElement).getPropertyValue('margin-left').split('px')[0])
  const marginTop = Number(getComputedStyle(imageElement).getPropertyValue('margin-top').split('px')[0])

  svgOverlay.style.setProperty('margin-left', marginLeft + 'px' )
  svgOverlay.style.setProperty('margin-top', marginTop + 'px' )

  // log(VPCenter.getBoundingClientRect().x)
}
// svgOverlay.style.width = Number(getComputedStyle(imageElement).getPropertyValue('width').split('px')[0]) + 'px'
// svgOverlay.style.height = Number(getComputedStyle(imageElement).getPropertyValue('height').split('px')[0]) + 'px'
matchSize()

function handleTouches(e) {
  if (!e.touches) return null
  if (e.touches.length === 2) {
    return [{
      x: e.touches[0].clientX,
      y: e.touches[0].clientY
    }, {
      x: e.touches[1].clientX,
      y: e.touches[1].clientY
    }]
  }
  if (e.touches.length > 2) return null
  const x = e.touches[0].clientX
  const y = e.touches[0].clientY
  e.preventDefault()
  return  { x , y }
}

function panZoomBegin(e){ 
  startZoomFactor = 1
  const touchPoint = handleTouches(e)
  mousePressPoint = touchPoint || {x:e.clientX,y:e.clientY,}
  const isTwoFinger = Array.isArray(mousePressPoint)
  if(isTwoFinger){
    twoFingerTouchPoints = mousePressPoint
    twoFingerTouchPoints.beginZoomPinchDistance = getDistanceTwoPoints(twoFingerTouchPoints[0],twoFingerTouchPoints[1])
    twoFingerTouchPoints.beginWidth = Number(getComputedStyle(imageElement).getPropertyValue('width').split('px')[0])
  }
  marginLeft = Number(getComputedStyle(imageElement).getPropertyValue('margin-left').split('px')[0])
  marginTop = Number(getComputedStyle(imageElement).getPropertyValue('margin-top').split('px')[0])
}

testSVG.addEventListener('mousedown', panZoomBegin)
testSVG.addEventListener("touchstart",panZoomBegin)

function scrollWheelZoomChange(event) {
  const imageWidth = Number(getComputedStyle(imageElement).getPropertyValue('width').split('px')[0])
  const y = event.deltaY / 21;
  const newWidth = imageWidth + (y * 10)
  setZoomView(newWidth)
}

//**                                  */
function setZoomView(newWidth){ 
  const r1 = getVPCenterRatio()
  imageElement.style.setProperty('width', newWidth + 'px' )
  const r2 = getVPCenterRatio()
  const deltaX = newWidth * r2.ratioX - newWidth * r1.ratioX
  const deltaY = newWidth * r2.ratioY - newWidth * r1.ratioY

  const marginLeft = Number(getComputedStyle(imageElement).getPropertyValue('margin-left').split('px')[0])
  imageElement.style.setProperty('margin-left', (marginLeft + deltaX  )+ 'px' )

  const marginTop = Number(getComputedStyle(imageElement).getPropertyValue('margin-top').split('px')[0])
  imageElement.style.setProperty('margin-top', (marginTop + deltaY  )+ 'px' )
  matchSize()
  setVPCenterPoint()
}
//**                                  */

testSVG.addEventListener('wheel', scrollWheelZoomChange)

function panZoomMove(e){     //myName.textContent = 'ewDist'
  if(mousePressPoint === null)return
  if(twoFingerTouchPoints) {

    e.preventDefault();
    const newPinchPoints = handleTouches(e)
    const newDist = getDistanceTwoPoints(newPinchPoints[0],newPinchPoints[1])
    const newZoomFac = newDist / twoFingerTouchPoints.beginZoomPinchDistance
    const newWidth = twoFingerTouchPoints.beginWidth * newZoomFac
    setZoomView(newWidth)
    return
  }
  const movePoint = handleTouches(e) ||  {x: e.clientX , y: e.clientY}
  const deltaX = movePoint.x - mousePressPoint.x
  const deltaY = movePoint.y - mousePressPoint.y
  imageElement.style.setProperty('margin-left', (marginLeft + deltaX )+ 'px' )
  imageElement.style.setProperty('margin-top', (marginTop + deltaY )+ 'px' )

  svgOverlay.style.setProperty('margin-left', (marginLeft + deltaX )+ 'px' )
  svgOverlay.style.setProperty('margin-top', (marginTop + deltaY )+ 'px' )
  setVPCenterPoint()
}



testSVG.addEventListener('mousemove', panZoomMove)
testSVG.addEventListener('touchmove', panZoomMove)
testSVG.addEventListener('touchend', clearMousePress)
testSVG.addEventListener('mouseup', clearMousePress)

function clearMousePress(){
  mousePressPoint = null
  twoFingerTouchPoints = null
}

testSVG.addEventListener("contextmenu", e => e.preventDefault())


const getDistanceTwoPoints = (point1,point2) => {
  const x1 = point1.x
  const y1 = point1.y
  const x2 = point2.x
  const y2 = point2.y
  function diff(num1, num2) {
    if (num1 > num2) return (num1 - num2)
    else return (num2 - num1)
  }
  let deltaX = diff(x1, x2);
  let deltaY = diff(y1, y2);
  let dist = Math.sqrt(Math.pow(deltaX, 2) + Math.pow(deltaY, 2));
  return (dist);
}





function getVPCenterPoint (vpElement = testSVG){
  const viewportBox = vpElement.getBoundingClientRect() //; log(viewportBox)
  viewportBox.centerOffset = {
    x:viewportBox.width / 2,
    y:viewportBox.height / 2
  }
  const imageWidth = imageElement.getBoundingClientRect().width
  const imageToViewportScaleFactorX = (viewportBox.width / imageWidth)
  const viewportToImageScaleFactorX = imageWidth / viewportBox.width 
  const imageMarginLeft = Number(getComputedStyle(imageElement).getPropertyValue('margin-left').split('px')[0])
  const imageMarginTop = Number(getComputedStyle(imageElement).getPropertyValue('margin-top').split('px')[0])
  const newX = (viewportBox.centerOffset.x * imageToViewportScaleFactorX * viewportToImageScaleFactorX ) - imageMarginLeft
  const newY = ((viewportBox.centerOffset.y * imageToViewportScaleFactorX * viewportToImageScaleFactorX ) - imageMarginTop) 
  return {x: newX, y:newY}
}

function getVPCenterRatio (){
  // ** RETURN IN TERMS OF FIRST RATIO
  const centerX = VPCenter.getBoundingClientRect().x
  const imageMarginLeft = Number(getComputedStyle(imageElement).getPropertyValue('margin-left').split('px')[0])
  const imageWidth = imageElement.getBoundingClientRect().width
  const ratioX = (centerX - imageMarginLeft)  /  imageWidth
  const centerY = VPCenter.getBoundingClientRect().y
  const imageMarginTop = Number(getComputedStyle(imageElement).getPropertyValue('margin-top').split('px')[0])
  const imageheight = imageElement.getBoundingClientRect().height
  const ratioY = (centerY - imageMarginTop)  /  imageheight
  return {ratioX,ratioY}
}

function setVPCenterPoint ( VPCenterPoint, vpElement = testSVG){   
  VPCenterPoint = VPCenterPoint || getVPCenterPoint(vpElement) 
  // log(VPCenterPoint)
  VPCenter.setAttribute("cx", VPCenterPoint.x)
  VPCenter.setAttribute("cy", VPCenterPoint.y)
  return VPCenterPoint
}


setVPCenterPoint()
matchSize()