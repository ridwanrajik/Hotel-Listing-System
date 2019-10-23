const URL = 'http://localhost:3000';

document.getElementById('signUp').addEventListener('submit', signUp);

async function signUp(event){
    event.preventDefault(); 
    let username = document.getElementById('username').value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    console.log(username + 'is my name');

    const response = await fetch (`${URL}/auth/signup`, {
        method: 'POST',
        headers : new Headers(),
        body:JSON.stringify({username: username, email: email, password: password})
    });
    const user = await response.json();
    console.log(user);
}
