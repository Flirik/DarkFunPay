if(document.querySelectorAll("div.mb20 > div.offer")){
	let i = 1;
	let blocks = document.querySelectorAll("#content > div.bg-light-color > div > div > div > div > div.mb20 > div.offer");
	blocks.forEach(
		(element) =>{ 
			i++;
			let countOffers = document.querySelectorAll('div.mb20 > div:nth-child('+i+') > div.offer-tc-container > div > a.tc-item').length;
			let nameOffer = document.querySelector("div.mb20 > div:nth-child("+i+") > div.offer-list-title-container > div.offer-list-title > h3 > a").innerHTML;
			document.querySelector("div.mb20 > div:nth-child("+i+") > div.offer-list-title-container > div.offer-list-title > h3 > a").innerHTML = nameOffer + ' (' + countOffers + ')';
		}
	)
}

