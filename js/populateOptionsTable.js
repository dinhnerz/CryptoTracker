// dinhnluong@gmail.com 02.27.2018


// name: Displayed name of crypto coin, code would be used for html, png is file name for image source
               
// add to this list to add more cryptos to track

var arrCrypto = [{"name": "Bitcoin", "code": "bitcoin", "png": "bitcoin"},
                {"name": "Ripple", "code": "ripple", "png": "ripple"},
                {"name": "Ethereum", "code": "ethereum", "png": "ethereum"},
                {"name": "Litecoin", "code": "litecoin", "png": "litecoin"},
                {"name": "Bitcoin Cash", "code": "bitcoincash", "png": "bitcoin-cash"},
                {"name": "Cardano", "code": "cardano", "png": "cardano"},
                {"name": "Stellar", "code": "stellar", "png": "stellar"},
                {"name": "NEM", "code": "nem", "png": "nem"},
                {"name": "IOTA", "code": "iota", "png": "iota"},
                {"name": "Dash", "code": "dash", "png": "dash"},
                {"name": "Monero", "code": "monero", "png": "monero"},
                {"name": "NEO", "code": "neo", "png": "neo"},
                {"name": "TRON", "code": "tron", "png": "tron"},
                {"name": "EOS", "code": "eos", "png": "eos"},
                {"name": "Bitcoin Gold", "code": "bitcoingold", "png": "bitcoin-gold"},
                {"name": "Qtum", "code": "qtum", "png": "qtum"},
                {"name": "E Classic", "code": "ethereumclassic", "png": "ethereum-classic"},
                {"name": "RaiBlocks", "code": "raiblocks", "png": "raiblocks"},
                {"name": "ICON", "code": "icon", "png": "icon"},
                {"name": "BitConnect", "code": "bitconnect", "png": "bitconnect"},
                {"name": "Lisk", "code": "lisk", "png": "lisk"},
                {"name": "BitShares", "code": "bitshares", "png": "bitshares"},
                {"name": "Status", "code": "status", "png": "status"},
                {"name": "OmiseGO", "code": "omisego", "png": "omisego"},
                {"name": "Verge", "code": "verge", "png": "verge"},
                {"name": "Populous", "code": "populous", "png": "populous"},
                {"name": "Ardor", "code": "ardor", "png": "ardor"},
                {"name": "Steem", "code": "steem", "png": "steem"},
                {"name": "Zcash", "code": "zcash", "png": "zcash"},
                {"name": "Stratis", "code": "stratis", "png": "stratis"},
                {"name": "Tether", "code": "tether", "png": "tether"},
                {"name": "Waves", "code": "waves", "png": "waves"},
                {"name": "Bytecoin", "code": "bytecoin", "png": "bytecoin-bcn"},
                {"name": "Hshare", "code": "hshare", "png": "hshare"},
                {"name": "Komodo", "code": "komodo", "png": "komodo"},
                {"name": "Siacoin", "code": "siacoin", "png": "siacoin"},
                {"name": "VeChain", "code": "vechain", "png": "vechain"},
                {"name": "Binance", "code": "binancecoin", "png": "binance-coin"},
                {"name": "Golem", "code": "golem", "png": "golem-network-tokens"},
                {"name": "Augur", "code": "augur", "png": "augur"},
                {"name": "DigiByte", "code": "digibyte", "png": "digibyte"},
                {"name": "Veritaseum", "code": "veritaseum", "png": "veritaseum"},
                {"name": "Ark", "code": "ark", "png": "ark"},
                {"name": "KuCoin", "code": "kucoinshares", "png": "kucoin-shares"},
                {"name": "Decred", "code": "decred", "png": "decred"},
                {"name": "B A T", "code": "basicattentiontoken", "png": "basic-attention-token"},
                {"name": "Nxt", "code": "nxt", "png": "nxt"},
                {"name": "Dragonchain", "code": "dragonchain", "png": "dragonchain"},
                {"name": "SALT", "code": "salt", "png": "salt"},
                {"name": "PIVX", "code": "pivx", "png": "pivx"},
                {"name": "P. Ledger", "code": "powerledger", "png": "power-ledger"},
                {"name": "Factom", "code": "factom", "png": "factom"},
                {"name": "0x", "code": "0x", "png": "0x"},
                {"name": "aelf", "code": "aelf", "png": "aelf"},
                {"name": "Aeternity", "code": "aeternity", "png": "aeternity"},
                {"name": "Aion", "code": "aion", "png": "aion"},
                {"name": "Bancor", "code": "bancor", "png": "bancor"},
                {"name": "Bitcore", "code": "bitcore", "png": "bitcore"},
                {"name": "Byteball B.", "code": "byteball", "png": "byteball"},
                {"name": "Bytom", "code": "bytom", "png": "bytom"},
                {"name": "Chainlink", "code": "chainlink", "png": "chainlink"},
                {"name": "Cindicator", "code": "cindicator", "png": "cindicator"},
                {"name": "Cryptonex", "code": "cryptonex", "png": "cryptonex"},
                {"name": "Dent", "code": "dent", "png": "dent"},
                {"name": "Dentacoin", "code": "dentacoin", "png": "dentacoin"},
                {"name": "DigixDAO", "code": "digixdao", "png": "digixdao"},
                {"name": "Dogecoin", "code": "dogecoin", "png": "dogecoin"},
                {"name": "Electroneum", "code": "electroneum", "png": "electroneum"},
                {"name": "Emercoin", "code": "emercoin", "png": "emercoin"},
                {"name": "Enigma", "code": "enigma", "png": "enigma-project"},
                {"name": "Ethos", "code": "ethos", "png": "ethos"},
                {"name": "Exp Pts", "code": "experiencepoints", "png": "experience-points"},
                {"name": "FunFair", "code": "funfair", "png": "funfair"},
                {"name": "Gas", "code": "gas", "png": "gas"},
                {"name": "Gnosis", "code": "gnosis", "png": "gnosis-gno"},
                {"name": "GXShares", "code": "gxshares", "png": "gxshares"},
                {"name": "Kin", "code": "kin", "png": "kin"},
                {"name": "Kyber Netw.", "code": "kybernetwork", "png": "kyber-network"},
                {"name": "Loopring", "code": "loopring", "png": "loopring"},
                {"name": "MaidSafe", "code": "maidsafecoin", "png": "maidsafecoin"},
                {"name": "MediBloc", "code": "medibloc", "png": "medibloc"},
                {"name": "MonaCoin", "code": "monacoin", "png": "monacoin"},
                {"name": "Neblio", "code": "neblio", "png": "neblio"},
                {"name": "Nebulas", "code": "nebulas", "png": "nebulas-token"},
                {"name": "Nexus", "code": "nexus", "png": "nexus"},
                {"name": "QASH", "code": "qash", "png": "qash"},
                {"name": "Quantstamp", "code": "quantstamp", "png": "quantstamp"},
                {"name": "RChain", "code": "rchain", "png": "rchain"},
                {"name": "Reddcoin", "code": "reddcoin", "png": "reddcoin"},
                {"name": "Request Net", "code": "requestnetwork", "png": "request-network"},
                {"name": "SIRIN LABS", "code": "sirinlabs", "png": "sirin-labs-token"},
                {"name": "SmartCash", "code": "smartcash", "png": "smartcash"},
                {"name": "Substratum", "code": "substratum", "png": "substratum"},
                {"name": "TenX", "code": "tenx", "png": "tenx"},
                {"name": "Walton", "code": "walton", "png": "walton"},
                {"name": "WAX", "code": "wax", "png": "wax"},
                {"name": "XPA", "code": "xpa", "png": "xpa"},
                {"name": "ZClassic", "code": "zclassic", "png": "zclassic"},
                {"name": "ZCoin", "code": "zcoin", "png": "zcoin"},
                {"name": "PACcoin", "code": "paccoin", "png": "paccoin"},
                {"name": "Aragon", "code": "aragon", "png": "aragon"},
                {"name": "Singularity", "code": "singularity", "png": "singularity"},
                {"name": "Blocknet", "code": "blocknet", "png": "blocknet"},
                {"name": "Particl", "code": "particl", "png": "particl"}];



// create a string for the coin html

var cryptoHTML = "";

for (var i = 0; i < arrCrypto.length; i++) {

  cryptoHTML += "<div id=\"" + arrCrypto[i].code + "\" class=\"" + arrCrypto[i].code + 
                " coinbg col-md-3 well message\"><img src=\"../images/logo/" + arrCrypto[i].png + 
                ".png\"> " + arrCrypto[i].name + "</div>";

}

// lets populate the options html using a array of crypto coins

$("#cryptoOptions").append(cryptoHTML);
