joko = 180;
owo = 170;
ato = 190;

function tinggi(a, b, c) {
  if (a > b && a > c && b > c) {
    console.log("Urutan tingginya Joko " + a + "cm \n" + "Owo tingginya " + b + "cm \n" + "Ato tingginya " + c + "cm");
  } else if (a > b && a > c && c > b) {
    console.log("Urutan tingginya Joko " + a + "cm \n" + "Ato tingginya " + c + "cm \n" + "Owo tingginya " + b + "cm");
  } else if (b > a && b > c && a > c) {
    console.log("Urutan tingginya Owo " + b + "cm \n" + "Joko tingginya " + a + "cm \n" + "Ato tingginya " + c + "cm");
  } else if (b > a && b > c && a < c) {
    console.log("Urutan tingginya Owo " + b + "cm \n" + "Ato tingginya " + c + "cm \n" + "Joko tingginya " + a + "cm");
  } else if (c > a && c > b && a > b) {
    console.log("Urutan tingginya Ato " + c + "cm \n" + "Joko tingginya " + a + "cm \n" + "Owo tingginya " + b + "cm");
  } else if (a === b && a > c) {
    console.log("Tinggi Joko dan Owo sama " + a + "cm \n" + "Ato adalah yang terpendek " + c + "cm");
  } else if (a === b && a < c) {
    console.log("Ato adalah yang tertinggi " + c + "cm \n" + "Tinggi Joko dan Owo sama " + a + "cm");
  } else if (a > b && b === c) {
    console.log("Joko adalah yang tertinggi " + a + "cm \n" + "Tinggi Owo dan Ato sama " + b + "cm");
  } else if (a < b && b === c) {
    console.log("Tinggi Owo dan Ato sama " + b + "cm \n" + "Joko adalah yang terpendek " + a + "cm");
  } else if (a === b && b === c) {
    console.log("Tinggi Joko, Owo, dan Ato sama yaitu " + a + "cm");
  }
}

tinggi(joko, owo, ato);
