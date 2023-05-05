var language = localStorage.getItem('language');
const backButton = document.querySelector('.back-btn');

const languages = {
    korean: {
        headTitle: '카메라 페이지',
        bodyH1: '나는 카메라야',
        backText: '뒤로가기',
        cameraButton: '카메라 켜기',
    },
    english: {
        headTitle: 'Camera page',
        bodyH1: "I'm camera!",
        backText: 'Go back',
        cameraButton: 'Start camera',
    }
};

// 언어별로 다른 텍스트를 보여주는 함수
function updateContent(language) {
    // 언어별로 다른 텍스트를 보여주기 위해 객체에서 텍스트를 가져옴
    const {
        headTitle,
        bodyH1,
        backText,
        cameraButton,
    } = languages[language];

    // 가져온 텍스트를 HTML에 적용
    document.querySelector('.head-title').innerHTML = headTitle;
    document.querySelector('.body-h1').innerHTML = bodyH1;
    backButton.innerHTML = backText;
    document.querySelector('.camera-btn').innerHTML = cameraButton;
}

updateContent(language);

backButton.addEventListener('click', (event) => {
    window.location.href = '/';
});

