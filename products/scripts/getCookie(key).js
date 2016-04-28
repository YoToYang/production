// JavaScript Document
function getCookie(key){
	var arr1 = document.cookie.split('; ');//将获取到的cookie拆分，名称=值字符串为单位，拆分成数组[key1 =value1，key2 =value2]
	for(var i=0;i<arr1.length;i++){
		var arr2 = arr1[i].split('=');//arr2=[key1，value1]，每循环一次，arr2的值可以被覆盖；
		if(arr2[0] == key){
			return decodeURI(arr2[1]);	//返回cookie值
		}
		
	}


}