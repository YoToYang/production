 function move(obj,direction,aim,step,time,endFn){
	step = parseInt( getStyle(obj,direction))<aim? step : -step;
	clearInterval(obj.timer);//���ڵ���¼������������������ʱ����
	 obj.timer=setInterval( function(){
	  var speed = parseInt( getStyle(obj,direction))+ step;//10px //�ƶ�leftֵ
	  if(speed>aim && step>0|| speed<aim && step<0){
	 speed = aim;//��800��ʱ��ͣ�£�
	 }
	
	  obj.style[direction] =speed +'px';//�ü���PX;  //ÿ���ƶ�10��
	  if( speed === aim)
	  endFn&&endFn();
	 },time);//ÿ��100�����ƶ�һ�Σ�
	};//directon ����aimĿ���,step������time�ٶ�
	