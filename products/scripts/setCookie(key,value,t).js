// JavaScript Document
function setCookie(key,value,t){//t������ʱ�䣬key������
	var oDate = new Date();
	oDate.setDate(oDate.getDate()+t);
	document.cookie = key+'='+value+';expires='+oDate.toGMTString();

}