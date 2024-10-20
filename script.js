// Smooth Scroll Function
function smoothScroll(target) {
  const element = document.querySelector(target);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
}

// Menu Generator Function
function getMenu(ingredient) {
  let menu;
  switch (ingredient) {
      case 'tomato':
          menu = 'Tomato Salad';
          break;
      case 'egg':
          menu = 'Omelette';
          break;
      case 'lettuce':
          menu = 'Green Salad';
          break;
      case 'cucumber':
          menu = 'Cucumber Salad';
          break;
      default:
          menu = 'Unknown';
          break;
  }
  return menu;
}

function getNutritionInfo(ingredient) {
  let nutritionInfo;
  switch (ingredient) {
      case 'tomato':
          nutritionInfo = 'Calories: 50, Protein: 2g, Carbs: 10g, Fat: 0g';
          break;
      case 'egg':
          nutritionInfo = 'Calories: 200, Protein: 12g, Carbs: 1g, Fat: 14g';
          break;
      case 'lettuce':
          nutritionInfo = 'Calories: 5, Protein: 0.5g, Carbs: 1g, Fat: 0g';
          break;
      case 'cucumber':
          nutritionInfo = 'Calories: 16, Protein: 0.7g, Carbs: 4g, Fat: 0g';
          break;
      default:
          nutritionInfo = 'Unknown';
          break;
  }
  return nutritionInfo;
}

function getRecipe(ingredient) {
  let recipe;
  switch (ingredient) {
      case 'tomato':
          recipe = 'Mix diced tomatoes with cucumbers and onions. Season with olive oil, salt, and pepper.';
          break;
      case 'egg':
          recipe = 'Whisk eggs and cook in a pan until fluffy. Add salt and pepper to taste.';
          break;
      case 'lettuce':
          recipe = 'Combine lettuce with your favorite dressing and toppings.';
          break;
      case 'cucumber':
          recipe = 'Slice cucumber and toss with vinegar, salt, and pepper.';
          break;
      default:
          recipe = 'No recipe available.';
          break;
  }
  return recipe;
}

function showModal() {
  const email = document.getElementById('email-input').value;
  if (email) {
    const modal = document.getElementById("subscribe-modal");
    const span = document.getElementsByClassName("close")[0];
    
    modal.style.display = "block";
    
    span.onclick = function() {
      modal.style.display = "none";
    }
    
    window.onclick = function(event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    }
  } else {
    alert('Please enter your email address');
  }
}


// Event Listener for Menu Generation
document.getElementById('generate-menu').addEventListener('click', function () {
  const selectedIngredient = document.getElementById('ingredient-select').value;
  const menu = getMenu(selectedIngredient);
  const nutrition = getNutritionInfo(selectedIngredient);
  const recipe = getRecipe(selectedIngredient);

  document.getElementById('menu-result').querySelector('p').innerText = menu;
  document.getElementById('nutrition-result').querySelector('p').innerText = nutrition;
  document.getElementById('recipe-display').querySelector('p').innerText = recipe;
});

// Event Listeners for Smooth Scrolling
document.querySelector('nav ul li:nth-child(1) a').addEventListener('click', function(event) {
  event.preventDefault();
  smoothScroll('#about');
});

document.querySelector('nav ul li:nth-child(2) a').addEventListener('click', function(event) {
  event.preventDefault();
  smoothScroll('#latest-articles');
});

document.querySelector('nav ul li:nth-child(3) a').addEventListener('click', function(event) {
  event.preventDefault();
  smoothScroll('#featured-and-generator'); // Adjust this selector to your actual section ID
});

document.querySelector('nav ul li:nth-child(4) a').addEventListener('click', function(event) {
  event.preventDefault();
  smoothScroll('#contact');
});

window.addEventListener("scroll", function(){
  var header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 0);
})
