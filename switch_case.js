var namaHari = "senin";
var Day;

switch (namaHari) { 
  case "minggu":
    Day = "Sunday";
    break;
  case "senin":
    Day = "Monday";
    break;
  case "selasa":
    Day = "Tuesday";
    break;
  case "rabu":
    Day = "Wednesday";
    break;
  case "kamis":
    Day = "Thursday";
    break;
  case "jumat":
    Day = "Friday";
    break;
  case "sabtu":
    Day = "Saturday";
    break;
  default:
    Day = "Hari tidak valid";
}

console.log(" Bahasa Inggrisnya " + namaHari + " adalah " + Day );
