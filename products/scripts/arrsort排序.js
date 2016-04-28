// JavaScript Document
arr.sort(function(a,b){ return a-b;});//从小到大排序

//arr.sort(function(a,b){ return b-a;});从大到小排

//arr.sort(function(a,b){ return parseInt（a）-parseInt（b）;});当arr里的是字符串时，如300px；alert(arr)时，还是字符类型，不会被改变类型

//arr.sort(function(a,b){return Math.random()-0.5;}); 随机排序， Math.random()：0~1之间的任意数字；由于 Math.random()-0.5可能为正可能为负，所以随机抓取的两个数字可能交换也可能不交换


//Math.round( Math.random()*(b-a)+a); a~b之间的随机数；
//Math.round( Math.random()*x);       0~x；
//Math.ceil( Math.random()*x);        1~x；