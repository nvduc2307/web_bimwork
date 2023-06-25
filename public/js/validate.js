function Validator(options) {
    var formValidate = document.querySelector(options.form);
    var selectorRules = {};
    function Validate(inputElement, rule){
        var parentElement = inputElement.parentElement;
        var errorElement = parentElement.querySelector(options.errorParam);
        var errorMessage;
        var rules = selectorRules[rule.selector];
        for (let i = 0; i < rules.length; i++) {
            errorMessage = rules[i](inputElement.value);
            if (errorMessage) {
                break;
            };   
        }
        if (errorMessage) {
            errorElement.textContent = errorMessage;
            parentElement.classList.add('invalid');
        } else{
            errorElement.textContent = '';
            parentElement.classList.remove('invalid');
        }
    }
    options.rules.forEach(rule => {
        if (!Array.isArray(selectorRules[rule.selector])) {
            selectorRules[rule.selector] = [rule.test];
        }
        else{
            selectorRules[rule.selector].push(rule.test);
        }
        var inputElement = formValidate.querySelector(rule.selector);
        inputElement.onblur = function(){
            Validate(inputElement, rule);
        }
        inputElement.oninput = function(){
            var parentElement = inputElement.parentElement;
            var errorElement = parentElement.querySelector(options.errorParam);
            errorElement.textContent = '';
            parentElement.classList.remove('invalid');
        }
    });
}
Validator.isRequire = function(selector, message) {
    return {
        selector: selector,
        test: function(value) {
            return value.trim() !== '' ? undefined : message || 'wrong!';
        }
    };
}
Validator.isEmail = function(selector, message){
    return {
        selector: selector,
        test: function(value){
            var regex =/^([A-Za-z0-9_\-\.])+\@([gmail|GMAIL])+\.(com)$/;
            return regex.test(value) ? undefined : message || 'wrong!';
        }
    }
}
Validator.minLength = function(selector, minLength, message){
    return {
        selector: selector,
        test: function(value){
           return value.length >= minLength ? undefined : message || 'wrong!';
        }
    }
}
Validator.isComfirm = function(selectorPasswordComfirm, selectorForm, selectorPassword, message){
    return {
        selector: selectorPasswordComfirm,
        test: function(value){
            var formElement = document.querySelector(selectorForm);
            var passwordValue = formElement.querySelector(selectorPassword).value;
            return value === passwordValue ? undefined : message || 'wrong!';
        }
    }
}
