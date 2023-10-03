let popup = document.querySelector('.illust_popup');
let popupImg = popup.querySelector('.illust_wrap');
let closeBtn = popup.querySelector('.close');
const thumnails = document.querySelectorAll('.illust .thumnail a');
const illusts = popup.querySelector('img');

console.log(closeBtn);

thumnails.forEach((thumnail) => {
  thumnail.addEventListener('click',(e)=>{
    e.preventDefault();
    const target = e.currentTarget;
    popup.style.display = "block";
    document.body.style.overflow = "hidden";
    illusts.src = target.getAttribute('href');
    illusts.alt = target.querySelector('span').innerText;
    // illusts.forEach((illust) => {
    //   illust.style.opacity = "0";
    //   illust[thumnail[i]].style.opacity = "1";
    // })
  });
});
closeBtn.addEventListener('click',()=>{
  popup.style.display = "none";
  document.body.style.overflow = "auto";
})
// popup.addEventListener('click',()=>{
//   popup.style.display = "none";
//   document.body.style.overflow = "auto";
// })
// popupImg.addEventListener('click',()=>{
//   popup.style.display = "block";
//   document.body.style.overflow = "hidden";
// })