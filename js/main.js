// dinhnluong@gmail.com 02.27.2018

var storageCache = {};
var apiArray = [];
var obData = []; 

var tableHTML = "";

var settings = "";


chrome.storage.sync.get(null, function(data) {

  if (data.default == null) {

        // set 5 default coins
        chrome.storage.sync.set({"bitcoin": "on"}, null);
        chrome.storage.sync.set({"litecoin": "on"}, null);
        chrome.storage.sync.set({"ethereum": "on"}, null);
        chrome.storage.sync.set({"ripple": "on"}, null);
        chrome.storage.sync.set({"bitcoincash": "on"}, null);

        chrome.storage.sync.set({"default": "v1"}, null);

        // set default to display names
        chrome.storage.sync.set({"display": "name"}, null);
        chrome.storage.sync.set({"style": "asending"});


      }
});

// add to this array, to add more cryptos to track

var arrCoinDb = [{"storageName": "bitcoin", "pushName": "bitcoin"},
                  {"storageName": "litecoin", "pushName": "litecoin"},
                  {"storageName": "ripple", "pushName": "ripple"},
                  {"storageName": "ethereum", "pushName": "ethereum"},
                  {"storageName": "cardano", "pushName": "cardano"},
                  {"storageName": "iota", "pushName": "iota"},
                  {"storageName": "tron", "pushName": "tron"},
                  {"storageName": "stellar", "pushName": "stellar"},
                  {"storageName": "bitcoincash", "pushName": "bitcoin-cash"},
                  {"storageName": "nem", "pushName": "nem"},
                  {"storageName": "dash", "pushName": "dash"},
                  {"storageName": "monero", "pushName": "monero"},
                  {"storageName": "neo", "pushName": "neo"},
                  {"storageName": "eos", "pushName": "eos"},
                  {"storageName": "bitcoingold", "pushName": "bitcoin-gold"},
                  {"storageName": "qtum", "pushName": "qtum"},
                  {"storageName": "raiblocks", "pushName": "raiblocks"},
                  {"storageName": "ethereumclassic", "pushName": "ethereum-classic"},
                  {"storageName": "icon", "pushName": "icon"},
                  {"storageName": "bitconnect", "pushName": "bitconnect"},
                  {"storageName": "lisk", "pushName": "lisk"},
                  {"storageName": "bitshares", "pushName": "bitshares"},
                  {"storageName": "status", "pushName": "status"},
                  {"storageName": "omisego", "pushName": "omisego"},
                  {"storageName": "verge", "pushName": "verge"},
                  {"storageName": "populous", "pushName": "populous"},
                  {"storageName": "ardor", "pushName": "ardor"},
                  {"storageName": "steem", "pushName": "steem"},
                  {"storageName": "zcash", "pushName": "zcash"},
                  {"storageName": "stratis", "pushName": "stratis"},
                  {"storageName": "tether", "pushName": "tether"},
                  {"storageName": "waves", "pushName": "waves"},
                  {"storageName": "hshare", "pushName": "hshare"},
                  {"storageName": "digibyte", "pushName": "digibyte"},
                  {"storageName": "bytecoin", "pushName": "bytecoin-bcn"},
                  {"storageName": "komodo", "pushName": "komodo"},
                  {"storageName": "siacoin", "pushName": "siacoin"},
                  {"storageName": "vechain", "pushName": "vechain"},
                  {"storageName": "binancecoin", "pushName": "binance-coin"},
                  {"storageName": "golem", "pushName": "golem-network-tokens"},
                  {"storageName": "augur", "pushName": "augur"},
                  {"storageName": "veritaseum", "pushName": "veritaseum"},
                  {"storageName": "ark", "pushName": "ark"},
                  {"storageName": "kucoinshares", "pushName": "kucoin-shares"},
                  {"storageName": "decred", "pushName": "decred"},
                  {"storageName": "basicattentiontoken", "pushName": "basic-attention-token"},
                  {"storageName": "nxt", "pushName": "nxt"},
                  {"storageName": "dragonchain", "pushName": "dragonchain"},
                  {"storageName": "salt", "pushName": "salt"},
                  {"storageName": "pivx", "pushName": "pivx"},
                  {"storageName": "powerledger", "pushName": "power-ledger"},
                  {"storageName": "factom", "pushName": "factom"},
                  {"storageName": "0x", "pushName": "0x"},
                  {"storageName": "aelf", "pushName": "aelf"},
                  {"storageName": "aeternity", "pushName": "aeternity"},
                  {"storageName": "aion", "pushName": "aion"},
                  {"storageName": "bancor", "pushName": "bancor"},
                  {"storageName": "bitcore", "pushName": "bitcore"},
                  {"storageName": "byteball", "pushName": "byteball"},
                  {"storageName": "bytom", "pushName": "bytom"},
                  {"storageName": "chainlink", "pushName": "chainlink"},
                  {"storageName": "cindicator", "pushName": "cindicator"},
                  {"storageName": "cryptonex", "pushName": "cryptonex"},
                  {"storageName": "dent", "pushName": "dent"},
                  {"storageName": "dentacoin", "pushName": "dentacoin"},
                  {"storageName": "digixdao", "pushName": "digixdao"},
                  {"storageName": "dogecoin", "pushName": "dogecoin"},
                  {"storageName": "electroneum", "pushName": "electroneum"},                  
                  {"storageName": "emercoin", "pushName": "emercoin"},
                  {"storageName": "enigma", "pushName": "enigma"},
                  {"storageName": "ethos", "pushName": "ethos"},
                  {"storageName": "experiencepoints", "pushName": "experience-points"},
                  {"storageName": "funfair", "pushName": "funfair"},
                  {"storageName": "gas", "pushName": "gas"},
                  {"storageName": "gnosis", "pushName": "gnosis-gno"},
                  {"storageName": "gxshares", "pushName": "gxshares"},
                  {"storageName": "kin", "pushName": "kin"},
                  {"storageName": "kybernetwork", "pushName": "kyber-network"},
                  {"storageName": "loopring", "pushName": "loopring"},
                  {"storageName": "maidsafecoin", "pushName": "maidsafecoin"},
                  {"storageName": "medibloc", "pushName": "medibloc"},
                  {"storageName": "monacoin", "pushName": "monacoin"},
                  {"storageName": "neblio", "pushName": "neblio"},
                  {"storageName": "nebulas", "pushName": "nebulas-token"},
                  {"storageName": "nexus", "pushName": "nexus"},
                  {"storageName": "qash", "pushName": "qash"},
                  {"storageName": "quantstamp", "pushName": "quantstamp"},
                  {"storageName": "rchain", "pushName": "rchain"},
                  {"storageName": "reddcoin", "pushName": "reddcoin"},
                  {"storageName": "requestnetwork", "pushName": "request-network"},
                  {"storageName": "sirinlabs", "pushName": "sirin-labs-token"},
                  {"storageName": "smartcash", "pushName": "smartcash"},
                  {"storageName": "substratum", "pushName": "substratum"},
                  {"storageName": "syscoin", "pushName": "syscoin"},
                  {"storageName": "tenx", "pushName": "tenx"},
                  {"storageName": "walton", "pushName": "walton"},
                  {"storageName": "wax", "pushName": "wax"},
                  {"storageName": "xpa", "pushName": "xpa"},
                  {"storageName": "zclassic", "pushName": "zclassic"},
                  {"storageName": "zcoin", "pushName": "zcoin"},
                  {"storageName": "paccoin", "pushName": "paccoin"},

                  {"storageName": "aragon", "pushName": "aragon"},
                  {"storageName": "blocknet", "pushName": "blocknet"},
                  {"storageName": "singularity", "pushName": "singularitynet"},
                  {"storageName": "particl", "pushName": "particl"}];

