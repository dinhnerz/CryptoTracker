// dinhnluong@gmail.com 
// last updated : 07.21.2018

$(document).ready(function() {

  var storageCache = {};
  var startPage = "";
  var cryptoIdArray = [];

  chrome.storage.sync.get(null, function(result) {

    if (result.default == null) {
        // set default to not null
        chrome.storage.sync.set({"default": "notNull"}, null);
        // set big 2 default coins
        chrome.storage.sync.set({"bitcoin": "on"}, null);
        chrome.storage.sync.set({"ethereum": "on"}, null);
        // set default coins ID
        chrome.storage.sync.set({"cryptoId": [1, 1027]}, function(){
          cryptoIdArray = result.cryptoId;
        });
        // set display default setting to rank
        chrome.storage.sync.set({"displaySetting": "rank"}, null);
        //n set start API
        chrome.storage.sync.set({"current": "1"}, function() {
          startPage = 1;
        });
      }
      chrome.storage.sync.get("cryptoId", function(dataResult){ 
        cryptoIdArray = dataResult.cryptoId;
      })
      startPage = parseInt(result.current);
      start();
    });

  function start() {

    $.getJSON("https://api.coinmarketcap.com/v2/ticker/?start=" + startPage + "&limit=100&sort=rank&structure=array", function(data) {
      var cryptoHTML = "";
      for (var i = 0; i < 100; i++) {
        cryptoHTML += "<div id=\"" + data.data[i].website_slug + "\" class=\"" + data.data[i].website_slug + 
        " coinbg col-md-6 well message\"><img src=\"https://s2.coinmarketcap.com/static/img/coins/32x32/" + data.data[i].id + 
        ".png\"> #" + data.data[i].rank + " - <b>" + data.data[i].name + " </b>(" + data.data[i].symbol + ")</div>";
      }

      $("#cryptoOptions").append(cryptoHTML);

      checkFavorites();

      function checkFavorites() {
        chrome.storage.sync.get(null, function(storageData) {
          storageCache = storageData; 
          for (var i = 0; i < 100; i++) {
            if (storageCache[data.data[i].website_slug] == "on") {
              document.getElementById(data.data[i].website_slug).style.background = "#D3D3D3";
            }
          }    
        });
      }

      data.data.forEach(function(element) {
        $("."+element.website_slug).click(function() {
          chrome.storage.sync.get([element.website_slug], function(result) {
            var data = result[element.website_slug];
            if (data == "off" || data == null) {
             document.getElementById(element.website_slug).style.background = "#D3D3D3";
             chrome.storage.sync.set({[element.website_slug]: "on"}, null);
             cryptoIdArray.push(element.id);
             chrome.storage.sync.set({"cryptoId": cryptoIdArray}, null);
           } else if (data == "on") {
             document.getElementById(element.website_slug).style.background = "";
             chrome.storage.sync.set({[element.website_slug]: "off"}, null);
             cryptoIdArray.splice( $.inArray(element.id, cryptoIdArray), 1 );
             chrome.storage.sync.set({"cryptoId": cryptoIdArray}, null);
           }
         });
        });
      });
    });
  }
});


$("#resetFavorites, #resetFavoritesBottom").click(function(){
  chrome.storage.sync.clear(); 
  window.location.reload();
});

$("#next, #nextBottom").click(function(){
  chrome.storage.sync.get(null, function(result) {
    if (result.current <= 1000) {
      var currentPage = parseInt(result.current);
      currentPage = currentPage + 100;
      chrome.storage.sync.set({"current": currentPage}, function(){
        console.log(result.current);
        startPage = result.current;
        console.log(startPage);
        window.location.reload();
      });
    }    
  });
});

$("#previous, #previousBottom").click(function(){
  chrome.storage.sync.get(null, function(result) {
    if (result.current > 1) {
      var currentPage = parseInt(result.current);
      currentPage = currentPage - 100;
      chrome.storage.sync.set({"current": currentPage}, function(){
        console.log(result.current);
        startPage = result.current;
        console.log(startPage);
        window.location.reload();
      });
    }    
  });
});


