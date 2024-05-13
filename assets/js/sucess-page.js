const campoInput = document.querySelectorAll('.input');
const span = document.querySelectorAll('.span-required');
const imgSucess = document.querySelector('.imgIcon');
const button = document.getElementById('subscribe');
const emailRegex = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;

button.addEventListener('click', (event) => {
    event.preventDefault();
    if(!emailValidate(campoInput.value)) {
        changePage();
    }
});
function setError(index){
    campoInput[index].style.border = '2px solid #e63636';
    campoInput[index].style.backgroundColor = 'hsl(5,100%,95%)';
    span[index].style.display = 'block';
}
function removeError(index){
    campoInput[index].style.border = '';
    campoInput[index].style.backgroundColor = 'white';
    span[index].style.display = 'none';
}
function emailValidate(){
    if(emailRegex.test(campoInput[0].value)){
        removeError(0);
    }
    else
    {
        setError(0);
    }
}
function changePage() {
    const signUp = document.querySelector(".sign-up");
    signUp.style.transform = 'translateX(-200%)';
    const sucess = document.querySelector(".sucess");
    sucess.style.transform = 'translateX(0%)';
    sucess.style.display = 'block';
    sucess.style.position = 'absolute';
    imgSucess.style.position = 'static';
    imgSucess.style.objectPosition = '0';
}