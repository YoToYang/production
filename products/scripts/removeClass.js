// JavaScript Document
//����compare����
function removeClass(obj,className){
			//ԭ����û��class,������ʲô
			//ԭ����class
			if(obj.className != ''){
				//��class��ֳ�����
				var aClassName = obj.className.split(' ');
				var compare2 = compare(aClassName,className);
				if(compare2 != -1){
				aClassName.splice(compare2,1);//ɾ����compare2=i
				obj.className = aClassName.join(' ');
				}
				
			}
		};