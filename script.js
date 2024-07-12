window.addEventListener('load', function() {
    var content = document.getElementById('content');
    var page = window.location.pathname.split("/").pop();

    if (page === 'index.html' || page === '') {
        content.innerHTML = '<h2>환영합니다!</h2><p>이곳은 홈페이지입니다.</p>';
    } else if (page === 'about.html') {
        content.innerHTML = '<h2>소개</h2><p>이 웹사이트는 연습용으로 만들었습니다.</p>';
    }
});
