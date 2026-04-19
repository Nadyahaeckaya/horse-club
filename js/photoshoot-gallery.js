// 1. СПИСОК ФОТОГРАФИЙ (добавьте свои фото)
const galleryPhotos = [
    "img/fotoset1.jpg",
    "img/fotoset2.jpg",
    "img/fotoset3.jpg",
    "img/fotoset4.jpg",
    "img/fotoset5.jpg"
];

// 2. НАХОДИМ ЭЛЕМЕНТЫ НА СТРАНИЦЕ
let currentPhotoIndex = 0;
const mainPhoto = document.getElementById("galleryMainPhoto");
const prevPhotoBtn = document.getElementById("prevPhotoBtn");
const nextPhotoBtn = document.getElementById("nextPhotoBtn");
const photoCounter = document.getElementById("photoCounter");

// 3. ФУНКЦИЯ ОБНОВЛЕНИЯ ГАЛЕРЕИ
function updatePhotoGallery() {
    // Меняем фото
    mainPhoto.src = galleryPhotos[currentPhotoIndex];
    mainPhoto.alt = "Работа Марии " + (currentPhotoIndex + 1);
    
    // Обновляем счётчик (1/5, 2/5 и т.д.)
    if (photoCounter) {
        photoCounter.textContent = `${currentPhotoIndex + 1} / ${galleryPhotos.length}`;
    }
}

// 4. СЛЕДУЮЩЕЕ ФОТО
function nextPhoto() {
    currentPhotoIndex++;
    if (currentPhotoIndex >= galleryPhotos.length) {
        currentPhotoIndex = 0;
    }
    updatePhotoGallery();
}

// 5. ПРЕДЫДУЩЕЕ ФОТО
function prevPhoto() {
    currentPhotoIndex--;
    if (currentPhotoIndex < 0) {
        currentPhotoIndex = galleryPhotos.length - 1;
    }
    updatePhotoGallery();
}

// 6. НАВЕШИВАЕМ ОБРАБОТЧИКИ НА КНОПКИ
if (prevPhotoBtn) prevPhotoBtn.addEventListener("click", prevPhoto);
if (nextPhotoBtn) nextPhotoBtn.addEventListener("click", nextPhoto);

// 7. ЗАПУСКАЕМ ГАЛЕРЕЮ
updatePhotoGallery();