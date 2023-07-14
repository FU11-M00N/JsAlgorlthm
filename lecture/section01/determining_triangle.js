// 길이가 서로 다른 A, B, C 세 개의 막대 길이가 주어지면 이 세 막대로 삼각형을 만들 수 있 으면 “YES"를 출력하고, 만들 수 없으면 ”NO"를 출력한다.

// 가장 긴 변의 길이가 나머지 둘의 변의 길이보다 작아함

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
