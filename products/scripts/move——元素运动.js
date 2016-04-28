 function move(obj,direction,aim,step,time,endFn){
	step = parseInt( getStyle(obj,direction))<aim? step : -step;
	clearInterval(obj.timer);//由于点击事件操作，所以先清除定时器；
	 obj.timer=setInterval( function(){
	  var speed = parseInt( getStyle(obj,direction))+ step;//10px //移动left值
	  if(speed>aim && step>0|| speed<aim && step<0){
	 speed = aim;//到800的时候停下；
	 }
	
	  obj.style[direction] =speed +'px';//得加上PX;  //每次移动10；
	  if( speed === aim)
	  endFn&&endFn();
	 },time);//每隔100毫秒移动一次；
	};//directon 方向，aim目标点,step步长，time速度
	