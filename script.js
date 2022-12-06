function hasil() {
  var jarak = parseFloat(document.getElementById("jarak").value);
  var harga = [10000, 7500, 5000];
  var hasil = 0;
  var km = jarak;
  console.log(km);
  for (i = 0; i < harga.length; i++) {
    if (i == harga.length) {
      hasil += km * harga[i];
    } else {
      if (km >= 4) {
        hasil += 4 * harga[i];
        km -= 4;
      } else {
        hasil += km * harga[i];
        km = 0;
      }
    }
  }
  document.getElementById("total").innerHTML = numberWithCommas(hasil);
}
function numberWithCommas(x) {
  var parts = x.toString().split(".");
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return parts.join(".");
}
