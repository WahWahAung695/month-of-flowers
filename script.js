
document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();
    var modal = new bootstrap.Modal(document.getElementById('thankYouModal'));
    modal.show();
});
