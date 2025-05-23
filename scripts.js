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
document.addEventListener('DOMContentLoaded', () => {
    const emailInput = document.getElementById('email');
    const sendCodeBtn = document.getElementById('send-code-btn');
    const verificationCodeInput = document.getElementById('verification-code');
    const confirmBtn = document.getElementById('confirm-btn');

    // 發送驗證碼按鈕點擊事件
    sendCodeBtn.addEventListener('click', () => {
        if (emailInput.checkValidity()) {
            alert('驗證碼已發送至您的信箱，請查收。');
            // 啟用驗證碼輸入框
            verificationCodeInput.disabled = false;
            verificationCodeInput.focus();
        } else {
            alert('請先輸入有效的電子信箱。');
        }
    });

    // 驗證碼輸入框輸入事件
    verificationCodeInput.addEventListener('input', () => {
        if (verificationCodeInput.value.trim().length > 0) {
            confirmBtn.disabled = false; // 啟用確定按鈕
        } else {
            confirmBtn.disabled = true; // 禁用確定按鈕
        }
    });
});
// 監聽滾動事件，控制按鈕顯示與隱藏
window.addEventListener("scroll", function () {
    let topButton = document.getElementById("top-btn");
  
    if (window.scrollY > 100) { 
      topButton.classList.add("show"); // 顯示按鈕
    } else {
      topButton.classList.remove("show"); // 隱藏按鈕
    }
  });
  
  // 點擊按鈕後，平滑滾動回頂部
  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
  