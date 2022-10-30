const button = document.querySelector(".account");
button.addEventListener("click", check);

function check() {
    if (document.querySelector(".pass").value ==
      document.querySelector('.confirm-pass').value) {
      document.getElementById('message').style.color = 'green';
      document.getElementById('message').innerHTML = 'matching';
    } else {
      document.getElementById('message').style.color = 'red';
      document.getElementById('message').innerHTML = 'not matching';
    }
  }
