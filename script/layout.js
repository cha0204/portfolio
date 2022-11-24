$(document).ready(function(){

   let gnb = $('.gnb > ul > li'); //메인메뉴 변수

  $(window).scroll(function(){
   let sPos = $(this).scrollTop();
   console.log(sPos);
   if(sPos >=912){
     $('.gnb').addClass('on');
   }else{
      $('.gnb').removeClass('on');
   }

 //방법1. 세로스크롤값을 각각 체크하여 수식작성
 //   if(sPos>=200&&sPos<970){
 //    gnb.eq(0).find('a').addClass('act');
 //   }else if(sPos>=1050&&sPos<1800){
 //    gnb.eq(1).find('a').addClass('act');
 //   }else if(sPos>=1900&&sPos<2630){
 //    gnb.eq(2).find('a').addClass('act');
 //   }else if(sPos>=2700&&sPos<3460){
 //    gnb.eq(3).find('a').addClass('act');
 //   }else if(sPos>=3500){
 //    gnb.eq(4).find('a').addClass('act');
 //   }else{
 //       gnb.find('a').removeClass('act');
 //   }

 //방법2. 섹션태그의 높이값이 
 //세로 스크롤 값 영역과 비교하여 0일때 addClass적용하기
   let i;

   $('section').each(function(){
    let top = $(this).offset().top-400; //선택한 section의 위치값을 변수 저장
    i = $(this).index();
    console.log(top);
    if(sPos>=top){ //section태그가 위에서 떨어진값이 스크롤값보다 크면
       gnb.find('a').removeClass('act'); //기존서식을 제거하고
       gnb.eq(i).find('a').addClass('act'); //해당 a에만 서식을 적용
    }
   });

  });


   //내비게이션 각각 클릭시 해당 기능 삽입하기
   gnb.each(function(){
      $(this).click(function(){
          i = $(this).index();
          console.log(i); //0,1,2,3,4나오는지 확인

          $('html,body').animate({'scrollTop':$('main section').eq(i).offset().top},300);return false //새로고침 방지

      });
   });
  });