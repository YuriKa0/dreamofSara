let header = document.querySelector('header');

window.addEventListener('scroll',()=>{
  
  if(window.scrollY > 0){
    header.classList.add('scroll');

  }else if(window.scrollY < 1){
    header.classList.remove('scroll');
  }
});

let toTop = document.getElementsByClassName('btn_top')[0];

toTop.addEventListener('click',(e)=>{
  e.preventDefault();
  window.scrollTo({top:0, behavior:'smooth'});
});



// let bg = document.querySelector('.text_wrap');
// let bgg = document.querySelector('.content_box')
// console.log(bgg);
// bgg.style.position = 'fixed';
