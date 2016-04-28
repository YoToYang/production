// JavaScript Document
function bind(obj,enname,fn){
	
	if(obj.addEventListener){
		
		obj.addEventListener(evname,fn,false);//±ê×¼
		
		}else{
			
			obj.attachEvent('on'+evname,function(){//ie
												 fn.call(obj);
												 });
			
			}
	
	}
	//bind(document,¡®click¡¯,fn1)