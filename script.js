function stringChop(str, size) {
  // your code here
	let ans = [];
	if(str.length === 0){
		return [];
	}else{
		for(let i=0;i<str.length;i=i+size){
			ans.push(str.slice(i, i+size));
		}
		return ans;
	}
}

// Do not change the code below
const str = prompt("Enter String.");
const size = prompt("Enter Chunk Size.");
alert(stringChop(str, size));
