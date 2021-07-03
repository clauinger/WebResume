//**----------------------------- */
//** Main JS                */
//**----------------------------- */

/*jshint esversion: 6 */
/*jshint asi: true */
/*jshint expr: true */


import {JSDraw} from './JSDraw/WorkSpace.js'
const {
  log
} = console
//git submodule add https://github.com/clauinger/JSDraw.git

const pen_01 = JSDraw('JSDraw_01', 300,300)
pen_01.currentPen = 'compositePen'
const pen_02 = JSDraw('JSDraw_02', 300,300)
pen_02.currentPen = 'lineShapePen'

const pen_03 = JSDraw('JSDraw_03', 300,300)
pen_03.currentPen = 'lineSeriesPen'

const pen_04 = JSDraw('JSDraw_04', 300,300)
pen_04.currentPen = 'lineCollectionPen'

const pen_05 = JSDraw('JSDraw_05', 300,300)
pen_05.currentPen = 'circleSeriesPen'

const pen_06 = JSDraw('JSDraw_06', 300,300)
pen_06.currentPen = 'arcLineShapePen'

const pen_07 = JSDraw('JSDraw_07', 300,300)
pen_07.currentPen = 'bezierShapePen'

const pen_08 = JSDraw('JSDraw_08', 300,300)
pen_08.currentPen = 'arcShapePen'

const pen_09 = JSDraw('JSDraw_09', 300,300)
pen_09.currentPen = 'multiShapePen_01'

const ON = true, OFF = false
const SHOW = true, HIDE = false

const page1TemplateRowsDefault = ['128px', 'auto' , 'auto', 'auto', 'auto']

const page1RowHeights = window.getComputedStyle(page1).gridTemplateRows.split(' ').map(rowHt => Number(rowHt.split('px')[0]))
const page2RowHeights = window.getComputedStyle(page2).gridTemplateRows.split(' ').map(rowHt => Number(rowHt.split('px')[0]))

const page1TemplateRowsForPrint = [...page1TemplateRowsDefault]
page1TemplateRowsForPrint[0] = '90px'

const page1TemplateRows = [...page1TemplateRowsDefault]

const page2TemplateRowsDefault = ['auto' , 'auto', 'auto', 'auto']
const page2TemplateRows = [...page2TemplateRowsDefault]

//** GLOBALLY ACCESSABLE FUNCTIONS */
window.isMobileDevice = function() {
  let check = false;
  (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);
  return check;
};
window.verifyDeviceAsMobileOrTablet = function() {
  let check = false;
  (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);
  return check;
};


function detectLeftButton(evt) {
  evt = evt || window.event;
  if ("buttons" in evt) {
      return evt.buttons == 1;
  }
  const button = evt.which || evt.button;
  return button == 1;
}

function setUserScrollDistance (dist){
  const newScrollDistance = Math.max( dist + scrollDistance,0)
  const topScroll = Math.min(newScrollDistance , 75)
  const bottomScroll = Math.max(newScrollDistance - 75, 0 )
  document.documentElement.style.setProperty('--user-scroll-distance', topScroll + 'px')
  techPortfolio.scrollTop = bottomScroll
}

document.body.style.overflowY = 'hidden'
window.addEventListener('scroll',()=>{
  const dist = Math.min(75, window.scrollY)
  document.documentElement.style.setProperty('--user-scroll-distance', dist + 'px') 
})

let techPortfolioMouseIsPressed = false
let techPortfolioMousePressPoint = null

let scrollDistance = 0
function setScrollDistance(){
  scrollDistance = techPortfolio.scrollTop + Number( document.documentElement.style.getPropertyValue('--user-scroll-distance').split('px')[0])
}

function getCursorLocatedOnScroll(e){
  const classNameList = e.target.className.split(" ")
  return classNameList.includes('table-cell-container') || 
    classNameList.includes('portFolioFlexContainer') || 
    classNameList.includes('expandable-table-cell-container') || 
    classNameList.includes('tableTitle') || 
    classNameList.includes('drawing') || 
    false
}

