/*
    [ 함수 이해하기 ]
    - 문법 :
      function 함수이름 (매개변수 목록) {
          함수 실행부
      }
    - 함수 생성 방식 : 함수 표현식, 함수 선언문
*/

// << 함수 표현식 >>
// 함수 정의와 동시에 변수에 바로 할당
var greeting_expression = function(name) {
    console.log('Hi, ' + name) ;
}

// << 함수 선언문 >>
// 일반적인 함수 생성 방법
function greeting_declaration(name) {
    console.log('Hi, ' + name) ;
}

greeting_expression('Chloe') ;
greeting_declaration('Chloe') ;
