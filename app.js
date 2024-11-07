if(document.querySelector("#content > div > div > button")){
	document.querySelector("#content > div > div > button").click();
}

setTimeout(() => {  
	if(document.querySelector("#content > div > div > h1").innerHTML == 'Мои продажи'){
		let count = document.querySelectorAll('.dyn-table-body .tc-item:not(.warning)').length;
		document.querySelector("#content > div > div > h1").innerHTML = 'Мои продажи ' + '(' + count + ')'
	}
	
	if(document.querySelector("#content > div > div > h1").innerHTML == 'Мои покупки'){
		let count = document.querySelectorAll('.dyn-table-body .tc-item').length;
		document.querySelector("#content > div > div > h1").innerHTML = 'Мои покупки ' + '(' + count + ')'
	}
}, 300);