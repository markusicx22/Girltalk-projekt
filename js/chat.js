/* JS'EN ER LAVET MED INSPIRATION FRA CLAUDE.AI OG W3SCHOOL*/

// Chat funktion
const msgs = document.getElementById('messages');
const input = document.getElementById('chat-input');
msgs.scrollTop = msgs.scrollHeight;

function sendMessage() {
  const txt = input.value.trim();
  if (!txt) return;
  const now = new Date();
  const time = now.getHours() + ':' + String(now.getMinutes()).padStart(2, '0');
  const row = document.createElement('div');
  row.className = 'message message--sent';
  const bubble = document.createElement('p');
  bubble.className = 'message__bubble';
  bubble.textContent = txt;
  const ts = document.createElement('span');
  ts.className = 'message__time';
  ts.textContent = time;
  row.appendChild(bubble);
  row.appendChild(ts);
  msgs.appendChild(row);
  input.value = '';
  msgs.scrollTop = msgs.scrollHeight;
}

document.getElementById('send-btn').addEventListener('click', sendMessage);
input.addEventListener('keydown', function(e) { if (e.key === 'Enter') sendMessage(); });