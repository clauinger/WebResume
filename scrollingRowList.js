
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
let mousePressedOnDisplay = false;
let startX;
let scrollLeft;

slider.addEventListener('mousedown', (e) => {
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
  const walk = (x - startX) * 3; //scroll-fast
  slider.scrollLeft = scrollLeft - walk;
  // console.log(walk);
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
testSVG.addEventListener('mousedown',cancelMousePress)