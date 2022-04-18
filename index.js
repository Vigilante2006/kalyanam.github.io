var x = document.getElementById('login');
var y = document.getElementById('register');
var z = document.getElementById('btn');

function register() {
    x.style.left = '-400px';
    y.style.left = '50px';
    z.style.left = '110px';

}
function login() {
    x.style.left = '50px';
    y.style.left = '450px';
    z.style.left = '0px';
}


// // for nav Transition on mobile

// let hamp = document.getElementsByClassName('hamp');
// let miniNav = document.getElementById('miniNav');

// hamp.addEventListener('click', event => {
//     if (event.target.checked)  {
//         miniNav.style.opacity = "1";
//         alert("checked")
//     }
//     else {
//         miniNav.style.opacity = "0";
//     }
// });