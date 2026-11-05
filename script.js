const searchInput = document.querySelector('#content-search');
const clearButton = document.querySelector('#clear-search');

if (searchInput && clearButton) {
  const cards = Array.from(document.querySelectorAll('.content-card'));
  const resultCount = document.querySelector('#results-count');
  const noResults = document.querySelector('#no-results');

  function filterCards() {
    const query = searchInput.value.trim().toLocaleLowerCase('tr-TR');
    let visibleCount = 0;

    cards.forEach((card) => {
      const title = card.querySelector('h3').textContent.toLocaleLowerCase('tr-TR');
      const matches = title.includes(query);
      card.hidden = !matches;
      visibleCount += Number(matches);
    });

    resultCount.textContent = `${visibleCount} içerik gösteriliyor`;
    noResults.hidden = visibleCount !== 0;
  }

  searchInput.addEventListener('input', filterCards);
  clearButton.addEventListener('click', () => {
    searchInput.value = '';
    filterCards();
    searchInput.focus();
  });
}