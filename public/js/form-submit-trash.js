window.addEventListener('DOMContentLoaded', function (event) {
    formSubmitTrash(
        '#form-users-trash-submit',
        '.btn-user-delete',
        '.btn-user-restore',
        '#modelDelete',
        '.btn-modal-user-destroy'
        );
    function formSubmitTrash(formSelector, btnDeleteSelector, btnRestoreSelector, modelSelector, btnModelDestroySelector ) {
        var formSubmit = document.querySelector(formSelector);
        var btnUserDelete = $(btnDeleteSelector);
        var btnUserRestore = $(btnRestoreSelector);
        var modalDelete = document.querySelector(modelSelector);
        var btnModalDestroy = $(btnModelDestroySelector);
        var idUser;
        btnUserRestore.on('click', event => {
            event.preventDefault();
            idUser = event.target.dataset['id'];
            formSubmit.action = `/admin/users/${idUser}/restored?_method=PUT`;
            formSubmit.submit();
        });
        modalDelete.addEventListener('show.bs.modal', event => {
            const button = event.relatedTarget
            // Extract info from data-bs-* attributes
            idUser = button.getAttribute('data-bs-id')
            btnModalDestroy.on('click', event => {
                event.preventDefault();
                formSubmit.action = `/admin/users/${idUser}/destroy?_method=DELETE`;
                formSubmit.submit();
            });
        });
    }
});