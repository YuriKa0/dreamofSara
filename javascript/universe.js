let storyBg = document.querySelector('.story .story_bg');
let pes = document.querySelectorAll('.story .text_wrap p');
let storyH2 = document.querySelector('.story h2');
console.log(pes);
console.log(window.innerHeight);
console.log(storyBg.clientHeight);
window.addEventListener('scroll',()=>{
  console.log(window.scrollY);
  // 줄거리 스크롤
  if(window.scrollY > 705){
    storyBg.classList.add('scrollEnd');
    // storyH2.classList.add('scrollEnd');
  }else{
    storyBg.classList.remove('scrollEnd');
    // storyH2.classList.remove('scrollEnd');
    
  }

  // pes.forEach((p)=>{
  //   if(p.getBoundingClientRect().top < window.innerHeight * 0.4){
  //     p.style.opacity = "0";
  //   }else{
  //     p.style.opacity = "1";
  //   }
    
  // })
  let settings = document.querySelectorAll('.setting .set_wrap');
  
  let textboxes = document.querySelectorAll('.setting .textbox');

  //용어 등장 애니메이션
  settings.forEach((setting) => {
    if(setting.getBoundingClientRect().top < window.innerHeight*0.6){
      setting.classList.add('on');
    }
  });

});