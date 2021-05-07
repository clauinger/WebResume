//**----------------------------- */
//** Main JS                */
//**----------------------------- */

/*jshint esversion: 6 */
/*jshint asi: true */
/*jshint expr: true */
const {
  log
} = console
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

//** SCROLL TO TOP OF PAGE ON LOAD */
// window.onbeforeunload = function () { log(999999)
//   window.scrollTo(0, 0);
// }

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

function getNodeIndex(elm) {
  var c = elm.parentNode.children,
    i = 0;
  for (; i < c.length; i++) if (c[i] == elm) return i;
}

function addClickEventsToGridItems() {
  let gridItems = document.getElementsByClassName("cell");
  for (let i = 0; i < gridItems.length; i++) {
    gridItems[i].onclick = (e) => {
      let position = getGridElementsPosition(getNodeIndex(e.target));
      console.log(`Node position is row ${position.row}, column ${position.column}`);
    };
  }
}


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


const toggleToggleExpandHide = (ToggleExpandButton, rowSpan = 1)=>{ 

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
  log(toggleExpandButtonContainerHeight)
  const parentY = ToggleExpandButton.parentElement.parentElement.getBoundingClientRect().y

  const dist = Math.round( iconY - parentY)

  

  // const templateRowsClone = [...templateRows]

  if(toOpen){ 
    ToggleExpandButton.className = 'fas fa-arrow-up'
    
    rowIndex.forEach(index=>{
      templateRows[index] =  templateRowsDefault[index]
    })
    const str = templateRows.join(" ")

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
      // templateRows[index] = isTopCell? (dist + 20) + 'px' : collapeHeight + 'px'
      templateRows[index] = isTopCell? dist + 'px' : collapeHeight + 'px'
    })
    const str = templateRows.join(" ")

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


summaryToggleExpand.addEventListener('mousedown',()=>{ 
  toggleToggleExpandHide(summaryToggleExpand)
})

experienceToggleExpand.addEventListener('mousedown',()=>{ 
  toggleToggleExpandHide(experienceToggleExpand )
})

skillsToggleExpand.addEventListener('mousedown',()=>{ 
  toggleToggleExpandHide(skillsToggleExpand  )
})


employerToggleExpand.addEventListener('mousedown',()=>{ 
  toggleToggleExpandHide(employerToggleExpand,2 )
})

notableToggleExpand.addEventListener('mousedown',()=>{ 
  toggleToggleExpandHide(notableToggleExpand )
})


contactToggleExpand.addEventListener('mousedown',()=>{ 
  const toOpen = contactToggleExpand.className === 'fas fa-arrow-right'
  if(toOpen){ 
    contactToggleExpand.className = 'fas fa-arrow-left'
     addressContainer.className = 'show'
  } else { 
    contactToggleExpand.className = 'fas fa-arrow-right'
    log(addressContainer.className)
    addressContainer.className = 'hide'
  }
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

  toggleToggleExpandHide(summaryToggleExpand)
  toggleToggleExpandHide(experienceToggleExpand)
  toggleToggleExpandHide(skillsToggleExpand)
  toggleToggleExpandHide(employerToggleExpand,2)
  toggleToggleExpandHide(notableToggleExpand)
}


