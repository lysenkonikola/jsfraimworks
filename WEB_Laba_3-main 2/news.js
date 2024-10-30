document.addEventListener("DOMContentLoaded", function() {
    const newsModal = document.getElementById("news");
    const closeNewsBtn = document.getElementById("closeNewsBtn");
    const newsItems = document.getElementById("newsItems");
    const selectedNewsContainer = document.getElementById("selectedNewsContainer");

    let newsData = [
        { id: 1, title: "Новина 1", content: "Детальна інформація про новину 1..." },
        { id: 2, title: "Новина 2", content: "Детальна інформація про новину 2..." },
        { id: 3, title: "Новина 3", content: "Детальна інформація про новину 3..." }
    ];

    // Функція для відображення списку новин
    function displayNewsList() {
        newsItems.innerHTML = "";
        newsData.forEach(news => {
            const div = document.createElement("div");
            div.textContent = news.title;
            div.className = "news-item";
            div.onclick = () => selectNews(news); // Додано обробник події onclick
            newsItems.appendChild(div);
        });
    }

    // Функція для відображення обраної новини
    function selectNews(news) {
        // Перевіряємо, чи новина вже є у контейнері обраних новин
        const existingNewsItem = document.getElementById(`selected-news-${news.id}`);
        if (existingNewsItem) {
            return;
        }

        // Створюємо новий div для обраної новини
        const selectedNewsDiv = document.createElement("div");
        selectedNewsDiv.id = `selected-news-${news.id}`;
        selectedNewsDiv.className = "selected-news-item";
        selectedNewsDiv.innerHTML = `<h3>${news.title}</h3><p>${news.content}</p>`;

        // Додаємо обрану новину до контейнера обраних новин
        selectedNewsContainer.insertBefore(selectedNewsDiv, selectedNewsContainer.firstChild);
    }

    // Обробники подій для закриття модального вікна новин
    closeNewsBtn.onclick = function() {
        newsModal.style.display = "none";
    };

    window.onclick = function(event) {
        if (event.target === newsModal) {
            newsModal.style.display = "none";
        }
    };

    // Обробник події для кнопки "Новини"
    const newsButton = document.querySelector('.btn__header:nth-child(4)');
    newsButton.addEventListener('click', function() {
        newsModal.style.display = "block"; // Відображаємо модальне вікно з новинами
        displayNewsList(); // Відображаємо список новин
    });
});
