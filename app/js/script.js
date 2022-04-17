const modal = document.querySelector('.popup');

function modalOpen() {
    modal.classList.add('modal-active');

    window.onclick = function(event) {
        if (event.target == modal) {
          modal.classList.remove('modal-active');
        }
      }
}