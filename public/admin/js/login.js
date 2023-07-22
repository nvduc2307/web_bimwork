window.addEventListener('DOMContentLoaded', function(event) {
    Validator({
        form: '#login_form',
        btnSubmit: '.login_btn',
        errorParam: '.login_error',
        rules: [
            Validator.isRequire('#email', 'Please fill in the field!'),
            Validator.isRequire('#password', 'Please fill in the field!'),
            Validator.isEmail('#email', 'Please enter your email address!'),
            Validator.minLength('#password', 6, 'Passwords must be at least 6 characters!'),
        ]
    });
    $('.login_input').on('blur',(event) => {
        var inputs = [...$('.login_input')];
        var btnRegister = this.document.querySelector('.login_btn');
        if(!event.target.value){
            btnRegister.classList.add('disabled');
        }
        else{
            var isInvalid = inputs.some(input=> input.parentElement.classList.contains('invalid'));
            var isEmpty = inputs.some(input=> input.value === '');
            if(isInvalid || isEmpty) {
                btnRegister.classList.add('disabled');
            }else{
                btnRegister.classList.remove('disabled');
            }
        }
    });
});
