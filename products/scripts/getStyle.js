// JavaScript Document
function getStyle(obj,attr){
	if(obj.currentStyle){
		return obj.currentStyle[attr];//��ǰ��ʽ������IE6,7,8
		}else{
			return getComputedStyle(obj)[attr];//���������֮�����ʽ����׼�������
			
			}
	
	};
	// ��Ŀд����return obj.currentStyle.attr ? obj.currentStyle[attr]:getComputedStyle(obj)[attr];

//�÷�����alert(getStyle($('div1'),'width'));
//ע�����
//(1)Ҫ�õ��������Ե�ĳһ����ʽ��д��backgroundColor�� 
//(2)'width' ,���ź�width֮�䲻���пո�
//��3����Ҫ��ȡδ��Ԫ�����õ���ʽ�������ݣ