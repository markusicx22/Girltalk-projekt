/* JS'EN ER LAVET MED INSPIRATION FRA CLAUDE.AI OG W3SCHOOL*/

// Chat funktion
const msgs = document.getElementById('fmsgs');
const input = document.getElementById('fmi');
msgs.scrollTop = msgs.scrollHeight;

function sendMessage() {
  const txt = input.value.trim();
  if (!txt) return;
  const now = new Date();
  const time = now.getHours() + ':' + String(now.getMinutes()).padStart(2, '0');
  const row = document.createElement('div');
  row.className = 'msg s';
  const bubble = document.createElement('p');
  bubble.className = 'bbl';
  bubble.textContent = txt;
  const ts = document.createElement('span');
  ts.className = 'mt';
  ts.textContent = time;
  row.appendChild(bubble);
  row.appendChild(ts);
  msgs.appendChild(row);
  input.value = '';
  msgs.scrollTop = msgs.scrollHeight;
}

document.getElementById('send-btn').addEventListener('click', sendMessage);
input.addEventListener('keydown', function(e) { if (e.key === 'Enter') sendMessage(); });