if(document.querySelector("#content > div > div > button")){
	document.querySelector("#content > div > div > button").click();
}

setTimeout(() => {  
	if(document.querySelectorAll("dyn-table-body > tc-item")){
		let percent = 0;
		let totalSum = 0;
		let i = 1;
		let blocks = document.querySelectorAll("#content > div > div > div > div.dyn-table-body > a.tc-item");
		blocks.forEach(
			(element) =>{ 
				i++; 
				if(!element.querySelector("#content > div > div > div > div.dyn-table-body > a.tc-item.warning > div.tc-status.text-warning")){
					let price = element.querySelector("div.tc-price.text-nowrap.tc-seller-sum").innerHTML.split(' ');
					totalSum = totalSum + Number(price[0]);
				}else{
					//console.log(element);
				}
			}
		)
		percent = totalSum / 100 * 3;
		totalSum = totalSum - percent;
		percent = Math.floor(percent);
		totalSum = Math.floor(totalSum);
		let h1 = document.querySelector("#content > div > div > h1").innerHTML;
		document.querySelector("#content > div > div > h1").style.display = 'flex';
		document.querySelector("#content > div > div > h1").style.justifyContent = 'space-between';
		document.querySelector("#content > div > div > h1").innerHTML =  h1 + '<div><div>結果: ' + totalSum + '</div>' + '<div><div>委员会: </div><div>' + percent + '</div></div></div>';
		document.querySelector("#content > div > div > h1").style.alignItems = 'center';
		document.querySelector("#content > div > div > h1 > div > div:nth-child(2)").style.display = 'flex';
		document.querySelector("#content > div > div > h1 > div > div:nth-child(2)").style.justifyContent = 'space-between';
		console.log(totalSum);
	}
}, 300);