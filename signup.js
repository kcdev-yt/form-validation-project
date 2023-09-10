function formValidation(){
    let fullNameInput = document.getElementById('fullName').value
    let email_input = document.getElementById('emailInput').value
    let password_input = document.getElementById('passwordInput').value

    if(fullNameInput === '') {
        document.getElementById('invalidName').innerHTML = '**Required'
        return false
    }

    if(/\d/.test(fullNameInput)) {
        document.getElementById('invalidName').innerHTML = '**Invald Name'
        return false
    }

    if(email_input === ''){
        document.getElementById('invalidEmail').innerHTML = '**Required'
        return false
    }

    if(email_input.indexOf('.com') === -1){
        document.getElementById('invalidEmail').innerHTML = '**Invalid email'
        return false
    }

    if(/[^a-zA-Z0-9]/.test(password_input)){
        document.getElementById('invalidPassword').innerHTML = '**No Special Characters'
        return false
    }

}

