/* JS ER LAVET MED INSPIRATION FRA CLAUDE*/

// 1. Adgangskode min 8 tegn
document.getElementById('pw-input').addEventListener('input', function() {
  const msg = document.getElementById('pw-msg');
  const len = this.value.length;
  if (len === 0) { msg.textContent = ''; msg.style.color = ''; return; }
  if (len < 8) {
    msg.textContent = '⚠ Mindst 8 tegn kræves (' + len + '/8)';
    msg.style.color = '#E53935';
  } else {
    msg.textContent = '✓ Adgangskode OK';
    msg.style.color = '#4CAF50';
  }
});

// 2. Login knap
document.getElementById('login-btn').addEventListener('click', function() {
  window.location.href = 'home.html';
});