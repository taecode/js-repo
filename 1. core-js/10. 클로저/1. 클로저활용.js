/*
//카운팅 변수
let num=0; //전역 변수

//카운트 숫자 상태 변경 함수
const increase=()=>++num;

console.log(increase());

num=999;

console.log(increase()); //2
*/

/*
const increase=()=>{
    let num=0;  //상태변수를 지역변수 처리
    return ++num;
}

console.log(increase());
console.log(increase());
console.log(increase());
*/

const increaseClosure=()=>{
    let num=0; //상태변수 (지역변수)
    
    function increase() {
        return ++num;
    }
    return increase;  //increase() -> ++num 리턴 , increase -> increase함수 통으로 리턴

};

const result=increaseClosure();  //result에 함수가 담김

console.log(result());
console.log(result());
console.log(result());


const result2=(()=>{
    let num=0;
    return ()=>++num;
})();  //즉시 실행 함수  

console.log(result2());
console.log(result2());
console.log(result2());
console.log(result2());