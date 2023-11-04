/**
Copyright © 2023 <Joel Goode>

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
**/


// Function for setting up the modals

function setupModals() {
    document.addEventListener("click", function (e) {
        if (e.target.classList.contains("latest-img")) {
            const src = e.target.getAttribute("src");
            document.querySelector(".modal-img").src = src;
            const myModal = new bootstrap.Modal(document.getElementById('latest-img'));
            myModal.show();
        }
    });
}

// Call the function to set up the dynamic modals
setupModals();

// Function for sending an email notifaction from contact form
// Initialize Email.js outside of the function

function sendMessage(event) {
    emailjs.init("HQ2ZljQ_MCooUqhCw");  // Replace with your actual public key
    event.preventDefault();  // Prevent the form from submitting the traditional way

    const serviceID = "service_5j8rehu";  // Replace with your actual service ID
    const templateID = "template_l5bj3sb";  // Replace with your actual template ID

    // Create the params object with the form data
    var params = {
        sendername: document.querySelector("#name").value,
        senderemail: document.querySelector("#email").value,
        senderphone: document.querySelector("#number").value,
        sendersubject: document.querySelector("#subject").value,
        sendermessage: document.querySelector("#message").value,
    };

    // Send the form data using Email.js
    emailjs.send(serviceID, templateID, params)
        .then(function (response) {
            console.log("Email sent successfully:", response);
            // Display a confirmation message to the user
            alert('Thank you, ' + params['sendername'] + '! Your message has been sent. I should get back to you soon!');

            // Reset the form or perform other actions as needed
            event.target.reset();  // Reset the form
        })
        .catch(function (error) {
            console.error("Email sending failed:", error);
            alert("OH NO! An error occurred! Your email could not be sent. Please try again or contact the email provided.");
            // Handle errors or show an error message to the user
        });
    // Attach the sendMessage function to the form submit event
    document.querySelector("#contact-form form").addEventListener('submit', sendMessage);
}

// Call the function to add "Last Updated" to the footer
addLastUpdatedToFooter();