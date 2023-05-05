const langButton = document.querySelector('.lang-btn');
const langContent = document.querySelector('.lang-content');
const koreanButton = document.querySelector('.korean-btn');
const englishButton = document.querySelector('.english-btn');

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

function updateContent(language) {
    const {
        headTitle,
        bodyH1,
        bodyP,
        langButton: langButtonText,
        koreanButton: koreanButtonText,
        englishButton: englishButtonText
    } = languages[language];

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

koreanButton.addEventListener('click', (event) => {
    event.preventDefault();
    updateContent('korean');
});

englishButton.addEventListener('click', (event) => {
    event.preventDefault();
    updateContent('english');
});


updateContent('english');
