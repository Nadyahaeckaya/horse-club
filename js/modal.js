// ===== МОДАЛЬНОЕ ОКНО ДЛЯ СТРАНИЦЫ СОРЕВНОВАНИЙ =====

const modal = document.getElementById("modal");
const btn = document.getElementById("openModalBtn");
const closeBtn = document.querySelector(".modal__close");

// Открыть окно
btn.onclick = function() {
    modal.style.display = "flex";
}

// Закрыть по крестику
closeBtn.onclick = function() {
    modal.style.display = "none";
}

// Закрыть по клику вне окна
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}