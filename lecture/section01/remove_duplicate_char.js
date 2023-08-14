// 소문자로 된 한개의 문자열이 입력되면 중복된 문자를 제거하고 출력하는 프로그램을 작성하 세요.
// 제거된 문자열의 각 문자는 원래 문자열의 순서를 유지합니다.

function solution(data) {
   let answer = '';

   answer = data
      .split('')
      .filter((el, index, arr) => {
         return arr.indexOf(el) === index;
      })
      .join('');

   return answer;
}

console.log(solution('testaastest'));
