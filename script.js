const btnLogin = document.querySelector(".btn-login");
const btnClose = document.querySelector(".btn-close");
const form = document.querySelector(".form");

btnLogin.addEventListener("click", () => {
  form.classList.add("open");
});

btnClose.addEventListener("click", () => {
  form.classList.remove("open");
})