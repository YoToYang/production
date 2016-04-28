// JavaScript Document
//调用compare函数
function removeClass(obj,className){
			//原本就没有class,不用做什么
			//原本有class
			if(obj.className != ''){
				//将class拆分成数组
				var aClassName = obj.className.split(' ');
				var compare2 = compare(aClassName,className);
				if(compare2 != -1){
				aClassName.splice(compare2,1);//删除，compare2=i
				obj.className = aClassName.join(' ');
				}
				
			}
		};