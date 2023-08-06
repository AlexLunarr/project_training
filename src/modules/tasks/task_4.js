// Write a function that takes an array of numbers (integers for the tests) and a target number. It should find two different items in the array that, when added together, give the target value. The indices of these items should then be returned in a tuple / list (depending on your language) like so: (index1, index2).

// For the purposes of this kata, some tests may have multiple answers; any valid solutions will be accepted.

// The input will always be valid (numbers will be an array of length 2 or greater, and all of the items will be numbers; target will always be the sum of two different items from that array).

// Based on: http://oj.leetcode.com/problems/two-sum/

// twoSum([1, 2, 3], 4) // returns [0, 2] or [2, 0]

function twoSum(numbers, target) {

	const array = numbers;

	for (let i = 0; i < array.length; i++) {
		const element = array[i];
	
		for (let i2 = i+1; i2 < array.length; i2+=1) {
			const element2 = array[i2] + element;
			console.log(element2);
			if (element2 === target) {
				return ([i, i2])
			}
			
		}
		
	}

	// for (var i = 0; i < numbers.length-1; i++) {
  //       for (var j = i+1; j < numbers.length; j++) {
  //           if (numbers[i] + numbers[j] === target) return [i, j];
  //       }
  //   }

};

// const result = twoSum([417, -58, -14, -121, 435, -100, 765, -384, 639, -91, -526, -550, 906, -585, 104, 875, -423, 900, 236, 772, -369, -759, 148, -951, 541, -917, 601, 9, 437, -301, 880, 740, 445, -779, 187, -34, 857, -482, 939, 231, -244, -240, 130, -666, 423, 313, 192, 167], -1163);
// console.log(result);