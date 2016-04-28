// JavaScript Document
function shake(obj,arrt,endFn){
	
	var arr = [];//20,-20,18,-18.....0
	var num = 0;
	for( var i=20; i>0;i -=2){
	 arr.push(i,-i);
	}
	arr.push(0);
	 
	clearInterval(obj.shake);
	obj.shake =  setInterval(function(){
	obj.style[arrt] =parseInt( getStyle(obj,arrt))+arr[num]+'px';//注意：getstyle获取到的有px；
	  num++;
	  if(num ===arr.length){
		  clearInterval(obj.shake);
		  endFn&&endFn();
		  }
	  },50);
};