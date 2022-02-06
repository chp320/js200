/*
    [ 함수 호이스팅 이해하기 ]
    - 함수를 선언하기 전에 호출 가능한 것을 '호이스팅' 이라고 함
*/

// 예제 - 함수 선언
hello() ;
function hello() {
    console.log('안녕하세요.') ;
}

// 예제 - 함수 표현식 을 통한 변수 할당
// hello2() ;
console.log(typeof hello2) ;
var hello2 = function() {
    console.log('안녕하세요') ;
}
/* 자바스크립트에는 코드 해석 단계와 코드 실행 단계 가 있고, 해석하는 단계에서 선언 문장으로 초기화하면서 스코프를 형성하고 이를 실행하는 단계에서 값 할당 혹은 계산하는 행위를 함.
   해석 단계에서 변수 hello2 가 초기화하면서 선언 문장이 없어 undefined 되었고, 실행 단계에서 hello2()를 호출하면서 에러가 발생함 => typeof hello2 하면 undefined 확인 가능
*/