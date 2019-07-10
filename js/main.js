// dinhnluong@gmail.com 07.10.2019

let storedFavsId = [];
let storedPropFavs = [];
let sortOptions = '';
let currencyOption = "";

if (localStorage.getItem("sortOptions") !== null) {
	sortOptions = localStorage['sortOptions'];
} else {
	sortOptions = "rankAsc";
	localStorage['sortOptions'] = sortOptions;
}

if (localStorage.getItem("currencyOption") !== null) {
	currencyOption = localStorage['currencyOption'];
} else {
	currencyOption = "USD";
	localStorage['currencyOption'] = currencyOption;
}

milliseconds = (new Date).getTime();

if (localStorage.getItem("milliseconds") !== null) {
	storedMS = parseInt(localStorage['milliseconds']);
} else {
	localStorage['milliseconds'] = milliseconds;
	storedMS = parseInt(localStorage['milliseconds']);
}

$(document).ready(function () {
	
	if (localStorage.getItem("arrFavsObj") !== null && JSON.parse(localStorage.getItem("arrFavsObj")).length > 0) {
		let arrFavsObj = JSON.parse(localStorage['arrFavsObj']);
		arrFavsObj.forEach(function (element) {
			storedFavsId.push(element.favsId);
		});
		start(storedFavsId);
	} else {
		jQuery('#cryptoTable').html('<td colspan="2"><div div align="center" id="symbol" title="Options"><a href="../html/options.html" target="blank"><img src="../images/options.png" style="width:32px;height:32px;"></a></div></td><td colspan="4"><h4>Please select a coin to track</h4><td>');
	}

	function start(favsArr) {
	
		if ((storedMS + 600) < milliseconds) {
		
			jQuery('#cryptoTable').html('');			
			jQuery('#cryptoTable').html("<td><div class='spinner-grow' role='status'><span class='sr-only'>Loading...</span></div></td><td><h4>Loading...</h4></td>");

			localStorage['milliseconds'] = (new Date).getTime();
			finalString = favsArr.join(",");
			$.ajax({
				type: "GET",
				url: "https://cors-anywhere.herokuapp.com/https://pro-api.coinmarketcap.com/v1/cryptocurrency/quotes/latest?",
				dataType: "json",
				data: {
					id: finalString,
					convert: currencyOption,
					CMC_PRO_API_KEY: 'cb5ec527-529f-4f75-8b22-20327e52195f'
				},
				crossDomain: true,
				success: function (data) {
					let finalData = data.data;
					storedPropFavs = [];
					for (let propertyName in finalData) {
						storedPropFavs.push(finalData[propertyName]);
					}
					localStorage['storedPropFavs'] = JSON.stringify(storedPropFavs);
					
					
					sortDisplay();
				}
			});
		} else {		
			storedPropFavs = JSON.parse(localStorage['storedPropFavs']);
			sortDisplay();		
		}	
	}

	function displayCoins() {
		jQuery('#cryptoTable').html('');
		for (let propertyName in storedPropFavs) {
			b = document.createElement("TR");
			b.innerHTML = "<td align=\"center\"><img src=\"https://s2.coinmarketcap.com/static/img/coins/16x16/" + storedPropFavs[propertyName].id + ".png\"></td>";
			b.innerHTML += "<td>" + storedPropFavs[propertyName].symbol + "</td><td align=\"center\">" + storedPropFavs[propertyName].cmc_rank + "</td>";
			b.innerHTML += "<td><a href=\"https://coinmarketcap.com/currencies/" + storedPropFavs[propertyName].name + "\" target=\"blank\">" + storedPropFavs[propertyName].name + "</a</td>";
			let num = Number(storedPropFavs[propertyName].quote[currencyOption].price);
			b.innerHTML += "<td align=\"right\">" + num.toLocaleString(undefined, {
				minimumFractionDigits: 4,
				maximumFractionDigits: 4
			}) + "</td><td></td><td></td>";

			let change24h = storedPropFavs[propertyName].quote[currencyOption].percent_change_24h;

			if (change24h > 0) {
				b.innerHTML += "<td><div style=\"color: green\"><img src=\"../images/uparrow.png\"> +" + change24h.toLocaleString(undefined, {
					minimumFractionDigits: 2,
					maximumFractionDigits: 2
				}) + "%</div></td>";
			} else {
				b.innerHTML += "<td><div style=\"color: red\"><img src=\"../images/downarrow.png\"> " + change24h.toLocaleString(undefined, {
					minimumFractionDigits: 2,
					maximumFractionDigits: 2
				}) + "%</div></td>";
			}
			$("#cryptoTable").append(b);
		}
	}

	function sortDisplay(settings) {

		switch (settings) {
		case 'rank':
			if (sortOptions == 'rankAsc') {
				sortOptions = 'rankDesc';
			} else {
				sortOptions = 'rankAsc';
			}
			break;
		case 'name':
			if (sortOptions == 'nameAsc') {
				sortOptions = 'nameDesc';
			} else {
				sortOptions = 'nameAsc';
			}
			break;
		case 'price':
			if (sortOptions == 'priceAsc') {
				sortOptions = 'priceDesc';
			} else {
				sortOptions = 'priceAsc';
			}
			break;
		case 'change':
			if (sortOptions == 'changeAsc') {
				sortOptions = 'changeDesc';
			} else {
				sortOptions = 'changeAsc';
			}
			break;
		}

		switch (sortOptions) {
		case 'rankAsc':
			storedPropFavs.sort(function (a, b) {
				return a.cmc_rank - b.cmc_rank
			});
			break;
		case 'rankDesc':
			storedPropFavs.sort(function (a, b) {
				return b.cmc_rank - a.cmc_rank
			});
			break;
		case 'nameAsc':
			storedPropFavs.sort((a, b) => a.name.localeCompare(b.name));
			break;
		case 'nameDesc':
			storedPropFavs.sort((a, b) => b.name.localeCompare(a.name));
			break;
		case 'priceAsc':
			storedPropFavs.sort(function (a, b) {
				return a.quote[currencyOption].price - b.quote[currencyOption].price
			});
			break;
		case 'priceDesc':
			storedPropFavs.sort(function (a, b) {
				return b.quote[currencyOption].price - a.quote[currencyOption].price
			});
			break;
		case 'changeAsc':
			storedPropFavs.sort(function (a, b) {
				return a.quote[currencyOption].percent_change_24h - b.quote[currencyOption].percent_change_24h
			});
			break;
		case 'changeDesc':
			storedPropFavs.sort(function (a, b) {
				return b.quote[currencyOption].percent_change_24h - a.quote[currencyOption].percent_change_24h
			});
			break;
		}

		localStorage['sortOptions'] = sortOptions;
		displayCoins();

	}

	$("#rank").click(function () {
		sortDisplay("rank");
	});
	$("#name").click(function () {
		sortDisplay("name");
	});
	$("#price").click(function () {
		sortDisplay("price");
	});
	$("#change").click(function () {
		sortDisplay("change");
	});
	
	let myOptions = [
		"USD",
		"AED",
		"ALL",
		"AMD",
		"ARS",
		"AUD",
		"AZN",
		"BAM",
		"BDT",
		"BGN",
		"BHD",
		"BMD",
		"BOB",
		"BRL",
		"BYN",
		"CAD",
		"CHF",
		"CLP",
		"CNY",
		"COP",
		"CRC",
		"CUP",
		"CZK",
		"DKK",
		"DOP",
		"DZD",
		"EGP",
		"EUR",
		"GBP",
		"GEL",
		"GHS",
		"GTQ",
		"HKD",
		"HNL",
		"HRK",
		"HUF",
		"IDR",
		"ILS",
		"INR",
		"IQD",
		"IRR",
		"ISK",
		"JMD",
		"JOD",
		"JPY",
		"KES",
		"KGS",
		"KHR",
		"KRW",
		"KWD",
		"KZT",
		"LBP",
		"LKR",
		"MAD",
		"MDL",
		"MKD",
		"MMK",
		"MNT",
		"MUR",
		"MXN",
		"MYR",
		"NAD",
		"NGN",
		"NIO",
		"NOK",
		"NPR",
		"NZD",
		"OMR",
		"PAB",
		"PEN",
		"PHP",
		"PKR",
		"PLN",
		"QAR",
		"RON",
		"RSD",
		"RUB",
		"SAR",
		"SEK",
		"SGD",
		"SSP",
		"THB",
		"TND",
		"TRY",
		"TTD",
		"TWD",
		"UAH",
		"UGX",
		"UYU",
		"UZS",
		"VES",
		"VND",
		"ZAR"
	];

	$.each(myOptions, function (val, text) {
		$('#currency').append($('<option></option>').val(text).html(text))
	});
	
	$("#currency").val(currencyOption);

	$('#currency').change(function () {
		localStorage['currencyOption'] = $(this).val();
		currencyOption = $(this).val();
		start(storedFavsId);
	});

});