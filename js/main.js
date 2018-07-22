// dinhnluong@gmail.com 07.21.2018

var storageCache = {};
var tableHTML = "";
var cryptoIdArray = [];
var obData = [];

$(document).ready(function() { 

	chrome.storage.sync.get(null, function(data) {

    	storageCache = data;

		if (data.default == null) {

        // set big 3 default coins
        chrome.storage.sync.set({"bitcoin": "on"}, null);
        chrome.storage.sync.set({"ethereum": "on"}, null);
        // set default to not null
        chrome.storage.sync.set({"default": "notNull"}, null);
        // set default display setting to rank
        chrome.storage.sync.set({"displaySetting": "rank"}, null);
        chrome.storage.sync.set({"cryptoId": [1, 1027]}, function(result){
          cryptoIdArray = result.cryptoId;
          storageCache = result;
        });
        chrome.storage.sync.set({"current": "1"}, function(result) {
          startPage = 1;
          storageCache = result;
        });
    }
    	cryptoIdArray = storageCache.cryptoId;
    	start(cryptoIdArray);

});


	function start(cryptoIdArray) {

		console.log("in start function : " + cryptoIdArray);

		var done = cryptoIdArray.length;
		$(cryptoIdArray).each(function() {

			var idNum = this;

			$.getJSON("https://api.coinmarketcap.com/v2/ticker/" + idNum + "/", function(data) {

				tableHTML = "";

				tableHTML += "<tr><td align=\"center\"><img src=\"https://s2.coinmarketcap.com/static/img/coins/16x16/" + data.data.id + ".png\"></td>";
				tableHTML += "<td>" + data.data.symbol + "</td><td align=\"center\">" + data.data.rank + "</td>";
				tableHTML += "<td><a href=\"https://coinmarketcap.com/currencies/" + data.data.name + "\" target=\"blank\">" + data.data.name +"</a</td>";

				var num = Number(data.data.quotes.USD.price);

				tableHTML += "<td align=\"right\">$" + num.toLocaleString(undefined, {minimumFractionDigits: 4, maximumFractionDigits: 4}) + "</td><td></td>";

				if (data.data.quotes.USD.percent_change_24h > 0) {
					tableHTML += "<td><div style=\"color: green\"><img src=\"../images/uparrow.png\"> +" + data.data.quotes.USD.percent_change_24h + "%</div></td><tr>";
				} else {
					tableHTML += "<td><div style=\"color: red\"><img src=\"../images/downarrow.png\"> " + data.data.quotes.USD.percent_change_24h + "%</div></td><tr>";
				}

				obData.push({ "name": data.data.name,
					"rank": data.data.rank,
					"price": data.data.quotes.USD.price,
					"change": data.data.quotes.USD.percent_change_24h,
					"html": tableHTML});

				done -= 1;
				if(done == 0) {
					sortDisplay(storageCache.displaySetting);
				}

			});
		});
	}
});

function sortDisplay(settings) {
	chrome.storage.sync.get(null, function(data) {
		storageCache = data; 
		var rankHTML = "";
		var sortedDisplay = [];

		for (var j = 0; j < obData.length; j++) {
			sortedDisplay.push(obData[j][settings]);
		}

		if (settings == "name") {
			if (storageCache[settings] == "on" || storageCache[settings] == null) {
				chrome.storage.sync.set({[settings]: "off"}, null);
				sortedDisplay.sort();
			} else if (storageCache[settings] == "off") {
				chrome.storage.sync.set({[settings]: "on"}, null);
				sortedDisplay.sort();
				sortedDisplay.reverse();
			}

		} else {
			if (storageCache[settings] == "on" || storageCache[settings] == null) {
				if (settings === "rank" ) {
					chrome.storage.sync.set({[settings]: "on"}, null);
				} else {
					chrome.storage.sync.set({[settings]: "off"}, null);
				}

				sortedDisplay.sort(function(a, b) {
					return a - b;
				});          

			} else if (storageCache[settings] == "off") {
				chrome.storage.sync.set({[settings]: "on"}, null);
				chrome.storage.sync.set({"display": [settings]}, null);
				sortedDisplay.sort(function(a, b) {
					return b - a;
				});
			}
		}

		for (var n = 0; n < sortedDisplay.length; n++) {
			for (var x = 0; x < obData.length; x++) {
				if (sortedDisplay[n] == obData[x][settings]) {
					rankHTML += obData[x].html;
				}
			}
		}

		jQuery('#cryptoTable').html('');
		$("#cryptoTable").append(rankHTML);
	});
}

$("#rank").click(function(){sortDisplay("rank");});
$("#name").click(function(){sortDisplay("name");});
$("#price").click(function(){sortDisplay("price");});
$("#change").click(function(){sortDisplay("change");});
