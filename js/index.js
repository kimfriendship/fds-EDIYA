const nav = document.querySelector('.nav');
const btn = document.querySelector('.menuBtn');
const closeMenu = document.querySelector('.menuClose');
const menu = document.querySelector('.menu');

btn.addEventListener('click', function(e){    
  nav.classList.add('menuIsAct');
});

closeMenu.addEventListener('click', function(e){    
  nav.classList.remove('menuIsAct');
});

// 이벤트 주었을 때, 박스 크기작아짐 

const drinkInfos = document.querySelectorAll('.drinkInfo');
const drinkThumbs = document.querySelectorAll('.drinkThumb');
const drinkInfoCloseBtns = document.querySelectorAll('.infoClose');
const drinkCaptions = document.querySelectorAll('.drinkCaption');

for(let i = 0; i < drinkThumbs.length; i ++){

  const drinkThumb = drinkThumbs[i];
  const closeBtn = drinkInfoCloseBtns[i];
  const drinkInfo = drinkInfos[i];
  const drinkCaption = drinkCaptions[i];

  drinkThumb.addEventListener('click', function(e){    
    drinkInfo.classList.add('on');
    drinkCaption.classList.add('off');
  });

  closeBtn.addEventListener('click', function(e){  
    drinkInfo.classList.remove('on');
    drinkCaption.classList.remove('off');
  });
}




