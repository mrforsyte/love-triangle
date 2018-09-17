/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
	var count = 0;
	preferences.unshift(0);
	for(let i = 1; i<preferences.length; i++){
		let first = preferences[i];
		let second = preferences[first];
		let third = preferences[second];


		if(i == third) count++;
	}
		return Math.floor(count/3);
		   	
		
};
