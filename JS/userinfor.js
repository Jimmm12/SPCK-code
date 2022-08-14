let names = document.getElementById("form6Example1");
let phone = document.getElementById("form6Example2");
let email = document.getElementById("form6Example3");

let submit = document.getElementById("btn-finish");

let user = JSON.parse(localStorage.getItem("users"));
let i = 0;

function getInfor() {
  for (let e of user) {
    i++;
    if (i == user.length) {
      names.value = e.name;
      phone.value = e.phone;
      email.value = e.email;
    }
  }
}

getInfor();

if (submit) {
  submit.addEventListener("click", (event) => {
    window.location.href = "indexafterlog.html";
  });
}



