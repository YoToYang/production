// JavaScript Document
function getCookie(key){
	var arr1 = document.cookie.split('; ');//����ȡ����cookie��֣�����=ֵ�ַ���Ϊ��λ����ֳ�����[key1 =value1��key2 =value2]
	for(var i=0;i<arr1.length;i++){
		var arr2 = arr1[i].split('=');//arr2=[key1��value1]��ÿѭ��һ�Σ�arr2��ֵ���Ա����ǣ�
		if(arr2[0] == key){
			return decodeURI(arr2[1]);	//����cookieֵ
		}
		
	}


}