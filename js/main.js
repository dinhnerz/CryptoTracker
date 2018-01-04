// dinhnluong@gmail.com 01.03.2018

var storageCache = {};
var apiArray = [];


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
    if (storageCache.ethereumclassic == "on") {
      apiArray.push("ethereum-classic");
    }
    if (storageCache.raiblocks == "on") {
      apiArray.push("raiblocks");
    }
    if (storageCache.icon == "on") {
      apiArray.push("icon");
    }
    if (storageCache.bitconnect == "on") {
      apiArray.push("bitconnect");
    }
    if (storageCache.lisk == "on") {
      apiArray.push("lisk");
    }
    if (storageCache.bitshares == "on") {
      apiArray.push("bitshares");
    }
    if (storageCache.status == "on") {
      apiArray.push("status");
    }
    if (storageCache.omisego == "on") {
      apiArray.push("omisego");
    }
    if (storageCache.verge == "on") {
      apiArray.push("verge");
    }
    if (storageCache.populous == "on") {
      apiArray.push("populous");
    }
    if (storageCache.ardor == "on") {
      apiArray.push("ardor");
    }
    if (storageCache.steem == "on") {
      apiArray.push("steem");
    }
    if (storageCache.zcash == "on") {
      apiArray.push("zcash");
    }
    if (storageCache.stratis == "on") {
      apiArray.push("stratis");
    }
    if (storageCache.tether == "on") {
      apiArray.push("tether");
    }
    if (storageCache.waves == "on") {
      apiArray.push("waves");
    }
    if (storageCache.bytecoin == "on") {
      apiArray.push("bytecoin-bcn");
    }
    if (storageCache.hshare == "on") {
      apiArray.push("hshare");
    }
    if (storageCache.komodo == "on") {
      apiArray.push("komodo");
    }
    if (storageCache.siacoin == "on") {
      apiArray.push("siacoin");
    }
    if (storageCache.vechain == "on") {
      apiArray.push("vechain");
    }
    if (storageCache.binancecoin == "on") {
      apiArray.push("binance-coin");
    }
    if (storageCache.golem == "on") {
      apiArray.push("golem");
    }
    if (storageCache.augur == "on") {
      apiArray.push("augur");
    }
    if (storageCache.digibyte == "on") {
      apiArray.push("digibyte");
    }
    if (storageCache.veritaseum == "on") {
      apiArray.push("veritaseum");
    }
    if (storageCache.ark == "on") {
      apiArray.push("ark");
    }
    if (storageCache.kucoinshares == "on") {
      apiArray.push("kucoin-shares");
    }
    if (storageCache.decred == "on") {
      apiArray.push("decred");
    }
    if (storageCache.basicattentiontoken == "on") {
      apiArray.push("basic-attention-token");
    }
    if (storageCache.nxt == "on") {
      apiArray.push("nxt");
    }
    if (storageCache.dragonchain == "on") {
      apiArray.push("dragonchain");
    }
    if (storageCache.salt == "on") {
      apiArray.push("salt");
    }
    if (storageCache.powerledger == "on") {
      apiArray.push("power-ledger");
    }
    if (storageCache.pivx == "on") {
      apiArray.push("pivx");
    }
    if (storageCache.factom == "on") {
      apiArray.push("factom");
    }

    for (i = 0; i < apiArray.length; i++) {
      $.getJSON("https://api.coinmarketcap.com/v1/ticker/" + apiArray[i] + "/", function (data) {

        var tableHTML = "";

        tableHTML += "<tr><td><img src=\"../images/logo/" + data[0].id + ".png\"></td>";
        tableHTML += "<td>" + data[0].symbol + "</td>";
        tableHTML += "<td>" + data[0].name +"</td>";
        tableHTML += "<td>$" + data[0].price_usd + "</td>";
        tableHTML += "<td>" + data[0].percent_change_24h + "</td><tr>";

        $("#cryptoTable").append(tableHTML);

      });

    }


  });


  
});



