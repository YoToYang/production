// JavaScript Document
function perfectshake(obj,arrt,evt,endFn){
	var pos = parseInt( getStyle(obj,arrt));
	obj[evt] = function(){
	
		var _this = this;
		var arr = [];//20,-20,18,-18.....0
		var num = 0;
		for( var j=20; j>0;j -=2){
		 arr.push(j,-j);
		}
		arr.push(0);
		 
		clearInterval(_this.shake);
		_this.shake =  setInterval(function(){
		_this.style[arrt] = pos+arr[num]+'px';//注意：getstyle获取到的有px；
		  num++;
		  if(num ===arr.length){
			  clearInterval(_this.shake);
			  endFn&&endFn();
			  }
	  },50);
	 
};
};