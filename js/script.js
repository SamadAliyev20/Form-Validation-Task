const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

form.addEventListener('submit', e => {
	e.preventDefault();
	
	checkInputs();

});

function checkInputs() {

	const usernameValue = username.value.trim();
	const emailValue = email.value.trim();
	const passwordValue = password.value.trim();
	const password2Value = password2.value.trim();
	
	if(usernameValue === '') {
		setErrorFor(username, 'İstifadəçi adı boş ola bilməz!');
	}
  else if(usernameValue.length < 6)
  {
    setErrorFor(username, 'İstifadəçi adı min 6 simvol olmalıdır!');
  }
   else {
		setSuccessFor(username);
	}
	
	if(emailValue === '') {
		setErrorFor(email, 'Email boş ola bilməz!');
	} else if (!isEmail(emailValue)) {
		setErrorFor(email, 'Düzgün email daxil Edin!');
	} else {
		setSuccessFor(email);
	}
	
	if(passwordValue === '') {
		setErrorFor(password, 'Şifrə boş ola bilməz!');
	} 
  else if(passwordValue.length < 8)
  {
    setErrorFor(password, 'Şifrə min 8 simvol olmalıdır!');
  }
  else if(passwordValue === usernameValue) {
		setErrorFor(password, 'İstifadəçi Adı ilə Şifrə Eyni Ola Bilməz !');
	}
  else {
		setSuccessFor(password);
	}
	
	if(password2Value === '') {
		setErrorFor(password2, 'Şifrə təkrarı boş ola bilməz!');
	}
  
   else if(passwordValue !== password2Value) {
		setErrorFor(password2, 'Birinci daxil etdiyiniz şifrə ilə uyğun deyil!');
	}
  else if(password2Value === usernameValue) {
		setErrorFor(password2, 'İstifadəçi Adı ilə Şifrə Eyni Ola Bilməz !');
	}
   else{
		setSuccessFor(password2);

    setTimeout(() => {
      alert('Qeydiyyat Tamamlandı')
      location.reload();
    }, 1000);

	}
  
}

function setErrorFor(input, message) {
	const formControl = input.parentElement;
	const small = formControl.querySelector('small');
	formControl.className = 'form-control error';
	small.innerText = message;
}

function setSuccessFor(input) {
	const formControl = input.parentElement;
	formControl.className = 'form-control success';
}
	
function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}
document.addEventListener('contextmenu', event => event.preventDefault());
