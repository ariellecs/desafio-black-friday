const form = document.getElementById('form');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    let email = document.getElementById('email').value;
    if(email != ""){
        let data = email;
        let convertData = JSON.stringify(data);
        localStorage.setItem('lead', convertData);
        alert('Email cadastrado para BombFriday!'); 
    }else{
        alert('Você não digitou um email, tente novamente.');
    }
});