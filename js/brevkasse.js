/* JS'EN ER LAVET MED INSPIRATION FRA CLAUDE.AI OG W3SCHOOL*/

// Filter brevkasse
document.querySelectorAll('.bk-filters__tag').forEach(function(tag) {
  tag.addEventListener('click', function() {
    document.querySelectorAll('.bk-filters__tag').forEach(function(t) { t.classList.remove('bk-filters__tag--active'); });
    tag.classList.add('bk-filters__tag--active');
    const filter = tag.dataset.filter;
    document.querySelectorAll('.bk-card').forEach(function(card) {
      card.style.display = (filter === 'alle' || card.dataset.status === filter) ? '' : 'none';
    });
  });
});