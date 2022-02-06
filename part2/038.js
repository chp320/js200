/*
    [ 함수 나머지 매개변수 이해하기 ]
    - 매개변수 정의 시 정해지지 않은 매개변수들을 정의할 수 있게 함 (ES6 신규 추가)
    - arguments 와의 차이점 : arguments 객체는 함수에 전달되는 모든 전달 인자를 포함, '나머지 매개변수'는 정해지지 않은 나머지를 의미.
      (즉, 파라미터명으로 식별되지 않았지만 전달인자로 넘어오는 값들을 모두 통칭)
    - arguments 객체는 "배열이 아니"지만, '나머지 매개변수'는 "배열"이다.
    - '나머지 매개변수'는 매개변수 작성하는 곳에서 작성하며 ... 연산자와 함께 작성함.
    - 문법: 
      function (parameter1, parameter2, ...restParameter) {
          // arguments 객체는 '나머지 매개변수'와 다르게 함수 몸통에서만 사용됨
      }
*/

function sum(...args) {
    var total = 0 ;
    for(var i=0; i<args.length; i++) {
        total += args[i] ;
    }
    console.log(args.indexOf(1)) ;  // '나머지 매개변수'는 배열이기 때문에 인덱스로 접근가능하며, 전달된 인자 중에서 1의 인덱스를 찾음.
    return total ;
}
console.log(sum(1, 2, 3)) ;

console.log('*********************************************') ;

function sum2(a, b, ...others) {
    var total = a + b ;
    for(var i=0; i<others.length; i++) {
        total += others[i] ;
    }
    return total ;
}
console.log(sum2(1, 2)) ;   // a=1, b=2, others=none
console.log(sum2(1, 2, 3, 4)) ; // a=1, b=2, others[3,4]
