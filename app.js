let btn = document.querySelector("button");
let price = document.querySelector("#price");
let currency = "USD";

btn.addEventListener("click", function() {
let xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function() {
    if(xhr.readyState == 4 && xhr.status == 200) {
      let data = JSON.parse(xhr.responseText).bpi[currency].rate;
      price.innerHTML = `${data} ` + currency;
    }
  }  
  let url = "https://api.coindesk.com/v1/bpi/currentprice.json";
  xhr.open("GET", url);
  xhr.send();
});
