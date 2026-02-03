//Selecting DOM elemnts
const passwordInput = document.getElementById('password');
const strengMessage = document.getElementById('password');

//Adding event listener to monitor input changes
passwordInput.addEventListener('input',() => {
    const val = passwordInput.value;
    let strength = 0;

 // Logik for password  strength evalution
 if (val.length > 8) strength++; //Check for minimum length
 if (/[A-Z]/.test(val)) strength++; //Check for uppercase letters
 if (/[0-9]/.test(val)) strength++; //Check for numerical digits
 if (/[^A-Za-z0-9]/.test(val)) strength++; //Check for character(@,#,$,etc.)

    // Visual feedback based on strength score
    if (strength === 0) {
        strengthMessage.textContent = "Very Weak!";
        strengthMessage.style.color = "red";
    } else if (strength < 3) {
        strengthMessage.textContent = "Moderate";
        strengthMessage.style.color = "orange";
    } else {
        strengthMessage.textContent = "Strong and Secure";
        strengthMessage.style.color = "green";
    }
});
