
//**----------------------------- */
//** SCROLLING ROW LIST           */
//**----------------------------- */

/*jshint esversion: 6 */
/*jshint asi: true */
/*jshint expr: true */

const {
  log
} = console

const slider = document.querySelector('.items');
let mouseIsPressed = false;
let preventScrolling = false
let mousePressedOnDisplay = false;
let startX;
let scrollLeft;


slider.addEventListener('mousedown', (e) => { //log(e.target.parentElement)
  
  const parentId = e.target.parentElement.id
  if(parentId === 'panelCutDisplayScreen') return // panel3DDisplayScreen
  if(parentId === 'panel3DDisplayScreen') return
  if(mousePressedOnDisplay)return
  mouseIsPressed = true;
  slider.classList.add('active');
  startX = e.pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;
  mousePressedOnDisplay = false
});
slider.addEventListener('mouseleave', () => {
  mouseIsPressed = false;
  slider.classList.remove('active');
});
slider.addEventListener('mouseup', () => {
  mouseIsPressed = false;
  slider.classList.remove('active');
});
slider.addEventListener('mousemove', (e) => {
  if(!mouseIsPressed) return;
  const x = e.pageX - slider.offsetLeft;
  const walk = (x - startX) * 3;
  slider.scrollLeft = scrollLeft - walk;
});

const subjectDisplays = document.getElementsByClassName('subject-display')
const cancelMousePress = (e)=>{mousePressedOnDisplay = true;     e.preventDefault();}
for (let i = 0; i < subjectDisplays.length; i++) {
  const element = subjectDisplays[i];
  element.addEventListener('mousedown',cancelMousePress)
}
window.addEventListener('mouseup', () => {
  mousePressedOnDisplay = false;

});
// testSVG.addEventListener('mousedown',cancelMousePress)

panelCutDisplayScreen.addEventListener('mousedown',cancelMousePress)
panelCutDisplayScreen.addEventListener('touchmove',(e)=>{
  e.preventDefault()
})


panel3DDisplayScreen.addEventListener('mousedown',cancelMousePress)
panel3DDisplayScreen.addEventListener('touchmove',(e)=>{
  e.preventDefault()
})
//panel3DDisplayScreen