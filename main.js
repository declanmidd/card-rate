const container = document.querySelector(".card-container");
const cardContent = document.querySelector(".card-content");
const btnContainer = document.querySelector(".button-container");
const button = document.querySelectorAll(".button");
const submitButton = document.querySelector(".button-submit");

let selected = "";
let buttonLight = "var(--button-light)";
let buttonOrange = "var(--orange)";

container.addEventListener("submit", (e) => {
  e.preventDefault();
  // showMessage();
});

btnContainer.addEventListener("mouseover", () => {
  button.forEach((button) => {
    button.addEventListener("click", function buttonClick(e) {
      resetColor();
      // console.log("clicked", button);

      selected = e.target.textContent;
      button.style.backgroundColor = buttonOrange;
    });
  });
});

function submitResult() {
  submitButton.addEventListener("click", () => {
    if (selected === "" || selected === null) {
      errorMessage();
    } else {
      showMessage();
    }
  });
}
submitResult();

const resetColor = () => {
  button.forEach((button) => {
    button.style.backgroundColor = buttonLight;
  });
};

const errorMessage = () => {
  const displayError = document.createElement("p");
  displayError.classList.add("show-error");
  displayError.textContent = "please select a rate";
  document.body.appendChild(displayError);
  setInterval(() => {
    document.body.removeChild(displayError);
  }, 2000);
};

const showMessage = () => {
  cardContent.style.display = "none";
  container.innerHTML = `
  <article class="message-card">
  <span class="icon-phone">
    <img src="./images/illustration-thank-you.svg" />
  </span>
  <span class="selected">
    <p>You selected ${selected} out of 5</p>
  </span>
  <h1>Thank you!</h1>
  <p>
    We appreciate you taking the time to give a rating. If you ever need
    more support, don't hesitate to get in touch!
  </p>
  </article>`;
};
