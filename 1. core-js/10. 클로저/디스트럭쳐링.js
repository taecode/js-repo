// 배열 디스트럭쳐링
const arr = ['김철수', '박영희', '홍길동'];

/*
const kim = arr[0];
const park = arr[1];
const hong = arr[2];
*/

const [kim, park, hong] = arr;
// const [kim, , hong] = arr; // 0번과 2번인덱스에만 할당

console.log(`kim: ${kim}, park: ${park}, hong: ${hong}`);

// 객체 디스트럭쳐링
const emp = {
    empName: '빡빡이',
    age : 29,
    hireDate: '2014-01-01',
    birthDay: '1995-12-31'
};

console.log(`사원의 이름은 
${emp.empName}고 
나이는 ${emp.age}이고 입사일자는 ${emp.hireDate}입니다.`);
