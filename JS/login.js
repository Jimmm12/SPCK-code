let submitLogin = document.getElementById("submit-login");
let alerts = document.getElementById("alert");
let nameLogin = document.getElementById("form1Example13");
let passLogin = document.getElementById("form1Example23");

submitLogin.addEventListener("click", (event) => {
  event.preventDefault();
  userLogin();
});


let user = JSON.parse(localStorage.getItem("users"));
function userLogin() {
    let flag = false;
  for (let e of user) {
    if (nameLogin.value == e.phone || nameLogin.value == e.email) {
      if (passLogin.value == e.password) {
        flag=true;
        break;
      } 
    }
  }
  if(flag){
    window.location.href="indexafterlog.html";
  }else {
    alerts.innerText = "Login failed";
    alerts.style.color = "red";
  }
}




