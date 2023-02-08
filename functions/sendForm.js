function handler() {
    let btnSubmit = document.getElementsByClassName('submit')
        
    let email = document.getElementById('email').value  
    let mes = document.getElementById('mes').value  
    let link = document.getElementById('link').value  

    var xhr = new XMLHttpRequest();

    xhr.open('POST', process.env.API_URL);
    xhr.send(JSON.stringify({
        useremail: email,
        message: mes, 
        imagelink: link
    }));

    btnSubmit[0].value = 'Отправка...'

    xhr.onload = function() {
        btnSubmit[0].value = 'Отправить открытку!'

        let toast = null

        if (xhr?.status != 200) {
            toast = document.getElementById('toast_not_ok');
            toast.classList.remove('toast-close-animation')
            toast.classList.add('toast-open-animation');
        } else {
            toast = document.getElementById('toast_ok');
            toast.classList.remove('toast-close-animation')
            toast.classList.add('toast-open-animation');
        }

        setTimeout(() => {
            toast.classList.remove('toast-open-animation');
            toast.classList.add('toast-close-animation')
        }, 2500)
    }
}

module.exports = { handler }