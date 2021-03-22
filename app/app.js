//variables
const form = document.querySelector("#form");
const input = document.querySelector("#email");
const small = document.querySelector(".js-show");
const btn = document.querySelector("#submit-btn")

// event listener for submit, preventing default behaviour
form.addEventListener('submit', (e) => {

      e.preventDefault();

      email();
});

//check if email is valid
function isEmail(email) {
      let re = /\S+@\S+\.\S+/;
      return re.test(email);
}

function submit() {
      const change = document.querySelector(".submit-change");
      let mail = document.querySelector("#email").value;
      change.innerHTML = mail + " signed up for weekly newsletter. We will send You notification on email!";
      btn.style.display = "none";
      input.stlye.display = "none;"
}

function error() {
      input.classList.add("error")
      small.classList.add("error")
}

function email() {
      let mail = document.querySelector("#email").value;
      if (!mail) {
            error()
      } else {
            if (!isEmail(mail)) {
                  error()
                  small.innerHTML = "Oops looks like " + mail + " is not a valid email"
            }
            else {
                  input.classList.remove("error")
                  small.classList.remove("error")
                  submit()
            }
      }
}
