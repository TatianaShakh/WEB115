document.addEventListener('DOMContentLoaded', function() {
  // Retrieve the input field element
  var inputField = document.getElementById('inputField');
  
  // Reference to the form
  var form = document.getElementById('myForm');
  
  // Event listener for the form submission
  form.addEventListener('submit', function(event) {
    // Prevent form from submitting
    event.preventDefault();
    
    // Retrieve the input field value
    var inputValue = inputField.value;
    
    // Regular expression pattern for alphanumeric input
    var pattern = /^[a-zA-Z0-9]+$/;
    
    // Check if the input value matches the pattern
    if (pattern.test(inputValue)) {
      // Valid input: display confirmation and submit the form
      displayMessage('Confirmation: The input is valid.', true);
    } else {
      // Invalid input: display error message
      displayMessage('Error: The input is not alphanumeric.', false);
    }
  });
  
  // Function to display messages
  function displayMessage(message, isValid) {
    var messageElement = document.createElement('div');
    messageElement.style.marginTop = '10px';
    if (isValid) {
      messageElement.style.color = 'green';
    } else {
      messageElement.style.color = 'red';
    }
    messageElement.innerText = message;
    form.appendChild(messageElement);
    
    // Remove the message after 3 seconds
    setTimeout(function() { form.removeChild(messageElement); }, 3000);
  }
});

