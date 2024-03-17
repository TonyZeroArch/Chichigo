  // JavaScript code for form validation

// Wait for the DOM to be ready
document.addEventListener('DOMContentLoaded', function () {
  // Retrieve the input field value
  var inputField = document.getElementById('inputField');

  // Add an event listener to the form for the submit event
  document.getElementById('myForm').addEventListener('submit', function (event) {
     // Regular expression pattern for alphanumeric input
    var alphanumericRegex = /^[a-zA-Z0-9]+$/;
    var inputValue = inputField.value;

    // Check if the input value matches the pattern
    if (!alphanumericRegex.test(inputValue)) {
      // Display an error message
      alert('Error: Please enter only alphanumeric characters.');
      // Prevent the form from submitting
      event.preventDefault();
    } else {
       // Valid input: display confirmation and submit the form
      alert('Success: Form submitted successfully!');
      // Form will be submitted
    }
  });
});
