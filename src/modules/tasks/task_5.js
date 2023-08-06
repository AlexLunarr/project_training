// Write a program that will calculate the number of trailing zeros in a factorial of a given number.

// N! = 1 * 2 * 3 *  ... * N

// Be careful 1000! has 2568 digits...

// For more info, see: http://mathworld.wolfram.com/Factorial.html

// Examples
// zeros(6) = 1
// # 6! = 1 * 2 * 3 * 4 * 5 * 6 = 720 --> 1 trailing zero

// zeros(12) = 2
// # 12! = 479001600 --> 2 trailing zeros
// Hint: You're not meant to calculate the factorial. Find another way to find the number of zeros.

// function zeros(n) {
// 	let element = 1;
// 	let result = 0;
// 	for (let i = 0; i < n; i++) {
// 		element =element * (1+i);
// 		// console.log(element)
// 	}
// 	element = (String(element).split("").reverse());
// 	console.log(element);
	
// 	for (let i = 0; i < element.length; i++) {
// 		const element2 = Number(element[i]);
// 		// console.log(element2);
// 		if (element2 !== 0) {
// 			return result;
// 		}
// 		if (element2 === 0) {
// 			result+=1;
// 		}

		
// 	}
// return result;

// }


// const result = zeros(21);
// console.log(result);

function zeros(n) {
  let count = 0;

  for (let i = 5; i <= n; i *= 5) {
    count += Math.floor(n / i);
  }

  return count;
}

// const result = zeros(5);
// console.log(result); //

// function zeros (n) {
//   var zs = 0;
//   while(n>0){
//     n=Math.floor(n/5);
//     zs+=n
//   }
//   return zs;
// }

// function zeros(n) {
//   return n/5 < 1 ? 0 : Math.floor(n/5) + zeros(n/5);
// }