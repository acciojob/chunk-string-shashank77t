function stringChop(str, size) {
  // your code here
	 let n=str.length;
	const arr=new Array();
	for(int i=0;i<n-size;i+=size){
		arr.push(str.substring(i,i+size));
	}
	return arr;
}


// Do not change the code belowadfflksl
const str = prompt("Enter String.");
const size = prompt("Enter Chunk Size.");
alert(stringChop(str, size));
