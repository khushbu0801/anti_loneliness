console.log("This is your Form");

let name = document.getElementById('name');
let email = document.getElementById('email');
let phone = document.getElementById('phone');

let validName = false;
let validEmail = false;
let validPhone = false;

//At first both are hidden as it was creating space above the form
$('#success').hide();
$('#fail').hide();

name.addEventListener('blur', () => {
    //console.log("Name is blurred");
    //validate Name
    let regex = /^([A-Z ])([a-zA-Z ]){3,20}$/;
    let str = name.value;
    console.log(regex, str);
    if (regex.test(str)) {
        //console.log('Matched');
        name.classList.remove('is-invalid');
        validName = true;
    }
    else {
        //console.log('Not Matched');
        name.classList.add('is-invalid');
        validName = false;
    }
})

email.addEventListener('blur', () => {
    //console.log("Email is blurred");
    //Validate Email
    let regex = /^([a-zA-Z0-9\.\-\_]+)@([a-zA-Z0-9\.\-\_]+)\.([a-zA-Z]){2,5}$/;
    let str = email.value;
    console.log(regex, str);
    if (regex.test(str)) {
        //console.log('Matched');
        email.classList.remove('is-invalid');
        validEmail = true;
    }
    else {
        //console.log('Not Matched');
        email.classList.add('is-invalid');
        validEmail = false;
    }
})

phone.addEventListener('blur', () => {
    //console.log("Phone is blurred");
    //Validate Phone
    let regex = /^[0-9]{10}$/;
    let str = phone.value;
    console.log(regex, str);
    if (regex.test(str)) {
        console.log('Matched');
        phone.classList.remove('is-invalid');
        validPhone = true;
    }
    else {
        //console.log('Not Matched');
        phone.classList.add('is-invalid');
        validPhone = false;
    }
})

let submit = document.getElementById('submit');
submit.addEventListener('click', (e) => {
    e.preventDefault(); //to avoid reloading of page after suubmitting
    //form submit
    //console.log("Submit button is clicked");
    if (validName && validEmail && validPhone) {
        let success = document.getElementById('success');
        success.classList.add('show');
        //fail.classList.remove('show'); //was creating gap above the form so now using jQuery to avoid that
        $('#fail').hide();
        $('#success').show();
    }
    else {
        let fail = document.getElementById('fail');
        fail.classList.add('show');
        ///success.classList.remove('show'); //was creating gap above the form so now using jQuery to avoid that
        $('#success').hide();
        $('#fail').show();
    }

})