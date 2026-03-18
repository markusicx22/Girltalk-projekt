/* JS'EN ER LAVET MED INSPIRATION FRA CLAUDE.AI OG W3SCHOOL*/

// Carousel //
let carIndex = 0;
const carTotal = 3;
function carGoTo(n) {
  carIndex = (n + carTotal) % carTotal;
  document.getElementById('hct').style.transform = 'translateX(-' + (carIndex 100) + '%)';
  document.querySelectorAll('#hd .cdot').forEach(function(dot, i) {
    dot.classList.toggle('on', i === carIndex);
  });
}
document.getElementById('car-prev').addEventListener('click', function() { carGoTo(carIndex - 1); });
document.getElementById('car-next').addEventListener('click', function() { carGoTo(carIndex + 1); });
document.querySelectorAll('#hd .cdot').forEach(function(dot, i) {
  dot.addEventListener('click', function() { carGoTo(i); });
});