// ===========================
// RENDER KANJI PAGE GRID
// ===========================

document.addEventListener("DOMContentLoaded", function() {
  const grid = document.getElementById("kanjiPageGrid");
  if (!grid) return;
  
  let cards = "";
  
  // Бүх ханзыг дарааллаар нь харуулах
  kanjiList.forEach(function(kanji) {
    const data = kanjiData[kanji];
    cards += `
      <div class="kanji-page-card" onclick="openKanjiDetail('${kanji}')">
        <div class="kanji-page-char">${kanji}</div>
        <div class="kanji-page-meaning">${data.meaning}</div>
      </div>
    `;
  });
  
  grid.innerHTML = cards;
});

// ===========================
// OPEN KANJI DETAIL MODAL
// ===========================

function openKanjiDetail(kanji) {
  const data = kanjiData[kanji];
  if (!data) return;
  
  const modal = document.getElementById("kanjiDetailModal");
  if (!modal) return;
  
  // Мэдээллээр дүүргэх
  document.getElementById("detailChar").textContent = kanji;
  document.getElementById("detailReading").textContent = `${data.kunyomi} / ${data.onyomi}`;
  document.getElementById("detailMeaning").textContent = data.meaning;
  document.getElementById("detailKunyomi").textContent = data.kunyomi || "-";
  document.getElementById("detailOnyomi").textContent = data.onyomi || "-";
  document.getElementById("detailExample").textContent = data.example || "-";
  document.getElementById("detailTranslation").textContent = data.translation || "-";
  document.getElementById("detailDescription").textContent = data.description || "Тайлбар байхгүй.";
  
  // Модаль харуулах
  modal.classList.add("active");
  document.body.style.overflow = "hidden";
}

// ===========================
// CLOSE KANJI DETAIL MODAL
// ===========================

function closeKanjiDetail() {
  const modal = document.getElementById("kanjiDetailModal");
  if (modal) {
    modal.classList.remove("active");
    document.body.style.overflow = "";
  }
}

// ===========================
// CLOSE ON OUTSIDE CLICK
// ===========================

document.addEventListener("DOMContentLoaded", function() {
  const modal = document.getElementById("kanjiDetailModal");
  if (modal) {
    modal.addEventListener("click", function(e) {
      if (e.target === modal) {
        closeKanjiDetail();
      }
    });
  }
});

// ===========================
// CLOSE WITH ESC KEY
// ===========================

document.addEventListener("keydown", function(e) {
  if (e.key === "Escape") {
    closeKanjiDetail();
  }
});