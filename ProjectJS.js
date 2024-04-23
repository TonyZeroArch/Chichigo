const mealPlanForm = document.getElementById("meal-plan-form");
const clearBtn = document.getElementById("clear-btn");
const printBtn = document.getElementById("print-btn");
const mealPlanOutput = document.getElementById("meal-plan-output");

mealPlanForm.addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent default form submission

  // Email validation (basic check)
  const email = document.getElementById("email").value;
  if (!isValidEmail(email)) {
    alert("Please enter a valid email address to generate your meal plan.");
    return; // Exit if email is invalid
  }

  // Get user input from form fields
  const name = document.getElementById("name").value;
  const goal = document.getElementById("goal").value;
  const breakfast = document.getElementById("breakfast").value;
  const lunch = document.getElementById("lunch").value;
  const snack1 = document.getElementById("snack1").value;
  const dinner = document.getElementById("dinner").value;
  const snack2 = document.getElementById("snack2").value;

  // Generate meal plan content (improve this for better formatting)
  let mealPlan = `
    **Personal Information:**
    * Name: ${name}
    * Email: ${email}
    * This Week's Goal: ${goal}

    **Weekly Meal Planner:**
    * Breakfast: ${breakfast}
    * Lunch: ${lunch}
    * Snack 1: ${snack1}
    * Dinner: ${dinner}
    * Snack 2: ${snack2}
  `;

  // Display meal plan in the designated element
  mealPlanOutput.textContent = mealPlan;

  // Enable print button (optional functionality to be implemented later)
  // printBtn.disabled = false; // uncomment and implement print functionality
});

clearBtn.addEventListener("click", function() {
  mealPlanForm.reset(); // Clear all form fields
  mealPlanOutput.textContent = ""; // Clear meal plan output
  printBtn.disabled = true; // Disable print button
});

// Simple email validation function (can be improved)
function isValidEmail(email) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}
