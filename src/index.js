/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  // your implementation
	for (var i = 0; i<preferences.length;i++){
		for(var j = 0; j < preferences.length-1;j++){
			if(preferences[j]>preferences[j+1]){
			   var temp = preferences[j];
			   preferences[j] = preferences[j+1];
			   preferences[j+1] = temp;
			}
		}
	}
		return preferences.length/3;
};