techPortfolio.addEventListener('mousedown',(e)=>{ log(e.target.className)
  techPortfolioMouseIsPressed = getCursorLocatedOnScroll(e)
  if(!techPortfolioMouseIsPressed)return 
  setScrollDistance()
  techPortfolioMousePressPoint = {x:e.screenX,y:e.screenY}
  document.body.className = 'disable-selection'
})

techPortfolio.addEventListener('mousemove',(e)=>{ 
  document.documentElement.style.setProperty('--cursor', getCursorLocatedOnScroll(e) ? 'grab': 'default')
  if(!techPortfolioMouseIsPressed)return

  const leftMouseButtonIsPressed = detectLeftButton(e)
  if(!leftMouseButtonIsPressed){
    terminateTechPortfolioScrolling()
    return
  }
  const dist =  techPortfolioMousePressPoint.y - e.screenY
  setUserScrollDistance (dist)
})

function terminateTechPortfolioScrolling(){
  techPortfolioMouseIsPressed = false
  document.body.className = ''
}

techPortfolio.addEventListener('mouseup',(el)=>{ 
  terminateTechPortfolioScrolling()
})

techPortfolio.addEventListener('wheel',(el)=>{
  setScrollDistance()
  const dist = el.deltaY
  setUserScrollDistance (dist)
})

document.getElementsByClassName('portFolioGridContainer')[0].getBoundingClientRect()


window.onbeforeunload = function () {
  window.scrollTo(0, 0);
}

//** SCROLL TO TOP OF PAGE ON LOAD */

//** GET GRID POSITION */
function getGridElementsPosition(index) {
  const gridEl = document.getElementById("grid");
  let offset = Number(window.getComputedStyle(gridEl.children[0]).gridColumnStart) - 1; 
  if (isNaN(offset)) {
    offset = 0;
  }
  const colCount = window.getComputedStyle(gridEl).gridTemplateColumns.split(" ").length;
  const rowPosition = Math.floor((index + offset) / colCount);
  const colPosition = (index + offset) % colCount;
  return { row: rowPosition, column: colPosition };
}

function setHomeScreenDisplay(display = SHOW){
  if(display === SHOW) {
    bottomRightTile.className = 'portfolioWindow frontPageElement show'
  } else {
    bottomRightTile.className = 'portfolioWindow frontPageElement hide'
  }
}

function setArchPortfolioDisplay(display = SHOW){
  if(display === SHOW) {
    archPortfolio.className = 'portfolioWindow frontPageElement show'
  } else {
    archPortfolio.className = 'portfolioWindow frontPageElement hide'
  }
}

function setTechPortfolioDisplay(display = SHOW){ log('setTechPortfolioDisplay')
  if(display === SHOW) {
    techPortfolio.className = 'portfolioWindow frontPageElement show'
  } else {
    techPortfolio.className = 'portfolioWindow frontPageElement hide'
  }
  document.documentElement.style.setProperty('--user-scroll-distance', '0px')
  techPortfolio.scrollTop = 0
}

function setResumeDisplay (display = SHOW){ 
  addressContainer.className = 'hide'
  if (display){
    const portfolioWindows = document.getElementsByClassName('portfolioWindow')
    for (let i = 0; i < portfolioWindows.length; i++) {
      portfolioWindows[i].className = 'portfolioWindow frontPageElement hide'
    }
    lowerLeftTile.className = 'frontPageElement hide'
    page1.className = 'page show'
    page2.className = 'page show'
    verticalLine.className = 'splashLine frontPageElement hide'
    document.body.className = 'resumeShow'
    document.body.style.overflowY = 'scroll'
    topRightTile.className = 'frontPageElement resume'
    backgroundImageContainer.className = 'resume'
  } else {
    log('resume hide')
    window.scrollTo(0, 0);
    lowerLeftTile.className = 'frontPageElement show'
    page1.className = 'page hide'
    page2.className = 'page hide'
    verticalLine.className = 'splashLine frontPageElement'
    document.body.className = ''
    document.body.style.overflowY = 'hidden'
    topRightTile.className = 'frontPageElement'
    backgroundImageContainer.className = 'frontPage'
  }
}

