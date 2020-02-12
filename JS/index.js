
// 음료 상세버튼 (for문 돌려야함)
const drinkInfoON = document.querySelector('.drinkThumb');
const btn = document.querySelector('.infoClose')

drinkInfoON.addEventListener('click', function(){
   
    if(document.querySelector('.drinkInfo').classList.contains('on')){
      document.querySelector('.drinkInfo').classList.remove('on');
    } else {
      document.querySelector('.drinkInfo').classList.add('on');
    }
 })
 
 btn.addEventListener('click', function(){
       
    if(document.querySelector('.drinkInfo').classList.contains('on')){
     document.querySelector('.drinkInfo').classList.remove('on');
   } else {
     document.querySelector('.drinkInfo').classList.add('on');
   }
 })