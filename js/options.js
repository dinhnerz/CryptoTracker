// dinhnluong@gmail.com 01.03.2018


// clear storage for debugging only, activate by removing comments
// chrome.storage.sync.clear(); 

var storageCache = {}; //create a object to store chrome.storage


// storage.sync will sync if user is logged in onto another chrome browser it will load the sync information from the user
// will act as a storage.local if user is not synced

// Save it using the Chrome extension storage API.


// check chrome storage to see we have anything saved, if not then initalate default 5 coins

chrome.storage.sync.get("default", function(result) {

    if (result.default == null) { // confirmed default

        // set default 5 coins

        chrome.storage.sync.set({"bitcoin": "on"}, null);
        chrome.storage.sync.set({"litecoin": "on"}, null);
        chrome.storage.sync.set({"ethereum": "on"}, null);
        chrome.storage.sync.set({"ripple": "on"}, null);
        chrome.storage.sync.set({"bitcoincash": "on"}, null);
        chrome.storage.sync.set({"cardano": "off"}, null);
        chrome.storage.sync.set({"tron": "off"}, null);
        chrome.storage.sync.set({"iota": "off"}, null);
        chrome.storage.sync.set({"verge": "off"}, null);
        chrome.storage.sync.set({"stellar": "off"}, null);
        chrome.storage.sync.set({"nem": "off"}, null);
        chrome.storage.sync.set({"dash": "off"}, null);
        chrome.storage.sync.set({"monero": "off"}, null);
        chrome.storage.sync.set({"neo": "off"}, null);
        chrome.storage.sync.set({"eos": "off"}, null);
        chrome.storage.sync.set({"bitcoingold": "off"}, null);
        chrome.storage.sync.set({"qtum": "off"}, null);


        chrome.storage.sync.set({"default": "false"}, null);

        console.log("we are in default");

        checkFavorites();

    } else if (result.default == "false") {

        console.log("no default");

        checkFavorites();

    }

});



function checkFavorites() {

    chrome.storage.sync.get(null, function(data) {
        storageCache = data;
        console.log(storageCache);
        
        // if coins is on make sure the tab is a grey color

        if (storageCache.bitcoin == "on") {
            document.getElementById("bitcoin").style.background = "#D3D3D3";
        }
        if (storageCache.litecoin == "on") {
            document.getElementById("litecoin").style.background = "#D3D3D3";
        }
        if (storageCache.ripple == "on") {
            document.getElementById("ripple").style.background = "#D3D3D3";
        }
        if (storageCache.ethereum == "on") {
            document.getElementById("ethereum").style.background = "#D3D3D3";
        }
        if (storageCache.cardano == "on") {
            document.getElementById("cardano").style.background = "#D3D3D3";
        }
        if (storageCache.iota == "on") {
            document.getElementById("iota").style.background = "#D3D3D3";
        }
        if (storageCache.tron == "on") {
            document.getElementById("tron").style.background = "#D3D3D3";
        }
        if (storageCache.stellar == "on") {
            document.getElementById("stellar").style.background = "#D3D3D3";
        }
        if (storageCache.bitcoincash == "on") {
            document.getElementById("bitcoincash").style.background = "#D3D3D3";
        }
        if (storageCache.stellar == "on") {
            document.getElementById("stellar").style.background = "#D3D3D3";
        }
        if (storageCache.nem == "on") {
            document.getElementById("nem").style.background = "#D3D3D3";
        }
        if (storageCache.dash == "on") {
            document.getElementById("dash").style.background = "#D3D3D3";
        }
        if (storageCache.monero == "on") {
            document.getElementById("monero").style.background = "#D3D3D3";
        }
        if (storageCache.neo == "on") {
            document.getElementById("neo").style.background = "#D3D3D3";
        }
        if (storageCache.eos == "on") {
            document.getElementById("eos").style.background = "#D3D3D3";
        }
        if (storageCache.bitcoingold == "on") {
            document.getElementById("bitcoingold").style.background = "#D3D3D3";
        }
        if (storageCache.qtum == "on") {
            document.getElementById("qtum").style.background = "#D3D3D3";
        }

    });





}


$(".ethereum").click(function(){

    chrome.storage.sync.get("ethereum", function(result) {

        var data = result.ethereum;

        if (data == "off") {
           document.getElementById("ethereum").style.background = "#D3D3D3";
           chrome.storage.sync.set({"ethereum": "on"}, null);

       } else if (data == "on") {
           document.getElementById("ethereum").style.background = "";
           chrome.storage.sync.set({"ethereum": "off"}, null);
       }

   });

});


$(".tron").click(function(){

    chrome.storage.sync.get("tron", function(result) {

        var data = result.tron;

        if (data == "off") {
           document.getElementById("tron").style.background = "#D3D3D3";
           chrome.storage.sync.set({"tron": "on"}, null);

       } else if (data == "on") {
           document.getElementById("tron").style.background = "";
           chrome.storage.sync.set({"tron": "off"}, null);
       }

   });

});


$(".litecoin").click(function(){

    chrome.storage.sync.get("litecoin", function(result) {

        var data = result.litecoin;

        if (data == "off") {
           document.getElementById("litecoin").style.background = "#D3D3D3";
           chrome.storage.sync.set({"litecoin": "on"}, null);

       } else if (data == "on") {
           document.getElementById("litecoin").style.background = "";
           chrome.storage.sync.set({"litecoin": "off"}, null);
       }

   });
});


