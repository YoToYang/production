// JavaScript Document
function drag(obj){
	
		obj.onmousedown = function(ev){ //�����������document����������ҳ��ֻ����קһ������
			var ev  = ev||event;
			var disX =ev.clientX -obj.offsetLeft;
			var disY =ev.clientY-obj.offsetTop;
			if(obj.setCapture){
				obj.setCapture();//ȫ�ֲ��񣬽���Ǳ�׼�����Ĭ���¼�
			}
			document.onmousemove = function(ev){
				var ev  = ev||event;
				obj.style.left = ev.clientX-disX +'px';
				obj.style.top = ev.clientY-disY +'px';
			
			}
			document.onmouseup= function(){
				document.onmousemove = null;
				
				document.onmouseup=null;
				if(obj.releaseCapture){
						obj.releaseCapture();//ȫ�ֲ��񣬽���Ǳ�׼�����Ĭ���¼�
				}
			}
			return false;//��ֹ���������ѡ�����ֵ�Ĭ���¼�
		}
	
	}
	