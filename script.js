let iconShare = document.getElementById('share_click');
let textShare = document.getElementById('share_item');

iconShare.addEventListener('click', () => {
    textShare.classList.toggle('show');
});