function getResumeIsShown(){
  return resumeButton2.className === 'navigationButton toggleOn'
}

function togglenavigationButton(button){
  const isToggledOn = button.className === 'navigationButton toggleOn'
  if(isToggledOn){
    title.className = 'show'
    button.className = 'navigationButton'
    return {isToggledOn:false}
  }
  const navigationButtons = document.getElementsByClassName('navigationButton')
  for (let i = 0; i < navigationButtons.length; i++) {
    const element = navigationButtons[i];
    if(element !== button) element.className =  'navigationButton hideLabel' 
  }
  title.className = 'hide'
  const ht = button.getBoundingClientRect().y

  const location = function(){
    if(button === resumeButton2)return 'firstButton'
    if(button === archButton2)return 'secondButton'
    if(button === techButton2)return 'thirdButton'
  }()
  button.className = 'navigationButton toggleOn ' + location
  return {isToggledOn:true}
}

myName.addEventListener('mousedown', ()=>{ 
  const alreadyToggledOn = myName.className === 'myName toggleShowAddress'
  if(alreadyToggledOn) {
    myName.className = 'myName'
    addressScreen.className = 'hide'
    contactButton.className = 'navigationButton' 
    grayOutNavLables(false)
  } else {
    myName.className = 'myName toggleShowAddress'
    addressScreen.className = 'show'
    contactButton.className = 'navigationButton toggleOn' 
    grayOutNavLables(true)
  }
})

function grayOutNavLables(bool = false){
  const cx = document.getElementsByClassName('navButtonLabel')
  for (let i = 0; i < cx.length; i++) {

    if(cx[i].textContent === 'Contact') continue
    cx[i].className = bool ? 'navButtonLabel grayOut' : 'navButtonLabel'
  }
  contactLbl.className = 'navButtonLabel'
}

addressScreen.addEventListener('mousedown', ()=>{ 
  addressScreen.className = 'hide'
  contactButton.className = 'navigationButton'
  grayOutNavLables(false)
})


resumeButton2.addEventListener('mousedown', ()=>{ 
  const isToggledOn = togglenavigationButton(resumeButton2).isToggledOn
  const otherButtons = isToggledOn ? 'navigationButton hideLabel' : 'navigationButton'
  archButton2.className = otherButtons
  techButton2.className = otherButtons
  contactButton.className = otherButtons
  exitButton2.className = isToggledOn ? otherButtons + ' ' + 'firstButton' : otherButtons
  setResumeDisplay(isToggledOn)
  setHomeScreenDisplay(isToggledOn === false)
})

archButton2.addEventListener('mousedown', ()=>{
  const isToggledOn = togglenavigationButton(archButton2).isToggledOn
  setArchPortfolioDisplay(isToggledOn)
  setTechPortfolioDisplay(HIDE)
  setResumeDisplay(HIDE)
  setHomeScreenDisplay(isToggledOn === false)
  exitButton2.className = isToggledOn ? 'navigationButton' + ' ' + 'secondButton' : 'navigationButton'
})

techButton2.addEventListener('mousedown', ()=>{
  if(getResumeIsShown())setResumeDisplay(false)
  const isToggledOn = togglenavigationButton(techButton2).isToggledOn
  setArchPortfolioDisplay(HIDE)
  setTechPortfolioDisplay(isToggledOn)
  setResumeDisplay(HIDE)
  setHomeScreenDisplay(isToggledOn === false)
  exitButton2.className = isToggledOn ? 'navigationButton' + ' ' + 'thirdButton' : 'navigationButton'
})

exitButton2.addEventListener('mousedown', ()=>{
  if(archButton2.className !== 'navigationButton' )archButton2.className = 'navigationButton'
  if(techButton2.className !== 'navigationButton' )techButton2.className = 'navigationButton'
  if(resumeButton2.className !== 'navigationButton' )resumeButton2.className = 'navigationButton'
  if(contactButton.className !== 'navigationButton' )contactButton.className = 'navigationButton'
  setArchPortfolioDisplay(HIDE)
  setTechPortfolioDisplay(HIDE)
  setHomeScreenDisplay(SHOW)
  setResumeDisplay(HIDE)
  exitButton2.className = 'navigationButton zeroButton'
})

