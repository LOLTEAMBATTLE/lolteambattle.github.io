function loadContent(page) {
    const content = document.getElementById('content');
    
    if (page === 'home') {
        content.innerHTML = '<h2>환영합니다!</h2><p>이곳은 홈페이지입니다.123</p>'
        <div class="grid-container">
        <div class="grid-item">Grid Item 1</div>
        <div class="grid-item">Grid Item 2</div>
        <div class="grid-item">Grid Item 3</div>
        <div class="grid-item">Grid Item 4</div>
        <div class="grid-item">Grid Item 5</div>
        <div class="grid-item">Grid Item 6</div>
        </div>';
    } else if (page === 'regi') {
        content.innerHTML = '<h2>팀등록</h2><p>이 웹사이트는 연습용으로 만들었습니다.</p>';
    }
}

// 페이지 로드 시 초기 컨텐츠 설정
window.addEventListener('load', () => loadContent('home'));

// 네비게이션 링크 클릭 이벤트 처리
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const page = e.target.getAttribute('href').substr(1);
        loadContent(page);
    });
});
