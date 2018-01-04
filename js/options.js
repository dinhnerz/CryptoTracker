// dinhnluong@gmail.com 01.04.2018


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
        chrome.storage.sync.set({"ethereumclassic": "off"}, null);
        chrome.storage.sync.set({"raiblocks": "off"}, null);
        chrome.storage.sync.set({"icon": "off"}, null);
        chrome.storage.sync.set({"bitconnect": "off"}, null);
        chrome.storage.sync.set({"lisk": "off"}, null);
        chrome.storage.sync.set({"bitshares": "off"}, null);
        chrome.storage.sync.set({"status": "off"}, null);
        chrome.storage.sync.set({"omisego": "off"}, null);
        chrome.storage.sync.set({"verge": "off"}, null);
        chrome.storage.sync.set({"populous": "off"}, null);
        chrome.storage.sync.set({"ardor": "off"}, null);
        chrome.storage.sync.set({"steem": "off"}, null);
        chrome.storage.sync.set({"zcash": "off"}, null);
        chrome.storage.sync.set({"stratis": "off"}, null);
        chrome.storage.sync.set({"tether": "off"}, null);
        chrome.storage.sync.set({"waves": "off"}, null);
        chrome.storage.sync.set({"bytecoin": "off"}, null);
        chrome.storage.sync.set({"hshare": "off"}, null);
        chrome.storage.sync.set({"komodo": "off"}, null);
        chrome.storage.sync.set({"siacoin": "off"}, null);
        chrome.storage.sync.set({"vechain": "off"}, null);
        chrome.storage.sync.set({"binancecoin": "off"}, null);
        chrome.storage.sync.set({"golem": "off"}, null);
        chrome.storage.sync.set({"augur": "off"}, null);
        chrome.storage.sync.set({"digibyte": "off"}, null);
        chrome.storage.sync.set({"veritaseum": "off"}, null);
        chrome.storage.sync.set({"ark": "off"}, null);
        chrome.storage.sync.set({"kucoinshares": "off"}, null);
        chrome.storage.sync.set({"decred": "off"}, null);
        chrome.storage.sync.set({"basicattentiontoken": "off"}, null);
        chrome.storage.sync.set({"nxt": "off"}, null);
        chrome.storage.sync.set({"dragonchain": "off"}, null);
        chrome.storage.sync.set({"salt": "off"}, null);
        chrome.storage.sync.set({"pivx": "off"}, null);
        chrome.storage.sync.set({"powerledger": "off"}, null);
        chrome.storage.sync.set({"factom": "off"}, null);

        chrome.storage.sync.set({"default": "false"}, null);

        checkFavorites();

    } else if (result.default == "false") {

        checkFavorites();

    }

});



