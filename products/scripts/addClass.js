// JavaScript Document
//����compare����
function addClass(obj,className){
		//����û��class
		if(obj.className == ''){
		obj.className = className;
		}else{
		//������class
			var aclassName = obj.className.split(' ');
			var compare1 = compare(aclassName,className);
				//ѭ����ó�����Ƿ��д���Ҫ��ӵ�class��û�оͷ���-1
					if(compare1 == -1){//�����е�class��Ҫ��ӵ�class��ͬ
					obj.className +=' '+className;
					}
					//else��Ҫ��ӵ�class�������ڣ���ʲô��������
			}
			};