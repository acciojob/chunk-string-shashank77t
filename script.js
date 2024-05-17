function stringChop(str, size) {
	 let n=str.length;
	const arr=new Array();
	for(int i=0;i<n;i+=size){
		arr.push(str.substring(i,i+size));
	}
	return arr;	
}

   

const str = prompt("Enter String.");
const size = prompt("Enter Chunk Size.");
alert(stringChop(str, size));
