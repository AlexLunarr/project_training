// This time no story, no theory. The examples below show you how to write function accum:

// Examples:
// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"
// The parameter of accum is a string which includes only letters from a..z and A..Z.

function accum(s) {
	const splitArray = s.split("");
	let accumResult = "";
	// console.log(splitArray);
	for (let i = 0; i < splitArray.length; i++) {
		
		let element = splitArray[i].toUpperCase();
		 
// console.log(element);
		if (i > 0) {
			
			for (let index = 0; index < i; index++) {
	
				element +=splitArray[i].toLowerCase();
				// console.log(element);
	
			};
			
		}
		
		accumResult += element + "-";
	};
	return accumResult.slice(0, accumResult.length - 1);
	
	// return s.split('').map((c, i) => (c.toUpperCase() + c.toLowerCase().repeat(i))).join('-');
	


}


// const result = accum("ZpglnRxqenU");
// console.log(result);