// ===== ЗАГРУЗКА ДАННЫХ О ЛОШАДЯХ ИЗ XML =====

function loadHorsesFromXML() {
    // Создаём запрос к XML файлу
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "horses.xml", true);
    
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            // Парсим XML
            const xmlDoc = xhr.responseXML;
            const horses = xmlDoc.getElementsByTagName("horse");
            
            // Находим контейнер для карточек
            const container = document.getElementById("horsesFromXML");
            if (!container) return;
            
            // Очищаем контейнер
            container.innerHTML = "";
            
            // Проходим по всем лошадям и создаём карточки
            for (let i = 0; i < horses.length; i++) {
                const name = horses[i].getElementsByTagName("name")[0].textContent;
                const description = horses[i].getElementsByTagName("description")[0].textContent;
                const image = horses[i].getElementsByTagName("image")[0].textContent;
                
                // Создаём карточку
                const card = document.createElement("div");
                card.className = "horse-card-xml";
                card.innerHTML = `
                    <div class="horse-card-xml__image">
                        <img src="${image}" alt="${name}">
                    </div>
                    <div class="horse-card-xml__info">
                        <h3 class="horse-card-xml__name">${name}</h3>
                        <p class="horse-card-xml__desc">${description}</p>
                    </div>
                `;
                container.appendChild(card);
            }
        }
    };
    xhr.send();
}

// Загружаем данные, когда страница загрузилась
document.addEventListener("DOMContentLoaded", loadHorsesFromXML);