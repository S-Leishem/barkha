let button1 = document.getElementById('btn1');
  let button2 = document.getElementById('btn2');
  let button3 = document.getElementById('btn3');
  let button4 = document.getElementById('btn4');
    /* fliping the page -350deg on button clicking*/

  button1.addEventListener("click", () => {
   let div =  document.getElementsByClassName('first-div');
  // div[0].style.translate = '-350px 0';
   div[0].style.transform = 'rotateY(140deg)';
   div[0].style.transformOrigin = 'left';
   div[0].style.zIndex = '1';
 })
  button2.addEventListener("click", () => {
   let div =  document.getElementsByClassName('second-div');
//   div[0].style.translate = '-350px 0'  
  div[0].style.transform = 'rotateY(140deg)';
   div[0].style.transformOrigin = 'left';
   div[0].style.zIndex = '2';
 })
  button3.addEventListener("click", () => {
   let div =  document.getElementsByClassName('third-div');
  // div[0].style.translate = '-350px 0'  
  div[0].style.transform = 'rotateY(140deg)';
   div[0].style.transformOrigin = 'left';
   div[0].style.zIndex = '3';
 })
  button4.addEventListener("click", () => {
    let div1 =  document.getElementsByClassName('first-div');
    let div2 =  document.getElementsByClassName('second-div');
    let div3 =  document.getElementsByClassName('third-div');
   let div4 =  document.getElementsByClassName('fourth-div');
 //  div[0].style.translate = '-350px 0' 
   div1[0].style.transform = 'rotateY(0deg)';
   div2[0].style.transform = 'rotateY(0deg)';
   div3[0].style.transform = 'rotateY(0deg)';
   div4[0].style.transform = 'rotateY(0deg)';
   div1[0].style.zIndex = '4';
   div2[0].style.zIndex = '3';
   div3[0].style.zIndex = '2';
   div4[0].style.zIndex = '1';
 })
 document.getElementById('showbtn').addEventListener("click",() => {
   document.getElementById('ul').style.display = 'block';
 })