let imgDisplay = document.querySelector("img");
let input = document.querySelector("input");

input.addEventListener('change', () => {
    const reader = new FileReader();
    reader.readAsDataURL(input.files[0]);
    reader.onload = () => {
        imgDisplay.style.backgroundImage = `url(${reader.result})`;
    }
})