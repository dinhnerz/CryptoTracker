// dinhnluong@gmail.com 02.27.2018


var storageCache = {}; //create a object to store chrome.storage data

// storage.sync will sync if user is logged in onto another chrome browser it will load the sync information from the user account db
// will act as a storage.local if user is not synced

// Save it using the Chrome extension storage API.

// array of crypto names -- add to this list to add more crypto coins to track

var arrCryptoNames = ["bitcoin", "litecoin", "ripple", "ethereum", "cardano", "iota", "tron",
                      "stellar", "bitcoincash", "nem", "dash", "monero", "neo", "eos", "bitcoingold", "qtum",
                      "raiblocks", "ethereumclassic", "icon", "bitconnect", "lisk", "bitshares", "status",
                      "omisego", "verge", "populous", "ardor", "steem", "zcash", "stratis", "tether",
                      "waves", "hshare", "digibyte", "bytecoin", "komodo", "siacoin", "vechain",
                      "binancecoin", "golem", "augur", "veritaseum", "ark", "kucoinshares", "decred",
                      "basicattentiontoken", "nxt", "dragonchain", "salt", "pivx", "powerledger",
                      "factom", "0x", "aelf", "aeternity", "aion", "bancor", "bitcore", "byteball",
                      "bytom", "chainlink", "cindicator", "cryptonex", "dent", "dentacoin", 
                      "digixdao", "dogecoin", "electroneum", "emercoin", "enigma", "ethos", 
                      "experiencepoints", "funfair", "gas", "gnosis", "gxshares", "kin", "kybernetwork",
                      "loopring", "maidsafecoin", "medibloc", "monacoin", "neblio", "nebulas", 
                      "nexus", "qash", "quantstamp", "rchain", "reddcoin", "requestnetwork", 
                      "sirinlabs", "smartcash", "substratum", "syscoin", "tenx", "walton", "wax",
                      "xpa", "zclassic", "zcoin", "paccoin", "aragon", "singularity", "particl", "blocknet"];



$(document).ready(function() { 

// check chrome storage to see we have anything saved, if not then initalate default 5 coins

  chrome.storage.sync.get("default", function(result) {


    if (result.default == null) {

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

      checkFavorites();

    });



  function checkFavorites() {

    chrome.storage.sync.get(null, function(data) {

      storageCache = data; 

      for (var i = 0; i < arrCryptoNames.length; i++) {
        if (storageCache[arrCryptoNames[i]] == "on") {
          document.getElementById(arrCryptoNames[i]).style.background = "#D3D3D3";
        }
      }      
    });
  }


  // create event listeners on all crypto

  arrCryptoNames.forEach(function(element) {

    $("."+element).click(function() {

      chrome.storage.sync.get([element], function(result) {

        var data = result[element];

        if (data == "off" || data == null) {
         document.getElementById(element).style.background = "#D3D3D3";
         chrome.storage.sync.set({[element]: "on"}, null);

       } else if (data == "on") {
         document.getElementById(element).style.background = "";
         chrome.storage.sync.set({[element]: "off"}, null);
       }

     });

    });

  });

});



$("#resetFavorites").click(function(){

  chrome.storage.sync.clear(); 
  window.location.reload();

});
