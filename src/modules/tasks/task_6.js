function findOutlier(integers){
	// console.log(integers);
	let whatNamber = 3;
	for (let i = 0; i < 3; i++) {
		const element = integers[i];
		whatNamber += element;
		console.log(whatNamber);
	};
	if (whatNamber % 2 === 0) {
		let array = integers.filter(value => value % 2 === 1);
		console.log(array);
		return Number(array);
		
	} else {
		let array = integers.filter(value => value % 2 === 0);
		console.log(array);
		return Number(array);

	};


}




// const result = findOutlier([0, 1, 2]);
const result = findOutlier([1, 2, 4]);
// const result = findOutlier([0,0,3,0,0]);
console.log(result);