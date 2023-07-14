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