window.onbeforeprint = function(event) { 
  page1.style.gridTemplateRows = page1TemplateRowsForPrint.join(' ')
  page2.style.gridTemplateRows = page2TemplateRowsDefault.join(' ')
};
window.onafterprint = function(event) { 
  page1.style.gridTemplateRows = page1TemplateRows.join(' ')
  page2.style.gridTemplateRows = page2TemplateRows.join(' ')
};

function getCellInfo(element){
  let parent = element.parentElement
  let cellElement, page
  let nn = 0
  while (parent !== document.body){
    const classArray = parent.className.split(' ')
    if(classArray.includes('cell')){
      cellElement = parent
      page = parent.parentElement
    }
    parent = parent.parentElement
    nn++
  }
  const cells = page.children
  let index
  for (let i = 0; i < cells.length; i++) {
    const element = cells[i];
    if(element === cellElement)index = i
  }
  return {index, row : index / 2, column : index % 2 ,page , shadowEffectElement: cells[index + 1 ].children[0] }
}


const toggleExpandHide = (ToggleExpandButton, rowSpan = 1)=>{ log('toggleExpandHide')
  let {row, page, shadowEffectElement} = getCellInfo(ToggleExpandButton)
  const rowIndex = []
  let i = 0
  for (let x = rowSpan; x > 0; x--) {
    rowIndex.push(row + i)
    i++
  }
  let templateRows,templateRowsDefault
  if(page === page1){
    templateRowsDefault = page1TemplateRowsDefault
    templateRows = page1TemplateRows
  } else {
    templateRowsDefault = page2TemplateRowsDefault
    templateRows = page2TemplateRows
  }
  const toggleExpandButtonContainer = ToggleExpandButton.parentElement
  const toggleExpandButtonContainerHeight = toggleExpandButtonContainer.getBoundingClientRect().height
  const toOpen = ToggleExpandButton.className === 'fas fa-arrow-down'

  const iconY = toggleExpandButtonContainer.getBoundingClientRect().y + toggleExpandButtonContainerHeight
  const parentY = ToggleExpandButton.parentElement.parentElement.getBoundingClientRect().y
  const dist = Math.round( iconY - parentY)

  if(toOpen){ 
    ToggleExpandButton.className = 'fas fa-arrow-up'
    
    rowIndex.forEach(index=>{
      templateRows[index] =  templateRowsDefault[index]
    })

    animateFold(page, row)
    shadowEffectElement.hidden = true
  } else {
    //* SHOW SHADOW EFFECT
    shadowEffectElement.hidden = false
    const shadowOffsetY = dist - shadowEffectElement.getBoundingClientRect().height
    shadowEffectElement.style.transform = `translateY(${shadowOffsetY}px)`
    ToggleExpandButton.className = 'fas fa-arrow-down'
    
    rowIndex.forEach((index,i)=>{
      const isTopCell = i === 0
      const collapeHeight = isTopCell ? 0 : 1
      templateRows[index] = isTopCell? dist + 'px' : collapeHeight + 'px'
    })
    animateFold(page, row, dist)
  }
}

