const emailFooter = document.querySelector('.footer__input');
const btnFooter = document.querySelector('.footer__btn');
const emailPack = document.querySelector('.packages__content-input[type=email]');
const btnPack = document.querySelector('.packages__content-submit');
const textInputs = document.querySelectorAll('.packages__content-input[type=text]');
const destinations = document.querySelector('.package__content-select');

const errorEmailPack = document.querySelector('.error__email-pack');
const errorEmailFooter = document.querySelector('.error__email-footer');
const errorTexts = document.querySelectorAll('.error__text');
const errorSelect = document.querySelector('.error__select');

const validateEmail= (email) => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

const checkEmail = (btn, container, error) => {
    btn.onclick = (e) => {
        e.preventDefault();
        if(container.value === '' || validateEmail(container.value) === false){
            container.classList.add('error');
            error.style.display = 'block';
            container.placeholder = 'Ex: viettrung@gmail.com';
        }
        else {
            container.classList.remove('error');
            error.style.display = 'none';
            container.placeholder = 'Email';
        }
    }
}

const checkPack= (btn) => {
    btn.onclick = (e) => {
        e.preventDefault();

        /* Name */
        if(textInputs[0].value === ''){
            textInputs[0].classList.add('error');
            errorTexts[0].style.display = 'block';
            textInputs[0].placeholder = 'Ex: Viet Trung';
        }
        else {
            textInputs[0].classList.remove('error');
            errorTexts[0].style.display = 'none';
            textInputs[0].placeholder = 'Name';
        }

        /* Email */
        if(emailPack.value === '' || validateEmail(emailPack.value) === false){
            emailPack.classList.add('error');
            errorEmailPack.style.display = 'block';
            emailPack.placeholder = 'Ex: viettrung@gmail.com';
        }
        else {
            emailPack.classList.remove('error');
            error.style.display = 'none';
            emailPack.placeholder = 'Email';
        }

        /* Guests */
        if(textInputs[1].value === ''){
            textInputs[1].classList.add('error');
            errorTexts[1].style.display = 'block';
            textInputs[1].placeholder = 'Ex: Viet Trung';
        }
        else {
            textInputs[1].classList.remove('error');
            errorTexts[1].style.display = 'none';
            textInputs[1].placeholder = 'Guests';
        }

        /* Select */
        if(destinations.value === 'Select Destination'){
            destinations.classList.add('error');
            errorSelect.style.display = 'block';
        }
        else {
            destinations.classList.remove('error');
            errorSelect.style.display = 'none';
        }
    }
}

checkEmail(btnFooter, emailFooter, errorEmailFooter);
checkPack(btnPack);
