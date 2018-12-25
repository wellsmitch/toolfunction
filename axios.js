			var axios = {
				get:function(url){
					var p = new Promise(function(resl,rej){
						var xhr = new XMLHttpRequest();
						xhr.open('get',url);
						xhr.send(null);
						xhr.onload = function(){
							if(xhr.status ==200){
								resl(xhr.responseText)
							}else{
								rej(xhr.responseText);
							}
						}
					});
					return p ;
				}
			}