$(document).ready(function() { 

  chrome.storage.sync.get(null, function(data) {

    storageCache = data; // data from chrome storage

    // if crypto coin is selected, make sure we grab the api
    // selected coins get added into an array to use for api

    for (var n = 0; n < arrCoinDb.length; n++) {

      if (storageCache[arrCoinDb[n].storageName] == "on" ) {

        apiArray.push(arrCoinDb[n].pushName);

      }

    }


var done = apiArray.length; // number of json requests

$(apiArray).each(function() {

  var number = this;

  $.getJSON("https://api.coinmarketcap.com/v1/ticker/" + number + "/", function(data) {

   tableHTML = "";

   tableHTML += "<tr><td><img src=\"../images/logo/" + data[0].id + ".png\"></td>";
   tableHTML += "<td>" + data[0].symbol + "</td>";
   tableHTML += "<td>" + data[0].name +"</td>";

   var num = Number(data[0].price_usd);

   tableHTML += "<td align=\"right\">$" + num.toLocaleString(undefined, {minimumFractionDigits: 4, maximumFractionDigits: 4}) + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>";

   if (data[0].percent_change_24h > 0) {
    tableHTML += "<td><div style=\"color: green\"><img src=\"../images/uparrow.png\"> " + data[0].percent_change_24h + "%</td><tr>";

  } else {
    tableHTML += "<td><div style=\"color: red\"><img src=\"../images/downarrow.png\"> " + data[0].percent_change_24h + "%</td><tr>";

  }

  obData.push({ "name": data[0].name,
    "rank": data[0].rank,
    "price": data[0].price_usd,
    "change": data[0].percent_change_24h,
    "html": tableHTML});

  $("#cryptoTable").append(tableHTML);


  done -= 1;

  if(done == 0) {


    


    sortDisplay("rank");

  }


});
});

});

});


function sortDisplay(settings) {

  chrome.storage.sync.get(null, function(data) {

        storageCache = data; // data from chrome storage        

        // create a listing from for rank.

        var rankHTML = "";
        var sortedDisplay = [];

        for (var j = 0; j < obData.length; j++) {

          sortedDisplay.push(obData[j][settings]);

        }

        if (settings == "name") {

                   // check if we have it sorted yet or not
                   if (storageCache[settings] == "on" || storageCache[settings] == null) {


                    chrome.storage.sync.set({[settings]: "off"}, null);



                    sortedDisplay.sort();

                  } else if (storageCache[settings] == "off") {


                    chrome.storage.sync.set({[settings]: "on"}, null);

                    
                    sortedDisplay.sort();
                    sortedDisplay.reverse();

                  }

                } else {

         // check if we have it sorted yet or not
         if (storageCache[settings] == "on" || storageCache[settings] == null) {


          if (settings === "rank") {
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


        // create a string for html code to implement 
        for (var n = 0; n < sortedDisplay.length; n++) {

          for (var x = 0; x < obData.length; x++) {

            if (sortedDisplay[n] == obData[x][settings]) {

              rankHTML += obData[x].html;

            }
          }
        }

        chrome.storage.sync.set({"display": [settings]}, null);


        jQuery('#cryptoTable').html(''); // empty cryptoTable div

        $("#cryptoTable").append(rankHTML); // populate cryptoTable div

      });
}



// create event listeners on display settings
$("#rank").click(function(){sortDisplay("rank");});

$("#name").click(function(){sortDisplay("name");});

$("#price").click(function(){sortDisplay("price");});

$("#change").click(function(){sortDisplay("change");});


