/**
  Given two strings str1 and str2, check if str2 can be formed from str1 
	so you should return 'YES' or 'NO' depending on the case
	const input = `
		hello eellloh
		aa ab
		aaa aba
		abcd daabbcc
		abcd aefgh
	`;
	
	The result for this case should be!
	YES
	NO
	NO
	YES
	NO
*/

function twoStrings(str1, str2) {
  // This is where the magic happens
  let result = '';

  for (let index = 0; index < str2.length; index++) {
    if (str1.indexOf(str2[index]) >= 0 ) {
        result = 'YES';
    } else {
        return result = 'NO';
    }
  }
  return result
}

const input = `
	hello eellloh
	aa ab
	aaa aba
	abcd daabbcc
	abcd aefgh
`;
console.log(twoStrings('hello', 'eellloh'));
console.log(twoStrings('aa', 'ab'));
console.log(twoStrings('aaa', 'aba'));
console.log(twoStrings('abcd', 'daabbcc'));
console.log(twoStrings('abcd', 'aefgh'));