$(".bitcoin").click(function(){

    chrome.storage.sync.get("bitcoin", function(result) {

        var data = result.bitcoin;

        if (data == "off") {
           document.getElementById("bitcoin").style.background = "#D3D3D3";
           chrome.storage.sync.set({"bitcoin": "on"}, null);

       } else if (data == "on") {
           document.getElementById("bitcoin").style.background = "";
           chrome.storage.sync.set({"bitcoin": "off"}, null);
       }

   });

});

$(".bitcoincash").click(function(){

    chrome.storage.sync.get("bitcoincash", function(result) {

        var data = result.bitcoincash;

        if (data == "off") {
           document.getElementById("bitcoincash").style.background = "#D3D3D3";
           chrome.storage.sync.set({"bitcoincash": "on"}, null);

       } else if (data == "on") {
           document.getElementById("bitcoincash").style.background = "";
           chrome.storage.sync.set({"bitcoincash": "off"}, null);
       }

   });
});

$(".cardano").click(function(){

    chrome.storage.sync.get("cardano", function(result) {

        var data = result.cardano;

        if (data == "off") {
           document.getElementById("cardano").style.background = "#D3D3D3";
           chrome.storage.sync.set({"cardano": "on"}, null);

       } else if (data == "on") {
           document.getElementById("cardano").style.background = "";
           chrome.storage.sync.set({"cardano": "off"}, null);
       }

   });
});

$(".iota").click(function(){

    chrome.storage.sync.get("iota", function(result) {

        var data = result.iota;

        if (data == "off") {
           document.getElementById("iota").style.background = "#D3D3D3";
           chrome.storage.sync.set({"iota": "on"}, null);

       } else if (data == "on") {
           document.getElementById("iota").style.background = "";
           chrome.storage.sync.set({"iota": "off"}, null);
       }

   });
});

$(".ripple").click(function(){
    chrome.storage.sync.get("ripple", function(result) {

        var data = result.ripple;

        if (data == "off") {
           document.getElementById("ripple").style.background = "#D3D3D3";
           chrome.storage.sync.set({"ripple": "on"}, null);

       } else if (data == "on") {
           document.getElementById("ripple").style.background = "";
           chrome.storage.sync.set({"ripple": "off"}, null);
       }

   });
});

$(".stellar").click(function(){
    chrome.storage.sync.get("stellar", function(result) {

        var data = result.stellar;

        if (data == "off") {
           document.getElementById("stellar").style.background = "#D3D3D3";
           chrome.storage.sync.set({"stellar": "on"}, null);

       } else if (data == "on") {
           document.getElementById("stellar").style.background = "";
           chrome.storage.sync.set({"stellar": "off"}, null);
       }

   });
});

$(".nem").click(function(){
    chrome.storage.sync.get("nem", function(result) {

        var data = result.nem;

        if (data == "off") {
           document.getElementById("nem").style.background = "#D3D3D3";
           chrome.storage.sync.set({"nem": "on"}, null);

       } else if (data == "on") {
           document.getElementById("nem").style.background = "";
           chrome.storage.sync.set({"nem": "off"}, null);
       }

   });
});

$(".dash").click(function(){
    chrome.storage.sync.get("dash", function(result) {

        var data = result.dash;

        if (data == "off") {
           document.getElementById("dash").style.background = "#D3D3D3";
           chrome.storage.sync.set({"dash": "on"}, null);

       } else if (data == "on") {
           document.getElementById("dash").style.background = "";
           chrome.storage.sync.set({"dash": "off"}, null);
       }

   });
});

$(".monero").click(function(){
    chrome.storage.sync.get("monero", function(result) {

        var data = result.monero;

        if (data == "off") {
           document.getElementById("monero").style.background = "#D3D3D3";
           chrome.storage.sync.set({"monero": "on"}, null);

       } else if (data == "on") {
           document.getElementById("monero").style.background = "";
           chrome.storage.sync.set({"monero": "off"}, null);
       }

   });
});

$(".neo").click(function(){
    chrome.storage.sync.get("neo", function(result) {

        var data = result.neo;

        if (data == "off") {
           document.getElementById("neo").style.background = "#D3D3D3";
           chrome.storage.sync.set({"neo": "on"}, null);

       } else if (data == "on") {
           document.getElementById("neo").style.background = "";
           chrome.storage.sync.set({"neo": "off"}, null);
       }

   });
});

$(".eos").click(function(){
    chrome.storage.sync.get("eos", function(result) {

        var data = result.eos;

        if (data == "off") {
           document.getElementById("eos").style.background = "#D3D3D3";
           chrome.storage.sync.set({"eos": "on"}, null);

       } else if (data == "on") {
           document.getElementById("eos").style.background = "";
           chrome.storage.sync.set({"eos": "off"}, null);
       }

   });
});

$(".bitcoingold").click(function(){
    chrome.storage.sync.get("bitcoingold", function(result) {

        var data = result.bitcoingold;

        if (data == "off") {
           document.getElementById("bitcoingold").style.background = "#D3D3D3";
           chrome.storage.sync.set({"bitcoingold": "on"}, null);

       } else if (data == "on") {
           document.getElementById("bitcoingold").style.background = "";
           chrome.storage.sync.set({"bitcoingold": "off"}, null);
       }

   });
});

$(".qtum").click(function(){
    chrome.storage.sync.get("qtum", function(result) {

        var data = result.qtum;

        if (data == "off") {
           document.getElementById("qtum").style.background = "#D3D3D3";
           chrome.storage.sync.set({"qtum": "on"}, null);

       } else if (data == "on") {
           document.getElementById("qtum").style.background = "";
           chrome.storage.sync.set({"qtum": "off"}, null);
       }

   });
});