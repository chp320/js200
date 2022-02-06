/*
    [ let으로 변수 선언하기 ]
    - ES6 이전까지 변수는 var 키워드로만 정의 가능했으나
    - ES6 이후부터는 let 키워드를 사용하여 변수의 유효 범위를 브록으로 지정 가능해짐!
*/

// 예제
if(true) {
    var functionScopeValue = 'global' ;
    let blockScopeValue = 'local' ;
}
console.log(functionScopeValue) ;   // var 키워드는 '함수 단위 유효범위'를 가지게 되어 if문 블록 밖에서 호출해도 무방함.
console.log(blockScopeValue) ;  // 에러 발생 - let 키워드로 정의하면 '블록 단위 유효범위'를 가지게 되고 if문 블록 밖에서 접근할 경우 에러 발생됨
