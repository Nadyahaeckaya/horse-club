const photos = [
    "img/sorev.jpg",
    "img/progylkaRom.jpg",
    "img/photogal3.jpg",
    "img/photogal4.jpg",
    "img/photogal5.jpg",
    "img/photogal6.jpg"
];

// 2. НАХОДИМ ВСЕ ЭЛЕМЕНТЫ НА СТРАНИЦЕ
let currentIndex = 0;  // текущий индекс фото (0 = первое фото)

const mainImage = document.getElementById("galleryMainImage");  // большое фото
const prevBtn = document.querySelector(".gallery__nav");        // кнопка "назад"
const nextBtn = document.querySelector(".gallery__nav--next");  // кнопка "вперед"
const thumbnails = document.querySelectorAll(".gallery__thumbnail"); // все миниатюры

// 3. ФУНКЦИЯ ОБНОВЛЕНИЯ ГАЛЕРЕИ (показывает текущее фото)
function updateGallery() {
    // Меняем большое фото
    mainImage.src = photos[currentIndex];
    mainImage.alt = "Фото галереи " + (currentIndex + 1);
    
    // Подсвечиваем активную миниатюру
    thumbnails.forEach((thumb, index) => {
        if (index === currentIndex) {
            thumb.classList.add("gallery__thumbnail--active");
        } else {
            thumb.classList.remove("gallery__thumbnail--active");
        }
    });
}

// 4. ФУНКЦИЯ "СЛЕДУЮЩЕЕ ФОТО"
function nextPhoto() {
    currentIndex++;  // увеличиваем индекс на 1
    if (currentIndex >= photos.length) {  // если дошли до конца
        currentIndex = 0;  // возвращаемся к первому
    }
    updateGallery();
}

// 5. ФУНКЦИЯ "ПРЕДЫДУЩЕЕ ФОТО"
function prevPhoto() {
    currentIndex--;  // уменьшаем индекс на 1
    if (currentIndex < 0) {  // если ушли в начало
        currentIndex = photos.length - 1;  // переходим в конец
    }
    updateGallery();
}

// 6. ФУНКЦИЯ "ПЕРЕЙТИ К ФОТО ПО НОМЕРУ"
function goToPhoto(index) {
    currentIndex = index;
    updateGallery();
}

// 7. НАВЕШИВАЕМ ОБРАБОТЧИКИ НА КНОПКИ
nextBtn.addEventListener("click", nextPhoto);
prevBtn.addEventListener("click", prevPhoto);

// 8. НАВЕШИВАЕМ ОБРАБОТЧИКИ НА МИНИАТЮРЫ
thumbnails.forEach((thumb, index) => {
    thumb.addEventListener("click", () => {
        goToPhoto(index);
    });
});

// 9. ЗАПУСКАЕМ ГАЛЕРЕЮ (показываем первое фото)
updateGallery();