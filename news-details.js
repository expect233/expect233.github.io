document.addEventListener("DOMContentLoaded", () => {
    const newsDetailsContainer = document.getElementById("news-details");
    const params = new URLSearchParams(window.location.search);
    const newsId = params.get("id"); // 獲取 URL 中的新聞 ID
  
    if (!newsId) {
      newsDetailsContainer.innerHTML = `<p class="error">未找到對應的新聞。</p>`;
      return;
    }
  
    // 加載新聞 JSON 文件
    fetch("news.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("無法加載新聞資料");
        }
        return response.json();
      })
      .then((data) => {
        const newsItem = data.news.find((item) => item.id === parseInt(newsId));
        if (!newsItem) {
          newsDetailsContainer.innerHTML = `<p class="error">未找到對應的新聞。</p>`;
          return;
        }
        renderNewsDetails(newsItem);
      })
      .catch((error) => {
        console.error("新聞詳情載入失敗：", error);
        if (error.message.includes("Failed to fetch")) {
          newsDetailsContainer.innerHTML = `<p class="error">無法連接到伺服器，請檢查網絡。</p>`;
        } else {
          newsDetailsContainer.innerHTML = `<p class="error">載入新聞失敗，請稍後重試。</p>`;
        }
      });
      
  
    // 渲染新聞詳情
    function renderNewsDetails(newsItem) {
      newsDetailsContainer.innerHTML = `
        <h2>${newsItem.title}</h2>
        <p class="news-date">${newsItem.date}</p>
        <p class="news-content">${newsItem.content}</p>
      `;
    }
  });
  