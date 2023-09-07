// dinhnluong@gmail.com
// last updated : 09.07.2023

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
			
			console.log(finalString);

			$.ajax({
				type: "GET",
				url: "https://api.coincap.io/v2/assets?",
				dataType: "json",
				data: {
					ids: finalString,
					sparkline: false
				},
				crossDomain: true,
				success: function (data) {
					console.log(data.data)
					let finalData = data.data;
					storedPropFavs = data.data;

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
			b.innerHTML = "<td align=\"center\"><img src=\"https://assets.coincap.io/assets/icons/" + storedPropFavs[propertyName].symbol.toLowerCase() + "@2x.png\" style=\"max-height: 16; max-width: 16\"></td>"
			b.innerHTML += "<td>" + storedPropFavs[propertyName].symbol.toUpperCase() + "</td><td align=\"center\">" + storedPropFavs[propertyName].rank + "</td>";
			b.innerHTML += "<td><a href=\"https://coinmarketcap.com/currencies/" + storedPropFavs[propertyName].id + "\" target=\"blank\">" + storedPropFavs[propertyName].name + "</a</td>";
			let num = Number(storedPropFavs[propertyName].priceUsd);
			b.innerHTML += "<td align=\"right\">" + num.toLocaleString(undefined, {
				minimumFractionDigits: 4,
				maximumFractionDigits: 4
			}) + "</td><td></td><td></td>";

			let change24h = storedPropFavs[propertyName].changePercent24Hr;
			if (change24h == null) {
				change24h = 0
			}

			if (change24h > 0) {
				b.innerHTML += "<td align=\"center\"><div style=\"background-color: green; color: white; border-radius: 5px; width: 80px\">" + parseFloat(change24h).toFixed(2) + "%</div></td>";
			} else {
				b.innerHTML += "<td align=\"center\"><div style=\"background-color: red; color: white; border-radius: 5px; width: 80px\">" + parseFloat(change24h).toFixed(2) + "%</div></td>";
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
				return a.rank - b.rank
			});
			break;
		case 'rankDesc':
			storedPropFavs.sort(function (a, b) {
				return b.rank - a.rank
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
				return a.priceUsd - b.priceUsd
			});
			break;
		case 'priceDesc':
			storedPropFavs.sort(function (a, b) {
				return b.priceUsd - a.priceUsd
			});
			break;
		case 'changeAsc':
			storedPropFavs.sort(function (a, b) {
				return a.changePercent24Hr - b.changePercent24Hr
			});
			break;
		case 'changeDesc':
			storedPropFavs.sort(function (a, b) {
				return b.changePercent24Hr - a.changePercent24Hr
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
	/*	"BTC",
		"ETH",
		"LTC",
		"BCH",
		"BNB",
		"EOS",
		"XRP",
		"XLM",
		"LINK",
		"DOT",
		"YFI",
		"AED",
		"ARS",
		"AUD",
		"BDT",
		"BHD",
		"BMD",
		"BRL",
		"CAD",
		"CHF",
		"CLP",
		"CNY",
		"CZK",
		"DKK",
		"EUR",
		"GBP",
		"HKD",
		"HUF",
		"IDR",
		"ILS",
		"INR",
		"JPY",
		"KRW",
		"KWD",
		"LKR",
		"MMK",
		"MXN",
		"MYR",
		"NGN",
		"NOK",
		"NZD",
		"PHP",
		"PKR",
		"PLN",
		"RUB",
		"SAR",
		"SEK",
		"SGD",
		"THB",
		"TRY",
		"TWD",
		"UAH",
		"VEF",
		"VND",
		"ZAR",
		"XDR",
		"XAG",
		"XAU",
		"BITS",
		"SATS" */
	];

	$.each(myOptions, function (val, text) {
		$('#currency').append($('<option></option>').val(text).html(text))
	});
/*
	$("#currency").val(currencyOption);

	$('#currency').change(function () {
		localStorage['currencyOption'] = $(this).val();
		currencyOption = $(this).val();
		start(storedFavsId);
	});
*/
});