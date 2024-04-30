const mealPlanForm = document.getElementById("meal-plan-form");
const generateBtn = document.getElementById("gen-btn");
const clearBtn = document.getElementById("clear-btn");
const mealPlanOutput = document.getElementById("meal-plan-output");

function myCreatePlan() {

      // Get user input from form fields
  const name = document.getElementById("name").value;
  const goal = document.getElementById("goal").value;
  const email = document.getElementById("email").value;
  const breakfast = document.getElementById("breakfast").value;
  const snack1 = document.getElementById("snack1").value;
  const lunch = document.getElementById("lunch").value;
  const snack2 = document.getElementById("snack2").value;
  const dinner = document.getElementById("dinner").value;


  if (!isValidEmail(email)) {
    alert("Please enter a valid email address to generate your meal plan.");
    return; // Exit if email is invalid
  }

      const popPageHead = `
        <!DOCTYPE html>
        <html lang="en">

            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>WEB-115 Final Project</title>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css">
                <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>
                <script src="ProjectJS.js" defer></script>
            </head>
        `;
      const popPageBody = `
            <body>
                <header class="teal lighten-2">
                <table>
                    <tr>
                        <td class ="left-align"><img src="bar.jpg" alt="Picture Bar" class="left-align" height="200"> </td>
                        <td class ="left-align">
                            <h2 class="left-align white-text">Build Your Meal Plan</h2>
                            <p class="center-align">By Sheng Sun From WEB-115-0002</p>
                        </td>
                    </tr>
                </table>
                </header>
                <main>
                    <div class="container">
                        <form id="meal-plan-form">
       `;
    const popPageTable = `
                                    <table id="myTable">
                            <thead>
                                <tr>
                                    <th></th>
                                    <th class="center-align">Monday</th>
                                    <th class="center-align">Tuesday</th>
                                    <th class="center-align">Wednesday</th>
                                    <th class="center-align">Thursday</th>
                                    <th class="center-align">Friday</th>
                                    <th class="center-align">Saturday</th>
                                    <th class="center-align">Sunday</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Breakfast</td>
                                    <td class="center-align">${breakfast}</td>
                                    <td class="center-align">${breakfast}</td>
                                    <td class="center-align">${breakfast}</td>
                                    <td class="center-align">${breakfast}</td>
                                    <td class="center-align">${breakfast}</td>
                                    <td class="center-align">${breakfast}</td>
                                    <td class="center-align">${breakfast}</td>
                                </tr>
                                <tr>
                                  <td>Snack 1</td>
                                  <td class="center-align">${snack1}</td>
                                  <td class="center-align">${snack1}</td>
                                  <td class="center-align">${snack1}</td>
                                  <td class="center-align">${snack1}</td>
                                  <td class="center-align">${snack1}</td>
                                  <td class="center-align">${snack1}</td>
                                  <td class="center-align">${snack1}</td>
                                </tr>
                                <tr>
                                  <td>Lunch</td>
                                  <td class="center-align">${lunch}</td>
                                  <td class="center-align">${lunch}</td>
                                  <td class="center-align">${lunch}</td>
                                  <td class="center-align">${lunch}</td>
                                  <td class="center-align">${lunch}</td>
                                  <td class="center-align">${lunch}</td>
                                  <td class="center-align">${lunch}</td>
                                </tr>
                                <tr>
                                  <td>Snack 2</td>
                                  <td class="center-align">${snack2}</td>
                                  <td class="center-align">${snack2}</td>
                                  <td class="center-align">${snack2}</td>
                                  <td class="center-align">${snack2}</td>
                                  <td class="center-align">${snack2}</td>
                                  <td class="center-align">${snack2}</td>
                                  <td class="center-align">${snack2}</td>
                                </tr>
                                <tr>
                                  <td>Dinner</td>
                                  <td class="center-align">${dinner}</td>
                                  <td class="center-align">${dinner}</td>
                                  <td class="center-align">${dinner}</td>
                                  <td class="center-align">${dinner}</td>
                                  <td class="center-align">${dinner}</td>
                                  <td class="center-align">${dinner}</td>
                                  <td class="center-align">${dinner}</td>
                                                                  
                            </tbody>
                        </table>
       `;
      const popPageEnd = `
                    <div class="row center-align">
                        <button class="btn waves-effect waves-light" id="print-btn" onclick ="
                                                                                    (function() {
                                                                                    window.print();
                                                                                    })();
                                                                                    ">Print</button>
                    </div>
                        </form>
                     </div>
                </main>

            </body>
      </html>
    `;

  const newWindow = window.open('', '_blank');
  newWindow.document.write(popPageHead);
  newWindow.document.write(popPageBody);
  newWindow.document.write(popPageTable);
  newWindow.document.write(popPageEnd);
}

// Simple email validation function (can be improved)
function isValidEmail(email) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}


function myClear() {
  document.getElementById("name").value = "";
  document.getElementById("goal").value = "";
  document.getElementById("email").value = "";
  document.getElementById("breakfast").value = "";
  document.getElementById("snack1").value = "";
  document.getElementById("lunch").value = "";
  document.getElementById("snack2").value = "";
  document.getElementById("dinner").value = "";
}




