let characters = document.querySelectorAll('.character .profile');
let mau = document.querySelector('.mau');
let bastet = document.querySelector('.bastet');
console.log(characters);

window.addEventListener('scroll',()=>{
  characters.forEach((chara) => {
    if(chara.getBoundingClientRect().top < window.innerHeight*0.6){
      chara.classList.add('on');
    }
  })
  // console.log(window.scrollY);
  // if(mau.getBoundingClientRect().top < window.innerHeight*0.7){
  //   mau.classList.add('on');
  // }
  // if(bastet.getBoundingClientRect().top < window.innerHeight*0.7){
  //   bastet.classList.add('on');
  // }
});