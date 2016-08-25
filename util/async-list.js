// 异步列表
export default function(list){
	var listeners = [];
	var isComplate = false;
	var onComplete = function(...results){
		isComplate = true;
		listeners.forEach(listener => {
			listener(...results);
		});
	};

	var count = list.length,
		results = [];
	if(list && count > 0){
		list.forEach((item, index) => {
			item(result => {
				results[index] = result;
				count --;
				if(count === 0){
					onComplete(...results);
				}
			});
		});
	}else{
		onComplete();
	}

	return {
		complete: function(listener){
			if(isComplate){
				listener(...results);
			}else{
				listeners.push(listener);
			}
		}
	};
};