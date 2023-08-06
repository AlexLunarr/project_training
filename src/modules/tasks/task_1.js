function digitize(n) {

	const numberArrey = String(n).split("");
	const result = [];
	for (let i = numberArrey.length - 1; i >= 0; i--) {
		const element = numberArrey[i];	
		result.push(Number(element));		
	};

	return result;

	// return String(n).split('').map(Number).reverse();
};



// const result = digitize(35231);
// console.log(result);