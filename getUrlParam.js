//获取url中查询字段
function getUrlParam(param){
	var search = location.search;
	search = search.slice(1);
	var arr = search.split('&');
	var r = null;
	arr.forEach(function(value){
		//id=111
		var tmpArr = value.split('=');
		//['id','111'];
		if(tmpArr[0] == param){
			r =  tmpArr[1];
		}
		
	})
	
	return r;
	
}
