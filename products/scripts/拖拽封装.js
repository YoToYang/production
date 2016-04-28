// JavaScript Document
function drag(obj){
	
		obj.onmousedown = function(ev){ //这里对象本来是document，但是整个页面只能拖拽一个对象
			var ev  = ev||event;
			var disX =ev.clientX -obj.offsetLeft;
			var disY =ev.clientY-obj.offsetTop;
			if(obj.setCapture){
				obj.setCapture();//全局捕获，解决非标准浏览器默认事件
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
						obj.releaseCapture();//全局捕获，解决非标准浏览器默认事件
				}
			}
			return false;//阻止浏览器对于选中文字的默认事件
		}
	
	}
	