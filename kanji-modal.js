(function() {
  'use strict';
  
  // ===== DOM элементүүд =====
  const modal = document.getElementById('kanjiModal');
  const modalClose = document.getElementById('modalClose');
  const modalChar = document.getElementById('modalChar');
  const modalOn = document.getElementById('modalOn');
  const modalKun = document.getElementById('modalKun');
  const modalMeaning = document.getElementById('modalMeaning');
  const modalDescription = document.getElementById('modalDescription');
  const modalFavBtn = document.getElementById('modalFavBtn');
  
  // Хэрэв modal байхгүй бол (kanji.html биш) гарах
  if (!modal) return;
  
  const kanjiCards = document.querySelectorAll('.kanji-card-5');
  
  // ===== Modal нээх =====
  function openModal(card) {
    const char = card.dataset.char || '?';
    const on = card.dataset.on || '-';
    const kun = card.dataset.kun || '-';
    const meaning = card.dataset.meaning || '-';
    const description = card.dataset.description || 'Тайлбар байхгүй.';
    
    modalChar.textContent = char;
    modalOn.textContent = on;
    modalKun.textContent = kun;
    modalMeaning.textContent = meaning;
    modalDescription.textContent = description;
    
    modalFavBtn.dataset.char = char;
    modalFavBtn.dataset.meaning = meaning;
    
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }
  
  // ===== Modal хаах =====
  function closeModal() {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }
  
  // ===== Карт дээр дарх =====
  kanjiCards.forEach(card => {
    card.addEventListener('click', function() {
      if (this.dataset.char) {
        openModal(this);
      }
    });
  });
  
  // ===== Хаах үйлдлүүд =====
  modalClose.addEventListener('click', closeModal);
  modal.addEventListener('click', function(e) {
    if (e.target === this) closeModal();
  });
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
      closeModal();
    }
  });
  
  // ===== Дуртай руу нэмэх =====
  modalFavBtn.addEventListener('click', function() {
    const char = this.dataset.char;
    if (!char) return;
    
    let favorites = JSON.parse(localStorage.getItem('jp_favorites') || '[]');
    
    if (!favorites.includes(char)) {
      favorites.push(char);
      localStorage.setItem('jp_favorites', JSON.stringify(favorites));
      this.innerHTML = '<i class="fas fa-heart" style="color:#ef4444;"></i> Хадгалсан!';
      this.style.background = '#ef444420';
      this.style.borderColor = '#ef4444';
      setTimeout(() => {
        this.innerHTML = '<i class="fas fa-heart"></i> Дуртай руу нэмэх';
        this.style.background = '';
        this.style.borderColor = '';
      }, 2000);
    } else {
      alert('Энэ канжи аль хэдийн дуртай жагсаалтад байна.');
    }
  });
  
  // ===== Fade-in (script.js-тэй зөрчилдөхгүй) =====
  // script.js дээрх initFadeIn аль хэдийн ажилладаг
  // Гэхдээ kanji-д зориулж нэмэлтээр хийх шаардлагагүй
  
  console.log('✅ kanji-modal.js ачаалагдсан!');
})();
// Kanji modal-д дуртай товч нэмэх
<button class="modal-fav-btn" onclick="toggleKanjiFavorite('${char}', '${char}', '${meaning}', '${level}')">
    <i class="fas ${FavoritesManager.isFavorite('kanji_' + char) ? 'fa-heart' : 'fa-heart-o'}"></i> ${getTranslation('favorites_add')}
</button>

window.toggleKanjiFavorite = function(id, display, meaning, level) {
  const item = {
    id: 'kanji_' + id,
    type: 'kanji',
    display: display,
    meaning: meaning,
    meaning_en: meaning,
    meaning_jp: display,
    level: level || 'n5'
  };
  if (FavoritesManager.isFavorite(item.id)) {
    FavoritesManager.removeFavorite(item.id);
  } else {
    FavoritesManager.addFavorite(item);
  }
  // Modal UI шинэчлэх
  // close/update logic here
};