function checkFavorites() {

    chrome.storage.sync.get(null, function(data) {
        storageCache = data;

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
        if (storageCache.raiblocks == "on") {
            document.getElementById("raiblocks").style.background = "#D3D3D3";
        }
        if (storageCache.ethereumclassic == "on") {
            document.getElementById("ethereumclassic").style.background = "#D3D3D3";
        }
        if (storageCache.icon == "on") {
            document.getElementById("icon").style.background = "#D3D3D3";
        }
        if (storageCache.bitconnect == "on") {
            document.getElementById("bitconnect").style.background = "#D3D3D3";
        }
        if (storageCache.lisk == "on") {
            document.getElementById("lisk").style.background = "#D3D3D3";
        }
        if (storageCache.bitshares == "on") {
            document.getElementById("bitshares").style.background = "#D3D3D3";
        }
        if (storageCache.status == "on") {
            document.getElementById("status").style.background = "#D3D3D3";
        }
        if (storageCache.omisego == "on") {
            document.getElementById("omisego").style.background = "#D3D3D3";
        }
        if (storageCache.verge == "on") {
            document.getElementById("verge").style.background = "#D3D3D3";
        }
        if (storageCache.populous == "on") {
            document.getElementById("populous").style.background = "#D3D3D3";
        }
        if (storageCache.ardor == "on") {
            document.getElementById("ardor").style.background = "#D3D3D3";
        }
        if (storageCache.steem == "on") {
            document.getElementById("steem").style.background = "#D3D3D3";
        }
        if (storageCache.ardor == "on") {
            document.getElementById("ardor").style.background = "#D3D3D3";
        }
        if (storageCache.zcash == "on") {
            document.getElementById("zcash").style.background = "#D3D3D3";
        }
        if (storageCache.stratis == "on") {
            document.getElementById("stratis").style.background = "#D3D3D3";
        }
        if (storageCache.tether == "on") {
            document.getElementById("tether").style.background = "#D3D3D3";
        }
        if (storageCache.waves == "on") {
            document.getElementById("waves").style.background = "#D3D3D3";
        }
        if (storageCache.hshare == "on") {
            document.getElementById("hshare").style.background = "#D3D3D3";
        }
        if (storageCache.digibyte == "on") {
            document.getElementById("digibyte").style.background = "#D3D3D3";
        }
        if (storageCache.bytecoin == "on") {
            document.getElementById("bytecoin").style.background = "#D3D3D3";
        }
        if (storageCache.qtum == "on") {
            document.getElementById("qtum").style.background = "#D3D3D3";
        }
        if (storageCache.komodo == "on") {
            document.getElementById("komodo").style.background = "#D3D3D3";
        }
        if (storageCache.siacoin == "on") {
            document.getElementById("siacoin").style.background = "#D3D3D3";
        }
        if (storageCache.vechain == "on") {
            document.getElementById("vechain").style.background = "#D3D3D3";
        }
        if (storageCache.binancecoin == "on") {
            document.getElementById("binancecoin").style.background = "#D3D3D3";
        }
        if (storageCache.golem == "on") {
            document.getElementById("golem").style.background = "#D3D3D3";
        }
        if (storageCache.augur == "on") {
            document.getElementById("augur").style.background = "#D3D3D3";
        }
        if (storageCache.veritaseum == "on") {
            document.getElementById("veritaseum").style.background = "#D3D3D3";
        }
        if (storageCache.ark == "on") {
            document.getElementById("ark").style.background = "#D3D3D3";
        }
        if (storageCache.kucoinshares == "on") {
            document.getElementById("kucoinshares").style.background = "#D3D3D3";
        }
        if (storageCache.decred == "on") {
            document.getElementById("decred").style.background = "#D3D3D3";
        }
        if (storageCache.basicattentiontoken == "on") {
            document.getElementById("basicattentiontoken").style.background = "#D3D3D3";
        }
        if (storageCache.nxt == "on") {
            document.getElementById("nxt").style.background = "#D3D3D3";
        }
        if (storageCache.dragonchain == "on") {
            document.getElementById("dragonchain").style.background = "#D3D3D3";
        }
        if (storageCache.salt == "on") {
            document.getElementById("salt").style.background = "#D3D3D3";
        }
        if (storageCache.pivx == "on") {
            document.getElementById("pivx").style.background = "#D3D3D3";
        }
        if (storageCache.powerledger == "on") {
            document.getElementById("powerledger").style.background = "#D3D3D3";
        }
        if (storageCache.factom == "on") {
            document.getElementById("factom").style.background = "#D3D3D3";
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

$(".ethereumclassic").click(function(){
    chrome.storage.sync.get("ethereumclassic", function(result) {

        var data = result.ethereumclassic;

        if (data == "off") {
           document.getElementById("ethereumclassic").style.background = "#D3D3D3";
           chrome.storage.sync.set({"ethereumclassic": "on"}, null);

       } else if (data == "on") {
           document.getElementById("ethereumclassic").style.background = "";
           chrome.storage.sync.set({"ethereumclassic": "off"}, null);
       }

   });
});

$(".raiblocks").click(function(){
    chrome.storage.sync.get("raiblocks", function(result) {

        var data = result.raiblocks;

        if (data == "off") {
           document.getElementById("raiblocks").style.background = "#D3D3D3";
           chrome.storage.sync.set({"raiblocks": "on"}, null);

       } else if (data == "on") {
           document.getElementById("raiblocks").style.background = "";
           chrome.storage.sync.set({"raiblocks": "off"}, null);
       }

   });
});

$(".icon").click(function(){
    chrome.storage.sync.get("icon", function(result) {

        var data = result.icon;

        if (data == "off") {
           document.getElementById("icon").style.background = "#D3D3D3";
           chrome.storage.sync.set({"icon": "on"}, null);

       } else if (data == "on") {
           document.getElementById("icon").style.background = "";
           chrome.storage.sync.set({"icon": "off"}, null);
       }

   });
});

$(".bitconnect").click(function(){
    chrome.storage.sync.get("bitconnect", function(result) {

        var data = result.bitconnect;

        if (data == "off") {
           document.getElementById("bitconnect").style.background = "#D3D3D3";
           chrome.storage.sync.set({"bitconnect": "on"}, null);

       } else if (data == "on") {
           document.getElementById("bitconnect").style.background = "";
           chrome.storage.sync.set({"bitconnect": "off"}, null);
       }

   });
});

$(".lisk").click(function(){
    chrome.storage.sync.get("lisk", function(result) {

        var data = result.lisk;

        if (data == "off") {
           document.getElementById("lisk").style.background = "#D3D3D3";
           chrome.storage.sync.set({"lisk": "on"}, null);

       } else if (data == "on") {
           document.getElementById("lisk").style.background = "";
           chrome.storage.sync.set({"lisk": "off"}, null);
       }

   });
});

$(".bitshares").click(function(){
    chrome.storage.sync.get("bitshares", function(result) {

        var data = result.bitshares;

        if (data == "off") {
           document.getElementById("bitshares").style.background = "#D3D3D3";
           chrome.storage.sync.set({"bitshares": "on"}, null);

       } else if (data == "on") {
           document.getElementById("bitshares").style.background = "";
           chrome.storage.sync.set({"bitshares": "off"}, null);
       }

   });
});

$(".status").click(function(){
    chrome.storage.sync.get("status", function(result) {

        var data = result.status;

        if (data == "off") {
           document.getElementById("status").style.background = "#D3D3D3";
           chrome.storage.sync.set({"status": "on"}, null);

       } else if (data == "on") {
           document.getElementById("status").style.background = "";
           chrome.storage.sync.set({"status": "off"}, null);
       }

   });
});

$(".omisego").click(function(){
    chrome.storage.sync.get("omisego", function(result) {

        var data = result.omisego;

        if (data == "off") {
           document.getElementById("omisego").style.background = "#D3D3D3";
           chrome.storage.sync.set({"omisego": "on"}, null);

       } else if (data == "on") {
           document.getElementById("omisego").style.background = "";
           chrome.storage.sync.set({"omisego": "off"}, null);
       }

   });
});

$(".verge").click(function(){
    chrome.storage.sync.get("verge", function(result) {

        var data = result.verge;

        if (data == "off") {
           document.getElementById("verge").style.background = "#D3D3D3";
           chrome.storage.sync.set({"verge": "on"}, null);

       } else if (data == "on") {
           document.getElementById("verge").style.background = "";
           chrome.storage.sync.set({"verge": "off"}, null);
       }

   });
});

$(".populous").click(function(){
    chrome.storage.sync.get("populous", function(result) {

        var data = result.populous;

        if (data == "off") {
           document.getElementById("populous").style.background = "#D3D3D3";
           chrome.storage.sync.set({"populous": "on"}, null);

       } else if (data == "on") {
           document.getElementById("populous").style.background = "";
           chrome.storage.sync.set({"populous": "off"}, null);
       }

   });
});

$(".ardor").click(function(){
    chrome.storage.sync.get("ardor", function(result) {

        var data = result.ardor;

        if (data == "off") {
           document.getElementById("ardor").style.background = "#D3D3D3";
           chrome.storage.sync.set({"ardor": "on"}, null);

       } else if (data == "on") {
           document.getElementById("ardor").style.background = "";
           chrome.storage.sync.set({"ardor": "off"}, null);
       }

   });
});

$(".steem").click(function(){
    chrome.storage.sync.get("steem", function(result) {

        var data = result.steem;

        if (data == "off") {
           document.getElementById("steem").style.background = "#D3D3D3";
           chrome.storage.sync.set({"steem": "on"}, null);

       } else if (data == "on") {
           document.getElementById("steem").style.background = "";
           chrome.storage.sync.set({"steem": "off"}, null);
       }

   });
});

$(".zcash").click(function(){
    chrome.storage.sync.get("zcash", function(result) {

        var data = result.zcash;

        if (data == "off") {
           document.getElementById("zcash").style.background = "#D3D3D3";
           chrome.storage.sync.set({"zcash": "on"}, null);

       } else if (data == "on") {
           document.getElementById("zcash").style.background = "";
           chrome.storage.sync.set({"zcash": "off"}, null);
       }

   });
});

$(".stratis").click(function(){
    chrome.storage.sync.get("stratis", function(result) {

        var data = result.stratis;

        if (data == "off") {
           document.getElementById("stratis").style.background = "#D3D3D3";
           chrome.storage.sync.set({"stratis": "on"}, null);

       } else if (data == "on") {
           document.getElementById("stratis").style.background = "";
           chrome.storage.sync.set({"stratis": "off"}, null);
       }

   });
});

$(".tether").click(function(){
    chrome.storage.sync.get("tether", function(result) {

        var data = result.tether;

        if (data == "off") {
           document.getElementById("tether").style.background = "#D3D3D3";
           chrome.storage.sync.set({"tether": "on"}, null);

       } else if (data == "on") {
           document.getElementById("tether").style.background = "";
           chrome.storage.sync.set({"tether": "off"}, null);
       }

   });
});

$(".waves").click(function(){
    chrome.storage.sync.get("waves", function(result) {

        var data = result.waves;

        if (data == "off") {
           document.getElementById("waves").style.background = "#D3D3D3";
           chrome.storage.sync.set({"waves": "on"}, null);

       } else if (data == "on") {
           document.getElementById("waves").style.background = "";
           chrome.storage.sync.set({"waves": "off"}, null);
       }

   });
});

$(".bytecoin").click(function(){
    chrome.storage.sync.get("bytecoin", function(result) {

        var data = result.bytecoin;

        if (data == "off") {
           document.getElementById("bytecoin").style.background = "#D3D3D3";
           chrome.storage.sync.set({"bytecoin": "on"}, null);

       } else if (data == "on") {
           document.getElementById("bytecoin").style.background = "";
           chrome.storage.sync.set({"bytecoin": "off"}, null);
       }

   });
});

$(".hshare").click(function(){
    chrome.storage.sync.get("hshare", function(result) {

        var data = result.hshare;

        if (data == "off") {
           document.getElementById("hshare").style.background = "#D3D3D3";
           chrome.storage.sync.set({"hshare": "on"}, null);

       } else if (data == "on") {
           document.getElementById("hshare").style.background = "";
           chrome.storage.sync.set({"hshare": "off"}, null);
       }

   });
});

$(".komodo").click(function(){
    chrome.storage.sync.get("komodo", function(result) {

        var data = result.komodo;

        if (data == "off") {
           document.getElementById("komodo").style.background = "#D3D3D3";
           chrome.storage.sync.set({"komodo": "on"}, null);

       } else if (data == "on") {
           document.getElementById("komodo").style.background = "";
           chrome.storage.sync.set({"komodo": "off"}, null);
       }

   });
});

$(".siacoin").click(function(){
    chrome.storage.sync.get("siacoin", function(result) {

        var data = result.siacoin;

        if (data == "off") {
           document.getElementById("siacoin").style.background = "#D3D3D3";
           chrome.storage.sync.set({"siacoin": "on"}, null);

       } else if (data == "on") {
           document.getElementById("siacoin").style.background = "";
           chrome.storage.sync.set({"siacoin": "off"}, null);
       }

   });
});

$(".vechain").click(function(){
    chrome.storage.sync.get("vechain", function(result) {

        var data = result.vechain;

        if (data == "off") {
           document.getElementById("vechain").style.background = "#D3D3D3";
           chrome.storage.sync.set({"vechain": "on"}, null);

       } else if (data == "on") {
           document.getElementById("vechain").style.background = "";
           chrome.storage.sync.set({"vechain": "off"}, null);
       }

   });
});

$(".binancecoin").click(function(){
    chrome.storage.sync.get("binancecoin", function(result) {

        var data = result.binancecoin;

        if (data == "off") {
           document.getElementById("binancecoin").style.background = "#D3D3D3";
           chrome.storage.sync.set({"binancecoin": "on"}, null);

       } else if (data == "on") {
           document.getElementById("binancecoin").style.background = "";
           chrome.storage.sync.set({"binancecoin": "off"}, null);
       }

   });
});

$(".golem").click(function(){
    chrome.storage.sync.get("golem", function(result) {

        var data = result.golem;

        if (data == "off") {
           document.getElementById("golem").style.background = "#D3D3D3";
           chrome.storage.sync.set({"golem": "on"}, null);

       } else if (data == "on") {
           document.getElementById("golem").style.background = "";
           chrome.storage.sync.set({"golem": "off"}, null);
       }

   });
});

$(".augur").click(function(){
    chrome.storage.sync.get("augur", function(result) {

        var data = result.augur;

        if (data == "off") {
           document.getElementById("augur").style.background = "#D3D3D3";
           chrome.storage.sync.set({"augur": "on"}, null);

       } else if (data == "on") {
           document.getElementById("augur").style.background = "";
           chrome.storage.sync.set({"augur": "off"}, null);
       }

   });
});

$(".digibyte").click(function(){
    chrome.storage.sync.get("digibyte", function(result) {

        var data = result.digibyte;

        if (data == "off") {
           document.getElementById("digibyte").style.background = "#D3D3D3";
           chrome.storage.sync.set({"digibyte": "on"}, null);

       } else if (data == "on") {
           document.getElementById("digibyte").style.background = "";
           chrome.storage.sync.set({"digibyte": "off"}, null);
       }

   });
});

$(".veritaseum").click(function(){
    chrome.storage.sync.get("veritaseum", function(result) {

        var data = result.veritaseum;

        if (data == "off") {
           document.getElementById("veritaseum").style.background = "#D3D3D3";
           chrome.storage.sync.set({"veritaseum": "on"}, null);

       } else if (data == "on") {
           document.getElementById("veritaseum").style.background = "";
           chrome.storage.sync.set({"veritaseum": "off"}, null);
       }

   });
});

$(".ark").click(function(){
    chrome.storage.sync.get("ark", function(result) {

        var data = result.ark;

        if (data == "off") {
           document.getElementById("ark").style.background = "#D3D3D3";
           chrome.storage.sync.set({"ark": "on"}, null);

       } else if (data == "on") {
           document.getElementById("ark").style.background = "";
           chrome.storage.sync.set({"ark": "off"}, null);
       }

   });
});

$(".kucoinshares").click(function(){
    chrome.storage.sync.get("kucoinshares", function(result) {

        var data = result.kucoinshares;

        if (data == "off") {
           document.getElementById("kucoinshares").style.background = "#D3D3D3";
           chrome.storage.sync.set({"kucoinshares": "on"}, null);

       } else if (data == "on") {
           document.getElementById("kucoinshares").style.background = "";
           chrome.storage.sync.set({"kucoinshares": "off"}, null);
       }

   });
});

$(".decred").click(function(){
    chrome.storage.sync.get("decred", function(result) {

        var data = result.decred;

        if (data == "off") {
           document.getElementById("decred").style.background = "#D3D3D3";
           chrome.storage.sync.set({"decred": "on"}, null);

       } else if (data == "on") {
           document.getElementById("decred").style.background = "";
           chrome.storage.sync.set({"decred": "off"}, null);
       }

   });
});

$(".basicattentiontoken").click(function(){
    chrome.storage.sync.get("basicattentiontoken", function(result) {

        var data = result.basicattentiontoken;

        if (data == "off") {
           document.getElementById("basicattentiontoken").style.background = "#D3D3D3";
           chrome.storage.sync.set({"basicattentiontoken": "on"}, null);

       } else if (data == "on") {
           document.getElementById("basicattentiontoken").style.background = "";
           chrome.storage.sync.set({"basicattentiontoken": "off"}, null);
       }

   });
});

$(".nxt").click(function(){
    chrome.storage.sync.get("nxt", function(result) {

        var data = result.nxt;

        if (data == "off") {
           document.getElementById("nxt").style.background = "#D3D3D3";
           chrome.storage.sync.set({"nxt": "on"}, null);

       } else if (data == "on") {
           document.getElementById("nxt").style.background = "";
           chrome.storage.sync.set({"nxt": "off"}, null);
       }

   });
});

$(".dragonchain").click(function(){
    chrome.storage.sync.get("dragonchain", function(result) {

        var data = result.dragonchain;

        if (data == "off") {
           document.getElementById("dragonchain").style.background = "#D3D3D3";
           chrome.storage.sync.set({"dragonchain": "on"}, null);

       } else if (data == "on") {
           document.getElementById("dragonchain").style.background = "";
           chrome.storage.sync.set({"dragonchain": "off"}, null);
       }

   });
});

$(".salt").click(function(){
    chrome.storage.sync.get("salt", function(result) {

        var data = result.salt;

        if (data == "off") {
           document.getElementById("salt").style.background = "#D3D3D3";
           chrome.storage.sync.set({"salt": "on"}, null);

       } else if (data == "on") {
           document.getElementById("salt").style.background = "";
           chrome.storage.sync.set({"salt": "off"}, null);
       }

   });
});

$(".pivx").click(function(){
    chrome.storage.sync.get("pivx", function(result) {

        var data = result.pivx;

        if (data == "off") {
           document.getElementById("pivx").style.background = "#D3D3D3";
           chrome.storage.sync.set({"pivx": "on"}, null);

       } else if (data == "on") {
           document.getElementById("pivx").style.background = "";
           chrome.storage.sync.set({"pivx": "off"}, null);
       }

   });
});

$(".powerledger").click(function(){
    chrome.storage.sync.get("powerledger", function(result) {

        var data = result.powerledger;

        if (data == "off") {
           document.getElementById("powerledger").style.background = "#D3D3D3";
           chrome.storage.sync.set({"powerledger": "on"}, null);

       } else if (data == "on") {
           document.getElementById("powerledger").style.background = "";
           chrome.storage.sync.set({"powerledger": "off"}, null);
       }

   });
});

$(".factom").click(function(){
    chrome.storage.sync.get("factom", function(result) {

        var data = result.factom;

        if (data == "off") {
           document.getElementById("factom").style.background = "#D3D3D3";
           chrome.storage.sync.set({"factom": "on"}, null);

       } else if (data == "on") {
           document.getElementById("factom").style.background = "";
           chrome.storage.sync.set({"factom": "off"}, null);
       }

   });
});
