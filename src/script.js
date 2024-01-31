function generateRecipe(event) {
  event.preventDefault();

  let recipeElement = document.querySelector("#recipe");

  new Typewriter("#recipe", {
    strings: " recipe here ",
    autoStart: true,
    delay: 10,
    cursor: "",
  });
}

let recipeFormElement = document.querySelector("#recipe-generator-form");
recipeFormElement.addEventListener("submit", generateRecipe);
