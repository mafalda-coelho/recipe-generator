function displayRecipe(response) {
  new Typewriter("#recipe", {
    strings: response.data.answer,
    autoStart: true,
    delay: 10,
    cursor: "",
  });
}

function generateRecipe(event) {
  event.preventDefault();

  let instructionsInput = document.querySelector("#user-instructions");
  let apiKey = "bfebe20e536f474847ab0co02fa8tf40";
  let context =
    "You are a culinary expert and love creating simple yet delicious recipes. Your mission is to generate a recipe in basic HTML. Make sure to follow the user instructions. Sign the recipe with SheCodes AI";
  let prompt = `User instructions are: Generate a delicious and simple recipe with ${instructionsInput.value}`;
  let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let recipeElement = document.querySelector("#recipe");
  recipeElement.classList.remove("hidden");
  recipeElement.innerHTML = `<div class="generating"> ⏳Generating the best recipe for you with ${instructionsInput.value}</div>`;

  axios.get(apiURL).then(displayRecipe);
}

let recipeFormElement = document.querySelector("#recipe-generator-form");
recipeFormElement.addEventListener("submit", generateRecipe);
