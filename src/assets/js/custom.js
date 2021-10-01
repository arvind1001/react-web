
// mobile-navbar

function toggleSideNav() {
  if(document.getElementById("mySidenav").style.width == "250px"){
    document.getElementById("mySidenav").style.width = "0px";
  }else{
    document.getElementById("mySidenav").style.width = "250px";
  }
	  
}

function closeSideNav() {
	  document.getElementById("mySidenav").style.width = "0";
}


// password eyes icons toggle

const togglePassword = document.querySelector('#togglePassword');
const password = document.querySelector('#inputPassword');
const ctogglePassword = document.querySelector('#ctogglePassword');
const cpassword = document.querySelector('#conInputPassword');
togglePassword.addEventListener('click', function (e) {
    // toggle the type attribute
    const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
   password.setAttribute('type', type);
    // toggle the eye / eye slash icon
    this.classList.toggle('fa-eye-slash');
});
ctogglePassword.addEventListener('click', function (e) {
    // toggle the type attribute
    const type = cpassword.getAttribute('type') === 'password' ? 'text' : 'password';
   cpassword.setAttribute('type', type);
    // toggle the eye / eye slash icon
    this.classList.toggle('fa-eye-slash');
});