/*
    [ 함수 기본 매개변수 처리하기 ]
    - ES6에 새로 추가된 '기본 매개변수'는 매개변수 정의 시 기본으로 할당될 인자값과 함께 작성하는 매개변수를 의미.
    - 값을 할당하는 연산자 = 를 사용
*/

function drawChart(width=200, height=400) {
    console.log(`${width} X ${height} 차트를 그립니다.`) ;
}
drawChart(100) ;    // width에는 100이 전달되지만, height에는 전달 인자가 없어 기본값인 400이 할당됨
drawChart() ;

console.log('*********************************************************') ;

function drawChart2(width=200, height=width/2) {
    console.log(`${width} X ${height} 차트를 그립니다.`) ;
}
drawChart2(300) ;
drawChart2() ;
