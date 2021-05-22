const PI = Math.PI;

function circleArea(r = 5) {
  console.log(2 * PI * r);
}
function circleCircumference(r = 5) {
  console.log(PI * r * r);
}

module.exports = {
  circleArea,
  circleCircumference,
};
