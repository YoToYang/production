// JavaScript Document

function getElementsByClassName(parent,tagName,className){ //���Ȼ�ȡ��parent 
		var aElem = parent.getElementsByTagName(tagName);
		var arr =[];
		for( var i=0;i<aElem.length;i++){
			var aClassName = aElem[i].className.split(' '); //���ж��classname��aElem��ֳ�����
			for(var j=0;j<aClassName.length;j++){//����classname����
				if(aClassName[j] == className){
					arr.push(aElem[i]);
					break;//����'box box'�������  ������ᱻѡ������ ����������������  ���Ե�ѡ��һ��֮���������forѭ��
				}
			}
			
		}
		return arr;
		};
		/* function getElementByClassName����{
				var aElem = document.getElementByTagName('*');//����ҳ�������е�Ԫ��
				var arr = [];
				for ( var i=0; i<aElem.length;i++){
						if(aElem[i].className == 'box'){
								arr.push(aElem[i]);
							}
					}
					return arr;
			}
		*/
		/* �������ķ�װ 
		function getElementByClassName��className��{
				var aElem = document.getElementByTagName('*');//����ҳ�������е�Ԫ��
				var arr = [];
				for ( var i=0; i<aElem.length;i++){
						if(aElem[i].className == className){
								arr.push(aElem[i]);
							}
					}
					return arr;
			}
			����Ҫ�ǳ��֡�box box2������classname�������classname���ᱻѡ�У��������벻ȫ��
			*/