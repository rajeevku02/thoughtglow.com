const apiBaseUrl = 'https://api.lekh.app';

function handleRef() {
  var ref = new URL(window.location).searchParams.get("ref");
    if (ref) {
      var xhttp = new XMLHttpRequest();
      var url = apiBaseUrl + "/hello?ref=" + ref;
      xhttp.open("GET", url);
      xhttp.withCredentials = true;
      xhttp.send();
    }
}

document.addEventListener("DOMContentLoaded", () => {
  handleRef();

  const openNav = document.querySelector("#open-nav");
  const closeNav = document.querySelector("#close-nav");
  const closeNavBtn = document.querySelector("#close-nav-btn");
  const titleLinks = document.querySelectorAll(".title-link");
  const links = document.querySelectorAll(".links");
  const navOpen = document.querySelectorAll(".nav-open");
  const navDiv = document.querySelectorAll(".nav-div");
  const nav = document.querySelector("nav");

  closeNavBtn.addEventListener("click", () => {
    closeNav.classList.add("hidden");
  });

  openNav.addEventListener("click", () => {
    closeNav.classList.remove("hidden");
  });

  titleLinks.forEach((title, i) =>
    title.addEventListener("click", () => {
      links[i].classList.toggle("hidden");
    })
  );

  navOpen.forEach((n, i) =>
    n.addEventListener("mouseover", () => {
      navDiv.forEach((n, i) => {
        n.classList.add("hidden");
      });

      navDiv[i].classList.remove("hidden");
    })
  );

  navDiv.forEach((n, i) =>
    n.addEventListener("mouseleave", () => {
      n.classList.add("hidden");
    })
  );

  nav.addEventListener("mouseleave", () => {
    navDiv.forEach(n => n.classList.add("hidden"));
  });
});
