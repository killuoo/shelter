// Фильтрация карточек животных по категориям
window.addEventListener('DOMContentLoaded', function() {
  var filterBtns = document.querySelectorAll('.filter-btn');
  var petCards = document.querySelectorAll('.pet-card');

  // соответствие href -> data-category
  var map = {
    all: null,
    dogs: 'dog',
    cats: 'cat',
    others: 'other'
  };

  filterBtns.forEach(function(btn) {
    btn.addEventListener('click', function(e) {
      e.preventDefault();
      filterBtns.forEach(function(b) { b.classList.remove('active'); });
      btn.classList.add('active');
      var cat = btn.getAttribute('href').replace('#','');
      var filter = map[cat];
      petCards.forEach(function(card) {
        if (!filter || card.dataset.category === filter) {
          card.style.display = '';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
});
