const radius = process.argv[2] ? process.argv[2] : 0;
const PI = Math.PI;

if (radius !== 0) {
  let area = 2 * PI * radius;
  console.log(`Yarıçapı ${radius} olan dairenin alanı: ${area.toFixed(2)}`);
} else {
  console.log("Lütfen bir sayıyı parametre olarak girin.");
}
