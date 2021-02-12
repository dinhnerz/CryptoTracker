// dinhnluong@gmail.com
// last updated : 02.11.2021

let searchArray = [];
let latestData = [];
let arrFavsObj = [];
let key = "";
let keysList = ["b1c6a77d-29c5-40b5-bc3e-03f3780a17a4","cb5ec527-529f-4f75-8b22-20327e52195f"]


if (localStorage.getItem("keyToUse") !== null) {
	key = keysList[Math.floor(Math.random()*keysList.length)];
} else {
	if (localStorage.getItem("keyToUse") == 'b1c6a77d-29c5-40b5-bc3e-03f3780a17a4') { 
		key = 'cb5ec527-529f-4f75-8b22-20327e52195f'
		} else {
		key = 'b1c6a77d-29c5-40b5-bc3e-03f3780a17a4'
	}
}

localStorage['keyToUse'] = key;

$(document).ready(function () {

	function start() {
		
		let milliseconds = (new Date).getTime();
		if (localStorage.getItem("cryptoData") === null) {
			getCMCData();
		} else {
			latestData = JSON.parse(localStorage['cryptoData']);
			searchArray = [];
			latestData.forEach(function (item, key) {
				searchArray.push(item.name);
			});
			searchArray.shift();
			orderPages(latestData);
			if (latestData[0].updated === undefined || (latestData[0].updated + 604800000) <= milliseconds) {
				getCMCData();
			}
		}

		function getCMCData() {
			$.ajax({
				type: "GET",
				url: "https://ccointracker.herokuapp.com/https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest",
				dataType: "json",
				data: {
					start: 1,
					limit: 5000,
					convert: 'USD',
					CMC_PRO_API_KEY: key
				},
				crossDomain: true,
				success: function (data) {
					data.data.unshift({
						updated: milliseconds
					});
					localStorage['cryptoData'] = JSON.stringify(data.data);
					latestData = data.data;
					searchArray = [];
					data.data.forEach(function (item, key) {
						searchArray.push(item.name);
					});
					searchArray.shift();
					orderPages(latestData);
				},
			});
		}
	}

	function orderPages(data) {
		function addToFavorites(favs) {
			if (localStorage.getItem("arrFavsObj") !== null) {
				arrFavsObj = JSON.parse(localStorage['arrFavsObj']);
			}

			if (arrFavsObj.findIndex(x => x.storedFavs == favs) < 0) {
				arrFavsObj.push({
					favsId: data[favs].id,
					storedFavs: favs
				})
				arrFavsObj.sort(function (a, b) {
					return a.storedFavs - b.storedFavs
				});
				localStorage['arrFavsObj'] = JSON.stringify(arrFavsObj);
			}
			displayFavs(arrFavsObj);
		}

		function displayFavs(displayTheseFavs) {
			jQuery('#displayFavorites').html('');
			for (i = 0; i < displayTheseFavs.length; i++) {
				b = document.createElement("TR");
				b.innerHTML = "<td><img src=\"https://s2.coinmarketcap.com/static/img/coins/32x32/" + data[displayTheseFavs[i].storedFavs].id + ".png\"></td><td>"
					 + data[displayTheseFavs[i].storedFavs].symbol + " - " + data[displayTheseFavs[i].storedFavs].name + "</td><td></td>";
				b.innerHTML += "<input type='hidden' value='" + displayTheseFavs[i].storedFavs + "'>";
				b.addEventListener("click", function (e) {
					thisValue = this.getElementsByTagName("input")[0].value;
					arrFavsObj.splice(arrFavsObj.findIndex(x => x.storedFavs == thisValue), 1);
					localStorage['arrFavsObj'] = JSON.stringify(arrFavsObj);
					displayFavs(arrFavsObj);
				});
				$("#displayFavorites").append(b);
			}
		}

		function autocomplete(inp) {
			let currentFocus;
			inp.addEventListener("input", function (e) {
				let b,
				i,
				val = this.value;
				jQuery('#cryptoTable').html('');
				if (!val || val.length < 2) {
					displayFirst100();
					return false;
				}
				currentFocus = -1;
				x = 0;
				for (i = 1; i < data.length; i++) {

					if ((data[i].name).substr(0, val.length).toUpperCase() == val.toUpperCase() || (data[i].symbol).substr(0, val.length).toUpperCase() == val.toUpperCase()) {
						x++;
						b = document.createElement("TR");
						b.innerHTML = "<td><img src=\"https://s2.coinmarketcap.com/static/img/coins/32x32/" + data[i].id + ".png\"></td>"
						b.innerHTML += "<td align=\"center\">" + data[i].cmc_rank + "</td>";
						b.innerHTML += "<td>" + data[i].name + "</td>";

						b.innerHTML += "<input type='hidden' value='" + (i) + "'>";
						b.addEventListener("click", function (e) {
							addToFavorites(this.getElementsByTagName("input")[0].value);
							inp.value = "";
							jQuery('#cryptoTable').html('');

						});
						
						$("#cryptoTable").append(b);
						if (x == 15) {
							break;
						}
					}
				}
				if (x == 0) {
					$("#cryptoTable").append("<td></td><td></td><td><h4>No Coin found</h4></td><td></td><td></td>");

				}
			});

			document.addEventListener("click", function (e) {
				inp.value = "";
				jQuery('#cryptoTable').html('');
				displayFirst100();
			});
		}

		autocomplete(document.getElementById("coinSearch"));

		if (localStorage.getItem("arrFavsObj") !== null) {
			arrFavsObj = JSON.parse(localStorage['arrFavsObj']);
			displayFavs(arrFavsObj);
		}
		
		displayFirst100();
	
		function displayFirst100() {
			for (let i = 1; i < 16; i++) {
				b = document.createElement("TR");
				b.innerHTML = "<td><img src=\"https://s2.coinmarketcap.com/static/img/coins/32x32/" + data[i].id + ".png\"></td>"
				b.innerHTML += "<td align=\"center\">" + data[i].cmc_rank + "</td>";
				b.innerHTML += "<td>" + data[i].name + "</td>";

				b.innerHTML += "<input type='hidden' value='" + (i) + "'>";
				b.addEventListener("click", function (e) {
					addToFavorites(this.getElementsByTagName("input")[0].value);
					jQuery('#cryptoTable').html('');
				});

				$("#cryptoTable").append(b);
			}
		}
		
	}
	start();
	
	$("#resetFav").click(function () {
		jQuery('#displayFavorites').html('');
		arrFavsObj = [];
		localStorage.removeItem('arrFavsObj');
	});
	
	
});