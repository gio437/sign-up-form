const button = document.querySelector(".account");
button.addEventListener("click", check);

function check() {
    let check1 = document.querySelector(".pass");
    let check2 = document.querySelector(".confirm-pass");

    if (check1.value == check2.value) {
      document.getElementById('message').style.color = 'green';
      document.getElementById('message').innerHTML = 'matching';
      check1.style.borderColor = 'green';
      check2.style.borderColor = 'green';
      check1.style.borderStyle = 'solid';
      check2.style.borderStyle = 'solid';
    } else {
      document.getElementById('message').style.color = 'red';
      document.getElementById('message').innerHTML = 'not matching';
      check1.style.borderColor = 'red';
      check2.style.borderColor = 'red';
      check1.style.borderStyle = 'solid';
      check2.style.borderStyle = 'solid';
    }
  }
