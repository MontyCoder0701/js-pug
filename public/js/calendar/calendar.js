// 저장한 언어를 불러오기 
var language = localStorage.getItem('language');
const backButton = document.querySelector('.back-btn');

const languages = {
    korean: {
        headTitle: '달력 페이지',
        bodyH1: '나는 달력이야',
        backText: '뒤로가기',
    },
    english: {
        headTitle: 'Calendar page',
        bodyH1: "I'm calendar!",
        backText: 'Go back',
    }
};

// 언어별로 다른 텍스트를 보여주는 함수
function updateContent(language) {
    // 언어별로 다른 텍스트를 보여주기 위해 객체에서 텍스트를 가져옴
    const {
        headTitle,
        bodyH1,
        backText,
    } = languages[language];

    // 가져온 텍스트를 HTML에 적용
    document.querySelector('.head-title').innerHTML = headTitle;
    document.querySelector('.body-h1').innerHTML = bodyH1;
    backButton.innerHTML = backText;
}

updateContent(language);

backButton.addEventListener('click', (event) => {
    window.location.href = '/';
});
