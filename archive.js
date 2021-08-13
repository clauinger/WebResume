


//** ARCHIVE AND REMOVE BELOW */
let currentSlideContainer
document.body.slideIndex = 1
document.body.slideView =  (n, key )=> {
  const mainContainerID = key + 'SlideViewer'
  const textElement = document.getElementById(mainContainerID).children[0].children[5]
  document.body.slideIndex = n
  let i;
  const slides = document.getElementsByClassName("mySlides " + key);
  const dots = document.getElementsByClassName("dot " + key);
  if (n > slides.length) {
    document.body.slideIndex = 1
  }
  if (n < 1) {
    document.body.slideIndex = slides.length
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[document.body.slideIndex - 1].style.display = "block";

// log(slides[document.body.slideIndex - 1].getBoundingClientRect())
// const bbox = slides[document.body.slideIndex - 1].getBoundingClientRect()
// myName.textContent = Math.round(bbox.width) + " X " + Math.round(bbox.height)
// currentSlideContainer = slides[document.body.slideIndex - 1]
  imageViewer.setImageElement(slides[document.body.slideIndex - 1].children[0])

  if (dots.length) dots[document.body.slideIndex - 1].className += " active";
  textElement.innerHTML = document.body.slideIndex + ' / ' + slides.length



  // log(currentSlideContainer)
}

const imageViewer = function(){ 
  let _imageElement = null ,box = null 
  let viewContainer
  let imageElementCopy = document.createElement('img')
  imageElementCopy.className = 'fit-width'

  function makeViewer (){ return
    if(!viewContainer){
      viewContainer = document.createElement('div')
      viewContainer.appendChild(imageElementCopy)
      viewContainer.className = 'viewContainer'
      document.body.appendChild(viewContainer)
      viewContainer.style.position = 'absolute'
      viewContainer.style.top = '0px'
      viewContainer.style.left = 0
      // viewContainer.style.background = 'rgba(0,0,255,.3)'
      viewContainer.style.zIndex = 10
      viewContainer.style.pointerEvents = 'none'
    }

    function place(){ log('place')
      const maxWidthValue = getComputedStyle(_imageElement).getPropertyValue('max-width').split('px')[0]
      const maxWidth = maxWidthValue !== 'none' ? Number(maxWidthValue) : null
  
      const imageWidthToHeightRatio =imageElementCopy.width / imageElementCopy.height
      const imageHeightToWidthRatio = 1 / imageWidthToHeightRatio
      const slideContainer = _imageElement.parentElement.parentElement.parentElement
      const slideContainerBox = slideContainer.getBoundingClientRect()
      let ht = slideContainerBox.bottom - 100
      let wid = imageWidthToHeightRatio * ht
      // ** CORRECT FOR OVERFLOW TOP BOTTOM
      const widthIsTooWide = wid > window.innerWidth - 80
      wid = Math.min(wid, window.innerWidth - 80)
      ht = widthIsTooWide ? imageHeightToWidthRatio * wid : ht
      // ** CORRECT FOR OVERFLOW LEFT RIGHT
      const heightIsTooTall = ht > window.innerHeight - 180
      ht = Math.min(ht, window.innerHeight - 180)
      wid = heightIsTooTall ? imageWidthToHeightRatio * ht : wid
  
      if(maxWidth){
        wid = maxWidth
        ht = imageHeightToWidthRatio * wid
      }
  
      viewContainer.style.width = wid + 'px'
      viewContainer.style.height =  ht + 'px'
      const maxSlideWidth = Number(getComputedStyle(document.documentElement).getPropertyValue('--max-slide-width').split('px')[0])
      const imageIsNarrow = wid < maxSlideWidth
  
      imageElementCopy.className = imageIsNarrow ? 'fit-height' : 'fit-width'
      viewContainer.style.opacity = 0

      viewContainer.style.left  = ((window.innerWidth - imageElementCopy.width - 20 )/ 2) + 'px'
      viewContainer.style.top  = (window.innerHeight - 130 - imageElementCopy.height ) + 'px'
      viewContainer.style.opacity = 1
      // log('place')
    }
    place()
    // place()
    return

    const maxWidthValue = getComputedStyle(_imageElement).getPropertyValue('max-width').split('px')[0]
    const maxWidth = maxWidthValue !== 'none' ? Number(maxWidthValue) : null

    const imageWidthToHeightRatio =imageElementCopy.width / imageElementCopy.height
    const imageHeightToWidthRatio = 1 / imageWidthToHeightRatio
    const slideContainer = _imageElement.parentElement.parentElement.parentElement
    const slideContainerBox = slideContainer.getBoundingClientRect()
    let ht = slideContainerBox.bottom - 100
    let wid = imageWidthToHeightRatio * ht
    // ** CORRECT FOR OVERFLOW TOP BOTTOM
    const widthIsTooWide = wid > window.innerWidth - 80
    wid = Math.min(wid, window.innerWidth - 80)
    ht = widthIsTooWide ? imageHeightToWidthRatio * wid : ht
    // ** CORRECT FOR OVERFLOW LEFT RIGHT
    const heightIsTooTall = ht > window.innerHeight - 180
    ht = Math.min(ht, window.innerHeight - 180)
    wid = heightIsTooTall ? imageWidthToHeightRatio * ht : wid

    if(maxWidth){
      wid = maxWidth
      ht = imageHeightToWidthRatio * wid
    }

    viewContainer.style.width = wid + 'px'
    viewContainer.style.height =  ht + 'px'
    const maxSlideWidth = Number(getComputedStyle(document.documentElement).getPropertyValue('--max-slide-width').split('px')[0])
    const imageIsNarrow = wid < maxSlideWidth

    imageElementCopy.className = imageIsNarrow ? 'fit-height' : 'fit-width'
    viewContainer.style.opacity = 0
    setTimeout(function() {
      // viewContainer.style.left  = ((window.innerWidth - imageElementCopy.width - 20 )/ 2) + 'px'
      // viewContainer.style.top  = (window.innerHeight - 130 - imageElementCopy.height ) + 'px'
      // viewContainer.style.opacity = 1
      // viewContainer.className = 'viewContainer'
      // viewContainer.className = 'viewContainer fade'
      // document.body.style.background = 'red'
    }, 1000)
    viewContainer.style.left  = ((window.innerWidth - imageElementCopy.width - 20 )/ 2) + 'px'
    viewContainer.style.top  = (window.innerHeight - 130 - imageElementCopy.height ) + 'px'
    viewContainer.style.opacity = 1
  }

  return {
    setImageElement : (imageElement)=>{  //log(getComputedStyle(imageElement).getPropertyValue('max-width'))
      if(window.innerWidth <= 540)return
      _imageElement = imageElement
      box = _imageElement.getBoundingClientRect()
      imageElementCopy.src= imageElement.src
      imageElementCopy.hidden = false
      if(viewContainer)viewContainer.hidden = false
      makeViewer()
      // imageElementCopy.hidden = false
      // if(viewContainer)viewContainer.hidden = false
    },
    clear : ()=>{ 
      imageElementCopy.hidden = true
      if(viewContainer)viewContainer.hidden = true
      _imageElement = null
    },
    show : ()=>{},
    hide : ()=>{},
  }
}()


//** ARCHIVE AND REMOVE ABOVE */