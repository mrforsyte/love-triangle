/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
	var count = 0;
	for (var i = 0; i <preferences.length; i++){
	  for (var j = 0; j<preferences.length - 2; j++) {
	     if((preferences[j+1] - preferences[j] == 1) && (preferences[j+1] - preferences[j+2] == 2)){
		count++;
		      }
		   }	
		}
		return count;
};
