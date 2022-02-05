/*
    [ 심볼형 이해하기 ]
    - Symbol : 유일한 식별자 생성 시 사용
    - 문법 : Symbol([description]) ;
      new 키워드를 사용하지 않고, 단지 함수 호출로만 사용한다.
    - 근데 이걸 언제 사용하나... ㅠㅠ  
    - 내용 참고 : 
      https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Symbol
      https://blog.naver.com/pliuhb/222500422320
*/

const a = Symbol() ;
const b = Symbol() ;
console.log(a) ;    // Symbol()
console.log(b) ;    // Symbol()

// 동등 연산자 : 비교 대상값의 자료형이 서로 다르면 강제로 형을 바꾼 후 비교함. 자료형 상관없이 "내용" 이 같은 경우 true 반환. 두 값이 객체(object)형이라면 '메모리 주소' 로 비교.
console.log(a == b) ;
// 일치 연산자 : 자료형을 임의로 변환하지 않고, 자료형 & 내용 이 같으면 true 반환.
console.log(a === b) ;

// a, b의 자료형은 symbol 형이지만 '내용'은 상이함.
console.log(typeof a) ;
console.log(typeof b) ;

/******************************************************************/
const symbol = Symbol() ;   // 기본 Symbol 호출. Symbol() 은 항상 고유한 값을 반환함.
const hello = Symbol('hello') ; // 설명(description) 은 디버깅 용도

console.log(Number(3) === Number(3)) ; // 일치 연산자 === : 자료형 number, 내용 3 / true
console.log(Symbol('symbol') === Symbol('symbol')) ;    // 자료형 symbol, 내용?? / false
console.log(Symbol() === Symbol()) ;    // 자료형 symbol, 내용?? / false
console.log(typeof Symbol()) ;  // 자료형 symbol

const nationility = Symbol('nationility') ;     // 심볼을 객체의 key 로 사용하기 위해 const 변수에 저장
console.log(nationility) ;  // Symbol(nationility)
const user = {
    name: 'jay'
} ;
user[nationility] = 'korean' ;  // user 객체의 심볼 key 로 korean 값을 할당.
console.log(user[nationility]) ;    // korean

for(let key in user) {
    console.log(key) ;  // 심볼이 객체의 key로 사용된 경우 for-in 루프로 해당 key를 가져올 수 없음. Object 의 키를 가져오는 메소드로도 심볼 key를 가져올 수 없음.
}
console.log(Object.keys(user)) ;    // [ 'name' ]
console.log(Object.getOwnPropertyNames(user)) ; // getOwnPropertyNames() : 객체에 직접 정의된 property 이름을 배열로 리턴 (상속 등으로 정의된 property는 제외)
console.log(JSON.stringify(user)) ; // stringify() : javascript 값을 JSON 으로 변환. 파라미터는 객체 or 배열 임.

const symbolProperties = Object.getOwnPropertySymbols(user) ;   // getOwnPropertySymbols() : 파라미터로 전달된 객체의 모든 symbol property를 배열로 리턴.
console.log(symbolProperties) ;
console.log(user[symbolProperties[0]]) ;
