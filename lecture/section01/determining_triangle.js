// 가장 긴 변의 길이가 나머지 둘의 변의 길이보다 작아함
// 긴변 < 두변

// 가장 큰ㅇ놈을 먼저 찾아 그담에 나머지 둘을 더한담에 또 비교를해서 yes or no
function solution(a, b, c) {
   let max;

   if (a > b) {
      max = a;
   } else {
      max = b;
   }
   if (c > max) {
      max = c;
   }
   let tmp = a + b + c - max;
   if (max > tmp) {
      return 'NO';
   } else {
      return 'YES';
   }
}
console.log(solution(6, 7, 11));
console.log(solution(13, 33, 17));
