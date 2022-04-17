const modal = document.querySelector('.popup');


function modalOpen() {
  if(modal.classList.contains('fade-out')) {
    modal.classList.remove('fade-out');
  } else {
    modal.classList.add('modal-active');
  }
    window.onclick = function(event) {
        if (event.target == modal) {
          modal.classList.add('fade-out');
        }
      }
}