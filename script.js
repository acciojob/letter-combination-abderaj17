function letterCombinations(input_digit) {
  //Complete the function
	if(!input_digit || input_digit.length === 0) return [];

	const digitToLetters = {
    '0': '0',
    '1': '1',
    '2': 'abc',
    '3': 'def',
    '4': 'ghi',
    '5': 'jkl',
    '6': 'mno',
    '7': 'pqrs',
    '8': 'tuv',
    '9': 'wxyz',
	}
	const result = [];
	function backtrack(index, current) {
     if(index === input_digit.length){
		 result.push(current);
		 return;
	 }		
		const letters = digitToLetters[input_digit[index]] || '' ;
		for(let ch of letters){
			backtrack(index + 1, current + ch);
		}
	}
	backtrack(0, '');
	return result.sort();
}

module.exports = letterCombinations;
