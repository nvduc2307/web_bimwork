window.addEventListener('DOMContentLoaded', function(event) {
    const registerProxyCheckbox = document.querySelector('#register_proxy-check');
    const btnRegister = document.querySelector('.register_btn');
    const registerInputs = [...$('.register_input')];

    Validator({
        form: '#form-register',
        errorParam: '.register_error',
        rules: [
            Validator.isRequire('#fullname', 'Please fill in the field!'),
            Validator.isRequire('#email', 'Please fill in the field!'),
            Validator.isRequire('#username', 'Please fill in the field!'),
            Validator.isRequire('#password', 'Please fill in the field!'),
            Validator.isRequire('#confirm-password', 'Please fill in the field!'),
            Validator.isEmail('#email', 'Please enter your email address!'),
            Validator.minLength('#password', 6, 'Passwords must be at least 6 characters!'),
            Validator.isComfirm('#confirm-password','#form-register', '#password', 'Password incorrect!'),
        ]
    });

    $('.register_input').on('input',(event) => {
        var parentElement = event.target.parentElement;
        if(!event.target.value){
            parentElement.classList.add('invalid');
            btnRegister.classList.add('disabled');
        }
        else{
            parentElement.classList.remove('invalid');
            var isCheckedProxy = registerProxyCheckbox.checked;
            if(isCheckedProxy){
                var IsRegisterInputEmpty = registerInputs.some(input=>!input.value);
                if(!IsRegisterInputEmpty){
                    btnRegister.classList.remove('disabled');
                }
            }else{
                btnRegister.classList.add('disabled');
            }
        }
    });
    registerProxyCheckbox.addEventListener('change',function(event) {
        var isCheckedProxy = event.target.checked;
        if(isCheckedProxy){
            var IsRegisterInputEmpty = registerInputs.some(input=>!input.value);
            if(!IsRegisterInputEmpty){
                btnRegister.classList.remove('disabled');
            }
        }else{
            btnRegister.classList.add('disabled');
        }
    });
});