// dinhnluong@gmail.com 01.03.2018

var tableHTML = "";

var storageCache = {};
var apiArray = [];

var grab = "bitcoin";


$(document).ready(function() { 

  chrome.storage.sync.get(null, function(data) {

    storageCache = data;

    console.log(storageCache)

    if (storageCache.bitcoin == "on") {
      apiArray.push("bitcoin");
    }
    if (storageCache.litecoin == "on") {
      apiArray.push("litecoin");
    }
    if (storageCache.ripple == "on") {
      apiArray.push("ripple");
    }
    if (storageCache.ethereum == "on") {
      apiArray.push("ethereum");
    }
    if (storageCache.cardano == "on") {
      apiArray.push("cardano");
    }
    if (storageCache.iota == "on") {
      apiArray.push("iota");
    }
    if (storageCache.tron == "on") {
      apiArray.push("tron");
    }
    if (storageCache.stellar == "on") {
      apiArray.push("stellar");
    }
    if (storageCache.bitcoincash == "on") {
      apiArray.push("bitcoin-cash");
    }
    if (storageCache.qtum == "on") {
      apiArray.push("qtum");
    }
    if (storageCache.bitcoingold == "on") {
      apiArray.push("bitcoin-gold");
    }
    if (storageCache.eos == "on") {
      apiArray.push("eos");
    }
    if (storageCache.neo == "on") {
      apiArray.push("neo");
    }
    if (storageCache.dash == "on") {
      apiArray.push("dash");
    }
    if (storageCache.monero == "on") {
      apiArray.push("monero");
    }
    if (storageCache.nem == "on") {
      apiArray.push("nem");
    }

    console.log(apiArray[0]);

    for (i = 0; i < apiArray.length; i++) {
      $.getJSON("https://api.coinmarketcap.com/v1/ticker/" + apiArray[i] + "/", function (data) {

        console.log(data);

        tableHTML = "";

        tableHTML += "<tr><td><img src=\"../images/logo/" + data[0].id + ".png\"></td>";
        tableHTML += "<td>" + data[0].symbol + "</td>";
        tableHTML += "<td>" + data[0].name +"</td>";
        tableHTML += "<td>$" + data[0].price_usd + "</td>";
        tableHTML += "<td>" + data[0].percent_change_24h + "</td><tr>";

        $("#cryptoTable").append(tableHTML);
        console.log("hello");


      });

    }


  });


  
});



