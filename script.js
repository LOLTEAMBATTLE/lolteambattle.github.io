function loadContent(page) {
    const content = document.getElementById('content');
    
    if (page === 'home') {
        content.innerHTML = `
            <section id="team-registration">
                <h2>팀 등록</h2>
                <div class="board-content"></div>
            </section>
            <section id="free-board">
                <h2>자유게시판</h2>
                <div class="board-content"></div>
            </section>
            <section id="match-results">
                <h2>경기 결과</h2>
                <div class="board-content"></div>
            </section>
            <section id="team-rankings">
                <h2>팀 순위</h2>
                <div class="board-content"></div>
            </section>
        `;
        // 각 섹션에 "데이터 없음" 메시지 추가
        const sections = ['team-registration', 'free-board', 'match-results', 'team-rankings'];
        sections.forEach(sectionId => {
            const contentDiv = document.querySelector(`#${sectionId} .board-content`);
            contentDiv.textContent = '데이터가 없습니다.';
        });
    } else if (page === 'regi') {
        content.innerHTML = '<h2>팀등록</h2><p>이 웹사이트는 연습용으로 만들었습니다.</p>';
    } else if (page === 'board') {
        content.innerHTML = '<h2>자유게시판</h2><p>자유롭게 의견을 나누는 공간입니다.</p>';
    }
}

// 페이지 로드 시 초기 컨텐츠 설정
window.addEventListener('load', () => loadContent('home'));

// 네비게이션 링크 클릭 이벤트 처리
document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('nav a').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const page = e.target.getAttribute('href').substr(1);
            loadContent(page);
        });
    });
});
