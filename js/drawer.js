/* JS'EN ER LAVET MED INSPIRATION FRA CLAUDE.AI OG W3SCHOOL*/

// Burgermenu
function openDrawer() {
  document.getElementById('globalOv').classList.add('show');
  document.getElementById('globalDrawer').classList.add('open');
  document.getElementById('menu-btn').classList.add('open');
}
function closeDrawer() {
  document.getElementById('globalOv').classList.remove('show');
  document.getElementById('globalDrawer').classList.remove('open');
  document.getElementById('menu-btn').classList.remove('open');
}
document.getElementById('menu-btn').addEventListener('click', openDrawer);
document.getElementById('globalOv').addEventListener('click', closeDrawer);