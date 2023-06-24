window.addEventListener('DOMContentLoaded', function(event) {
    let prodId;
    const btnAddToCart = $('.btn-add-to-card');
    const formSubmitProduct = document.forms['form-submit-product'];
    btnAddToCart.on('click', function(event) {
        event.preventDefault();
        prodId = $(this).data('id');
        formSubmitProduct.action = `/products/add-to-card/${prodId}`;
        formSubmitProduct.submit();
    });
});