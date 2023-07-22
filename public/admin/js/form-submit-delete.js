window.addEventListener('DOMContentLoaded', function(event) {
    function Delete(selectorFormSubmit, selectorBtnSubmit, methodDelete) {
        var formSubmit = document.forms[selectorFormSubmit];
        var btnSubmit = $(selectorBtnSubmit);
        btnSubmit.on('click', function(event) {
            event.preventDefault();
            var idUser = event.target.dataset['id'];
            formSubmit.action = `/admin/users/${idUser}/delete?_method=${methodDelete}`;
            formSubmit.submit();
        });
    }
    Delete('form-users-user-submit','.btn-user-delete','DELETE');
});
