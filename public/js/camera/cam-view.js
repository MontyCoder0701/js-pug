const cameraButton = document.querySelector(".camera-btn");
const video = document.querySelector(".video");

let stream = null;

cameraButton.addEventListener('click', async function () {
    try {
        let stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: false });
        console.log("Successfully got user media:", stream);
        video.srcObject = stream;
        video.play();
    } catch (error) {
        console.error("Error getting user media:", error);
    }
});
