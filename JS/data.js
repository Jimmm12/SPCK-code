const users = [];

let name2 = document.getElementById("form3Example1cg");
let submit = document.getElementById("submit-btn");
let check = document.getElementById("checkError");

if (submit) {
  submit.addEventListener("click", (event) => {
    event.preventDefault();
    let name = name2.value;
    let phone = document.getElementById("form3Example2cg").value;
    let email = document.getElementById("form3Example3cg").value;
    let password = document.getElementById("form3Example4cg").value;
    let passwordRe = document.getElementById("form3Example4cdg").value;
    if (checkUserEmpty(name, phone, email, password)) {
      if (password === passwordRe) {
        let user = {
          name: name,
          phone: phone,
          email: email,
          password: password,
        };
        users.push(user);
        localStorage.setItem("users", JSON.stringify(users));
        console.log(users[users.length - 1]);
        alert("Create account sucessfully!");
        window.location.href = "login.html";
      } else {
        check.innerText = "Password not match";
      }
    } else {
      check.innerText = "Please fill all fields";
    }
  });
}

//Check user empty
function checkUserEmpty(name, phone, email, password) {
  if (name == "" || phone == "" || email == "" || password == "") {
    return false;
  }
  return true;
}

//Check local storage
if (localStorage.getItem("users") === null) {
  localStorage.setItem("users", JSON.stringify(users));
}
