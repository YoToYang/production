// JavaScript Document
function compare(arr,v){
				for(var i=0;i<arr.length;i++){
					if(arr[i] == v ){
					return i;
					}//要是在这里写return -1;那么在第一个的时候就会返回-1，后面的没有检测到； 要在循环完毕之后，确定是否整个数组里面有相同的
				}
			return -1;		//循环完之后没有相同的就返回-1；
			};