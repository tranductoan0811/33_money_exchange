function doitien() {
  let vnd, country, country_label, country_name;
  vnd = +document.getElementById("amount").value;
  country = document.getElementById("tocurrency").value;
  country_label = document.getElementById("tocurrency");
  country_name = country_label.options[country_label.selectedIndex].innerHTML;
  let tygia = 0;
 
    
  switch (country) {
    case "US":
      tygia += parseFloat(23080.00);
      break;
    case "CHF":
      tygia += parseFloat(23700.00);
      break;
    case "JP":
      tygia += parseFloat(166.00);
      break;
    case "KRW":
      tygia += parseFloat(15.00);
      break;
    case "HKD":
      tygia += parseFloat(2887.00);
      break;
    case "INR":
      tygia += parseFloat(295.00);
      break;
    case "AUD":
      tygia += parseFloat(15684.00);
      break;
    case "CNY":
      tygia += parseFloat(3403.00);
      break;
  }

 
  let display_rate = ("tỷ giá: " + parseFloat(tygia).toLocaleString() + " vnd / 1 " + country_name);

  let display = (" Số tiền " + parseFloat(vnd).toLocaleString() + " vnd sau quy đổi là: " + parseFloat(vnd/tygia).toFixed(2) + " " + country_name);

  document.getElementById("exchange_rate").innerHTML = display_rate;
  document.getElementById("result").innerHTML = display;

}