// Filter brevkasse
document.querySelectorAll('#bk-filters .bk-tag').forEach(function(tag) {
  tag.addEventListener('click', function() {
    document.querySelectorAll('#bk-filters .bk-tag').forEach(function(t) { t.classList.remove('bk-active'); });
    tag.classList.add('bk-active');
    const filter = tag.dataset.filter;
    document.querySelectorAll('#bk-list .bk-card').forEach(function(card) {
      card.style.display = (filter === 'alle' || card.dataset.status === filter) ? '' : 'none';
    });
  });
}); 