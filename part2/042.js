/*
    [ const로 상수 선언하기 ]
    - let 키워드와 마찬가지로 '블록 단위 스코프' 정의 가능
    - 단, const 키워드는 값을 할당한 이후 재할당 불가 => 상수 정의 시 사용 (대문자 표기)
*/

const URL = 'http://js.com' ;
// URL = 'http://js.com' ; // 재할당 시 에러 발생

if(true) {
    const URL2 = 'http://js.com' ;
}
console.log(URL2) ; // if 블록 내부에 선언된 const URL2 변수를 블록 밖에서 호출 시 에러 발생!

/*
    const 키워드로 정의된 상수에 객체(object)를 할당하더라도 해당 객체 내부 값은 변경가능함. 단, 새로운 객체로 할당은 불가함.
    const CONST_USER = {name: 'jay', age: 30} ;
    console.log(CONST_USER.name, CONST_USER.age) ;
    CONST_USER.name = 'jay2' ;
    CONST_USER.age = 31 ;
    console.log(CONST_USER.name, CONST_USER.age) ;  // 객체 내부 값은 변경 가능
    CONST_USER = {name: 'bbo'} ;    // 에러
*/