// Main Visual Button - mouseover, mouseout
let cmButtons = document.querySelectorAll('.cm-btn'), masker;
for(cmButton of cmButtons){
   cmButton.addEventListener('mouseover', function(){
      masker = this.childNodes[3];
      masker.style.height = '100%';
   });
   cmButton.addEventListener('mouseout', function(){
      masker = this.childNodes[3];
      masker.style.height = '0%';
   });
}

// Main Visual Swiper Slider

// 변수 선언
let swiperSlide = document.querySelectorAll('.swiper-slide'),
   bullets = document.querySelectorAll('.swiper-pagination-bullet'),
   currentIndex = 0,
   slideCount = swiperSlide.length,
   prevBtn = document.querySelector('.swiper-button-prev'),
   nextBtn = document.querySelector('.swiper-button-next'),
   isPause = document.querySelector('.btn-controls.is-pause'),
   isPlay = document.querySelector('.btn-controls.is-play');

// bullet 클릭 시 해당 슬라이드로 이동
bullets.forEach(function (bullet, index, bullets) {
   bullet.addEventListener('click', function(){
      moveToSlide(index, currentIndex);
   });
})

// 버튼 클릭시 슬라이드 이동 함수 실행
prevBtn.addEventListener('click', function(){
   moveToSlide(currentIndex - 1, currentIndex);
});
nextBtn.addEventListener('click', function(){
   moveToSlide(currentIndex + 1, currentIndex);
});

// 자동 슬라이드 함수
let autoTimer = setInterval(() => {
   autoSlide();
}, 5000);

function autoSlide(){
   moveToSlide(currentIndex + 1, currentIndex);
}

// 재생/정지 버튼 클릭 시 자동 슬라이드 제어
isPause.addEventListener('click', function(){
   clearInterval(autoTimer);
   isPlay.style.display = 'block';
   isPause.style.display = 'none';
});
isPlay.addEventListener('click', function(){
   autoTimer = setInterval(() => {
      autoSlide();
   }, 5000);
   isPause.style.display = 'block';
   isPlay.style.display = 'none';
});

// bullet active 클래스 추가/제거 및 슬라이드 이동 함수
function moveToSlide(currentIdx, prevIdx) {
   console.log(currentIdx, prevIdx);
   if(currentIdx == -1) currentIdx = slideCount - 1;
   else if(currentIdx == slideCount) currentIdx = 0;

   bullets[prevIdx].classList.remove('swiper-pagination-bullet-active');
   swiperSlide[prevIdx].classList.remove('swiper-slide-active');
   
   bullets[currentIdx].classList.add('swiper-pagination-bullet-active');
   swiperSlide[currentIdx].classList.add('swiper-slide-active');
   currentIndex = currentIdx;
   clearInterval(autoTimer);
   autoTimer = setInterval(() => {
      autoSlide();
   }, 5000);
}
