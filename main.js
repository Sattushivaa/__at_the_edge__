var PASS = '9639257036'
var opened = 6
var slides = 6
var letters = ''

function rmoverlay(){
  let val = document.getElementsByTagName('input')[0].value
  if (val==PASS){ pass.remove()}
  else alert('wrong password')
}
function startswipes(){
  land_on.style.height = '0vh';
  document.querySelectorAll('.slide_btns').forEach(e=>{
    e.style.display = "block";
  });
  bm.play()
}
function nextslide(){
  if (opened!=0){
    document.querySelectorAll('.slide')[opened-1].style.transform = 'rotateY(-180deg)';
    opened-=1;
  }
}
function prevslide(){
    if (opened !=6) {
      document.querySelectorAll('.slide')[opened].style.transform = 'rotateY(0deg)';
      opened += 1;
    } else {
      land_on.style.height = '100vh';
      document.querySelectorAll('.slide_btns').forEach(e=>{
      e.style.display = "none";
  })
    }
}

fetch('assets/x.zip').then(o=>o.text()).then(t=>{
  letters = t.split('\n');
  let els = document.querySelectorAll('.slide');
  els.forEach((el,index)=>{
    let img = document.createElement('div');
    img.className='img';
    img.style.backgroundImage = 'url(person/'+(letters.length-index)+'.jpg)';
    el.append(img);
    let txt = document.createElement('div');
    txt.innerText = letters[letters.length-index-1];
    el.append(txt);
  })
})