// JavaScript Document
function getStyle(obj,attr){
	if(obj.currentStyle){
		return obj.currentStyle[attr];//当前样式，兼容IE6,7,8
		}else{
			return getComputedStyle(obj)[attr];//浏览器计算之后的样式，标准浏览器下
			
			}
	
	};
	// 三目写法，return obj.currentStyle.attr ? obj.currentStyle[attr]:getComputedStyle(obj)[attr];

//用法例：alert(getStyle($('div1'),'width'));
//注意事项：
//(1)要得到符合属性的某一个样式，写成backgroundColor； 
//(2)'width' ,引号和width之间不能有空格；
//（3）不要获取未给元素设置的样式，不兼容；