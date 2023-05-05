const langButton = document.querySelector('.lang-btn');
const langContent = document.querySelector('.lang-content');
const koreanButton = document.querySelector('.korean-btn');
const englishButton = document.querySelector('.english-btn');

// 언어별로 다른 텍스트를 보여주기 위한 객체
const languages = {
    korean: {
        headTitle: '퍼그 사이트입니다!',
        bodyH1: '나는 h1야',
        bodyP: '나는 P야',
        langButton: '언어 바꾸기',
        koreanButton: '한국어',
        englishButton: '영어'
    },
    english: {
        headTitle: 'This is a Pug site',
        bodyH1: 'I am h1',
        bodyP: 'I am P',
        langButton: 'Change language',
        koreanButton: 'Korean',
        englishButton: 'English'
    }
};

// 언어별로 다른 텍스트를 보여주는 함수
function updateContent(language) {
    // 언어별로 다른 텍스트를 보여주기 위해 객체에서 텍스트를 가져옴
    const {
        headTitle,
        bodyH1,
        bodyP,
        langButton: langButtonText,
        koreanButton: koreanButtonText,
        englishButton: englishButtonText
    } = languages[language];

    // 가져온 텍스트를 HTML에 적용
    document.querySelector('.head-title').innerHTML = headTitle;
    document.querySelector('.body-h1').innerHTML = bodyH1;
    document.querySelector('.body-p').innerHTML = bodyP;
    langButton.innerHTML = langButtonText;
    koreanButton.innerHTML = koreanButtonText;
    englishButton.innerHTML = englishButtonText;
}

langButton.addEventListener('click', () => {
    langContent.style.display = langContent.style.display === 'block' ? 'none' : 'block';
});

// 언어별로 다른 텍스트를 보여주는 함수를 호출
koreanButton.addEventListener('click', (event) => {
    event.preventDefault(); // a 태그의 기본 동작을 막음
    updateContent('korean');
});

englishButton.addEventListener('click', (event) => {
    event.preventDefault();
    updateContent('english');
});

updateContent('english'); // 페이지가 로드될 때 기본적으로 영어로 설정
