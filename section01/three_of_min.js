// 100이하의 자연수 A, B, C를 입력받아 세 수 중 가장 작은 값을 출력하는 프로그램을 작성하 세요.(정렬을 사용하면 안됩니다)

function solution(num1, num2, num3) {
   let answer;
   if (num1 > num2) {
      answer = num2;
   } else {
      answer = num1;
   }
   if (num3 < answer) {
      answer = num3;
   }
   return answer;
}

// function solution(num1, num2, num3) {
//    if (num1 > num2) {
//       if (num2 > num3) {
//          return num3;
//       } else {
//          return num2;
//       }
//    } else if (num1 > num3) {
//       return num3;
//    } else {
//       return num1;
//    }
// }

console.log(solution(1231231, 2123135, 33211211));
