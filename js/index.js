const showModal = (openButton, modalContent) => {
    const openBtn = document.getElementById(openButton), 
    modalContainer = document.getElementById(modalContent);
    if (openBtn && modalContainer) {
        openBtn.addEventListener('click', () => {
            modalContainer.classList.add('show-modal');
        });
    }
}
showModal('open-modal', 'modal-container')
const closeBtn = document.querySelectorAll('.close-modal');
function closeModal() {
    const modalContainer = document.getElementById('modal-container');
    modalContainer.classList.remove('show-modal');
}
closeBtn.forEach(el => el.addEventListener('click', closeModal));
// close modal with keyboard esc
document.addEventListener('keydown', (e) => {
    let keyCode = e.code;
    const modalContainer = document.getElementById('modal-container');
    if (keyCode == 'Escape') {
        modalContainer.classList.remove('show-modal')
    }
})