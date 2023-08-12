// has been modified
let about = document.querySelector(".about");
let btns = document.querySelectorAll(".tab-btn");
let articles = document.querySelectorAll(".content");

about.addEventListener("click", (e) => {
  // has been modified
  let cla = e.target.dataset.cla;
  console.log(cla);
  if (cla) {
    // Remove 'active' class from other buttons
    btns.forEach((btn) => {
      btn.classList.remove("active");

    });
    // Add 'active' class to clicked button
    e.target.classList.add("active");


    // Hide other articles
    articles.forEach((article) => {
      article.classList.remove("active");
    });

    // Find the element class
    // has been modified
    let element = document.querySelector(cla);
      element.classList.add("active");
  }
});