function animateFold(page, rowIndex, closeDistannce){ 
  const toClose = closeDistannce !== undefined
  const templateRows = function(){
    if(page === page1)return page1TemplateRows
    return page2TemplateRows
  }()

  const templateRowsDefault = function(){
    if(page === page1)return page1TemplateRowsDefault
    return page2TemplateRowsDefault
  }()

  const rowHeights = function(){
    if(page === page1)return page1RowHeights
    return page2RowHeights
  }()
  const currentRowHeight = Number(window.getComputedStyle(page).gridTemplateRows.split(' ')[rowIndex].split('px')[0])
  
  let moveDist = function(){
    if(closeDistannce) return Math.min(200, currentRowHeight - closeDistannce)
    return rowHeights[rowIndex] - currentRowHeight
  }()

  let id = setInterval(frame, 5);
  let steps = 0
  function frame() {
    steps++
    if (steps === 15 || moveDist <= 0 ) {
      clearInterval(id);
      if(!toClose) {
        templateRows[rowIndex] = templateRowsDefault[rowIndex]
      } else{
        templateRows[rowIndex] = closeDistannce + 'px'
      }
      page.style.gridTemplateRows  = templateRows.join(" ")
      return 
    }
    if(toClose){
      templateRows[rowIndex] = Math.round(closeDistannce + moveDist) + 'px'
      page.style.gridTemplateRows  = templateRows.join(" ")
      
    } else {
      templateRows[rowIndex] = Math.round(rowHeights[rowIndex] - moveDist ) + 'px'
      page.style.gridTemplateRows  = templateRows.join(" ")
    }
    moveDist -= 5
  }
}


JSDrawToggleExpand.addEventListener('mousedown',()=>{
  const isUp = JSDrawToggleExpand.className === 'fas fa-arrow-up table-cell-arrow'
  if(isUp)JSDrawToggleExpand.className = 'fas fa-arrow-down table-cell-arrow'
  else JSDrawToggleExpand.className = 'fas fa-arrow-up table-cell-arrow'
 
  if(isUp) JSDrawContainer.className = 'expandable-table-cell-container condenced-height'
  else {JSDrawContainer.className = 'expandable-table-cell-container expanded'}
})

summaryToggleExpand.addEventListener('mousedown',()=>{
  toggleExpandHide(summaryToggleExpand)
})

experienceToggleExpand.addEventListener('mousedown',()=>{ 
  toggleExpandHide(experienceToggleExpand )
})

skillsToggleExpand.addEventListener('mousedown',()=>{ 
  toggleExpandHide(skillsToggleExpand  )
})

employerToggleExpand.addEventListener('mousedown',()=>{ 
  toggleExpandHide(employerToggleExpand,2 )
})

notableToggleExpand.addEventListener('mousedown',()=>{ 
  toggleExpandHide(notableToggleExpand )
})

document.addEventListener('DOMContentLoaded', function() {
  if(window.isMobileDevice()){ 
    setTimeout(collapseAll, 300);
  }
}, false)

function collapseAll(){
  [summaryToggleExpand, experienceToggleExpand, 
    skillsToggleExpand,
    employerToggleExpand, notableToggleExpand
  ].forEach(button =>
    button.className = 'fas fa-arrow-up')

  toggleExpandHide(summaryToggleExpand)
  toggleExpandHide(experienceToggleExpand)
  toggleExpandHide(skillsToggleExpand)
  toggleExpandHide(employerToggleExpand,2)
  toggleExpandHide(notableToggleExpand)
}

let archPortfolioScrollPosition = 0
let mousePosition = null
archPortfolio.addEventListener('mousedown',(e)=>{
  archPortfolioScrollPosition = archPortfolio.scrollTop
  mousePosition = e.clientY
})

archPortfolio.addEventListener('mousemove',(e)=>{
  if(!mousePosition){ 
    document.documentElement.style.setProperty('--cursor', 'hand')
    document.documentElement.style.setProperty('--xcolor', 'red')
    return
  }
  document.documentElement.style.setProperty('--xcolor', 'blue')
  const diff = e.clientY - mousePosition
  archPortfolio.scrollTop = archPortfolioScrollPosition - diff
})

archPortfolio.addEventListener('mouseup',()=>{
  mousePosition = null
})


let preventTouchDrag = false

function preventTouchMoveOnElement(e) { if(preventTouchDrag) e.preventDefault()}

document.addEventListener("touchmove", preventTouchMoveOnElement, {passive: false});

function preventElementTouchMoveIfIsDrawScreen (e){
  preventTouchDrag = e.target.className === 'p5Canvas'
}

document.addEventListener("touchstart", preventElementTouchMoveIfIsDrawScreen)

function resetPreventTouchDrag(){
  preventTouchDrag = false
}
document.addEventListener("touchend", resetPreventTouchDrag)