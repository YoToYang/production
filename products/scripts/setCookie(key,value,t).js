// JavaScript Document
function setCookie(key,value,t){//t：过期时间，key：名称
	var oDate = new Date();
	oDate.setDate(oDate.getDate()+t);
	document.cookie = key+'='+value+';expires='+oDate.toGMTString();

}