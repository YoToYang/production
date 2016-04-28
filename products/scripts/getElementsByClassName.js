// JavaScript Document

function getElementsByClassName(parent,tagName,className){ //得先获取到parent 
		var aElem = parent.getElementsByTagName(tagName);
		var arr =[];
		for( var i=0;i<aElem.length;i++){
			var aClassName = aElem[i].className.split(' '); //把有多个classname的aElem拆分成数组
			for(var j=0;j<aClassName.length;j++){//遍历classname数组
				if(aClassName[j] == className){
					arr.push(aElem[i]);
					break;//若是'box box'这种情况  则这个会被选中两次 添加索引会出现问题  所以当选中一次之后跳出这个for循环
				}
			}
			
		}
		return arr;
		};
		/* function getElementByClassName（）{
				var aElem = document.getElementByTagName('*');//遍历页面上所有的元素
				var arr = [];
				for ( var i=0; i<aElem.length;i++){
						if(aElem[i].className == 'box'){
								arr.push(aElem[i]);
							}
					}
					return arr;
			}
		*/
		/* 上面代码的封装 
		function getElementByClassName（className）{
				var aElem = document.getElementByTagName('*');//遍历页面上所有的元素
				var arr = [];
				for ( var i=0; i<aElem.length;i++){
						if(aElem[i].className == className){
								arr.push(aElem[i]);
							}
					}
					return arr;
			}
			但是要是出现‘box box2’这种classname，则这个classname不会被选中；上述代码不全面
			*/