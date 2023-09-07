// dinhnluong@gmail.com
// last updated : 02.16.2023

let searchArray = [];
let latestData = [];
let arrFavsObj = [];

let currentPage = 1;
let coinsStorage = [];


$(document).ready(function () {

	function start() {		
		let milliseconds = (new Date).getTime();
		if (localStorage.getItem("cryptoData") === null) {
			getCMCData();
		} else {
			latestData = JSON.parse(localStorage['cryptoData']);
			if (latestData[0].updated === undefined || (latestData[0].updated + 604800000 ) <= milliseconds) {
				getCMCData();
			} else {
				searchArray = [];
				latestData.forEach(function (item, key) {
					searchArray.push(item.name);
				});
				searchArray.shift();
				orderPages(latestData);
			}

		}

		function getCMCData() {
			jQuery('#cryptoTable').html('');			
			jQuery('#cryptoTable').html("<td><div class='spinner-grow' role='status'><span class='sr-only'>Loading...</span></div></td><td><h4>Loading...may take a few moments</h4></td>");
			$.ajax({
				type: "GET",
				url: "https://api.coingecko.com/api/v3/coins/markets?",
				dataType: "json",
				data: {
					vs_currency: 'usd',
					order: 'market_cap_desc',
					per_page: 250,
					page: currentPage,
					sparkline: false
				},
				crossDomain: true,
				success: function (data) {
				

				

				if (currentPage == 10) {
					coinsStorage = coinsStorage.concat(data);
					
					coinsStorage.unshift({
						updated: milliseconds
					});
					
					localStorage['cryptoData'] = JSON.stringify(coinsStorage);
					latestData = coinsStorage;
					searchArray = [];
					coinsStorage.forEach(function (item, key) {
						searchArray.push(item.name);
					});
					searchArray.shift();
					orderPages(latestData);

				} else {
					coinsStorage = coinsStorage.concat(data);
					currentPage++;
					getCMCData();
				}
				
				},
			});
		}
	}

	function orderPages(data) {
	jQuery('#cryptoTable').html('');
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
				var ix = data.length;
				while(ix--) {
					if(displayTheseFavs[i].favsId == data[ix].id) {
						break;
					}
				}				
				b = document.createElement("TR");
				b.innerHTML = "<td><img src=\"" + data[ix].image.replace("large", "small") + "\" style=\"max-height: 100%; max-width: 100%\"></td><td>"
					 + data[ix].symbol.toUpperCase() + " - " + data[ix].name + "</td><td></td>";
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
						b.innerHTML = "<td><img src=\"" + data[i].image.replace("large", "small") + "\" style=\"max-height: 100%; max-width: 100%\"></td>"
						b.innerHTML += "<td align=\"center\">" + data[i].market_cap_rank + "</td>";
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
				b.innerHTML = "<td><img src=\"" + data[i].image.replace("large", "small") + "\" style=\"max-height: 100%; max-width: 100%\"></td>"
				b.innerHTML += "<td align=\"center\">" + data[i].market_cap_rank + "</td>";
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