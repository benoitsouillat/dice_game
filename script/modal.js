let modalButton = document.getElementById('rules');
let modalItem = document.getElementById('rules-modal');

modalButton.addEventListener('click', (e) => {
    e.preventDefault();
    console.log(e.target);
    $('rules-modal').modal('show');
});