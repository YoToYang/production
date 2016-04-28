// JavaScript Document
//调用compare函数
function addClass(obj,className){
		//本来没有class
		if(obj.className == ''){
		obj.className = className;
		}else{
		//本来有class
			var aclassName = obj.className.split(' ');
			var compare1 = compare(aclassName,className);
				//循环完得出结果是否有存在要添加的class，没有就返回-1
					if(compare1 == -1){//本来有的class与要添加的class不同
					obj.className +=' '+className;
					}
					//else：要添加的class本来存在，就什么都不用做
			}
			};