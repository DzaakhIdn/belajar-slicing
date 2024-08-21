const sideBar = document.querySelector("aside");

      function openNavbar() {
        sideBar.classList.add("translate-x-0");
        sideBar.classList.remove("translate-x-full");
      }

      function closeNavbar() {
        sideBar.classList.remove("translate-x-0");
        sideBar.classList.add("translate-x-full");
      }

// const login = document.querySelector(".login");

// function openLogin() {
//     login.classList.add("-translate-y-0");
//     login.classList.remove("-translate-y-full");
// }
// function closeLogin() {
//     login.classList.remove("-translate-y-0");
//     login.classList.add("-translate-y-full");
// }
const login = document.querySelector(".login");

function toggleLogin(action) {
    const newClass = "bg-opacity-50";

    if (action === 'open') {
        login.classList.add("-translate-y-0");
        login.classList.remove("-translate-y-full");
        login.classList.add(newClass);
    } else if (action === 'close') {
        login.classList.remove("-translate-y-0");
        login.classList.add("-translate-y-full");
        login.classList.remove(newClass);
    }
}
const register = document.querySelector(".register");
const signIn = document.querySelector(".sign-in");

function toggleRegister(action) {
    const isOpen = action === 'open';
    register.classList.toggle("translate-x-0", isOpen);
    register.classList.toggle("translate-x-full", !isOpen);
    register.classList.toggle("opacity-0", !isOpen);
    signIn.classList.toggle("hidden", isOpen);
}

