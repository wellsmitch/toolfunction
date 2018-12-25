		function ajax(url,callbackfn,errorfn){
				
				var xhr = new XMLHttpRequest();
				xhr.open('get',url);
				xhr.send(null);
				xhr.onload = function(){
					if(xhr.status == 200){
						var jsonStr = xhr.responseText;
//						console.log)
	//					'adfadf23@#@#{"name":"zhang"}'
//						console.log(JSON.parse(jsonStr));
//						return jsonStr;
						callbackfn(jsonStr)
//						
					}else{
						if(errorfn){
							errorfn(xhr.responseText)
						}
						
						
					}
					
				}
			}