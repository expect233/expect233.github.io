function filterFAQs() {
    const searchInput = document.getElementById('search').value.toLowerCase();
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        const question = item.querySelector('h3').innerText.toLowerCase();
        const answer = item.querySelector('p').innerText.toLowerCase();

        // 如果搜尋字串出現在問題或答案中，顯示該項目，否則隱藏
        if (question.includes(searchInput) || answer.includes(searchInput)) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
}
