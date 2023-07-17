// 한 개의 문자열을 입력받아 해당 문자열에 알파벳 대문자가 몇 개 있는지 알아내는 프로그램 을 작성하세요.

function solution(data) {
   let cnt = 0;
   for (let c of data) {
      if (c.toUpperCase() === c) {
         cnt++;
      }
   }
   return cnt;
}
console.log(solution('KoreaTimeGood'));

// function isToUpperCase(c) {
//    return c === c.toUpperCase();
// }

// function solution(data) {
//    let cnt = 0;
//    for (let c of data) {
//       if (isToUpperCase(c)) {
//          cnt++;
//       }
//    }
//    return cnt;
// }
// console.log(solution('KoreaTimeGood'));
