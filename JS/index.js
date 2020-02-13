
// 음료 상세버튼 (for문 돌려야함)
const drinkInfoON = document.querySelector('.drinkThumb');
const btnClose = document.querySelector('.infoClose');
const figCap = document.querySelector('.drinkCaption');
const nav = document.querySelector('.nav');
const btn = nav.querySelector('.menuBtn');
const list = nav.querySelector('.menuList');
const items = list.querySelectorAll('.menuItem');
const links = list.querySelectorAll('.menuLink');

drinkInfoON.addEventListener('click', function(){
   
    if(document.querySelector('.drinkInfo').classList.contains('on')){
      document.querySelector('.drinkInfo').classList.remove('on');
    } else {
      document.querySelector('.drinkInfo').classList.add('on');
      document.querySelector('.drinkCaption').classList.add('figCapHidden');
    }
 });
 
 btnClose.addEventListener('click', function(){
       
    if(document.querySelector('.drinkInfo').classList.contains('on')){
      document.querySelector('.drinkInfo').classList.remove('on');
      document.querySelector('.drinkCaption').classList.add('figCapVisible');
   } else {
     document.querySelector('.drinkInfo').classList.add('on');  

   }
 });