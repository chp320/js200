/*
    [ arguments 객체 이해하기 ]
    - 함수는 매개변수(parameter)를 가지며, 매개변수와 같이 사용되는 용어로 '전달인자(arguments)'가 있음.
    - 매개변수: 함수 선언 시 작성되는 변수
    - 전달인자: 함수 호출 시 전달되는 값
    - 자바스크립트는 전달인자 개수와 매개변수 개수가 상이해도 에러 발생하지 않음 (!!!)
*/

function sum() {
    var total = 0 ;
    for (var i=0; i<arguments.length; i++) {
        total += arguments[i] ;
    }
    console.log(arguments instanceof Array) ;   // instanceof 연산자를 사용하여 arguments 가 배열(Array) 인지 확인
    return total ;
}
var sumOf1to3 = sum(1, 2, 3) ;
console.log(sumOf1to3) ;

console.log('*******************************************************************') ;

function testArg() {
    var newArr = Array.prototype.slice.call(arguments) ;    // arguments 객체를 배열로 바꾸기 위해 Array의 prototype에 정의된 slice 메소드를 호출.
    console.log(newArr) ;
    console.log(newArr.indexOf('b')) ; 
    console.log(arguments.indexOf('b')) ;   // arguments 객체는 배열이 아니기 때문에 에러 발생! 
}
testArg('a', 'b') ;
