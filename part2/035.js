/*
    [ 예외 처리하기 ]
    - 방법 : throw문 , try-catch-finally문
    - throw : 개발자가 의도한 에러가 발생할 경우 예외 상황을 알리기 위한 용도
*/

// throw문 예외 처리
function checkNumber(val) {
    if (typeof val !== 'number') throw '유효하지 않은 값입니다.' ;
    console.log('숫자형 값으로 확인되었습니다.') ;
}

// checkNumber(100) ;
// checkNumber('Wrong type') ; // typeof val 의 값이 'string' 이며, 그 결과 throw 발생으로 코드실행이 중단됨
// console.log('완료') ;



// try-catch-finally문 예외 처리
// throw문으로 의도한 에러를 발생했지만 코드실행 중단을 막을 수 없기에 이에 대한 대응책으로 사용함
/* 
    1) try 블록 안에서 발생된 에러를 잡은 후
    2) catch 블록으로 제어권을 넘김 (try 블록에서 발생된 에러 정보는 catch 블록의 변수로 전달됨)
    3) finally 블록은 에러 발생 여부와 상관없이 실행되는 블록임.
*/
function checkNumber2(val) {
    if (typeof val !== 'number') throw '유효하지 않은 값입니다.' ;
    console.log('숫자형 값으로 확인되었습니다.') ;    
}

try {
    checkNumber2(100) ;
    checkNumber2('Wrong type') ;
} catch (e) {
    console.log(`에러가 발생했습니다. >>> ${e}`) ;
} finally {
    console.log('완료') ;
}
