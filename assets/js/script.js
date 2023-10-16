/**
Copyright © 2023 <Joel Goode>

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
**/

// Add class navbarDark on navbar scroll
const header = document.querySelector('.navbar');

window.onscroll = function () {
    var top = window.scrollY;
    if (top >= 100) {
        header.classList.add('navbarDark');
    }
    else {
        header.classList.remove('navbarDark');
    }
}

// Add current date to footer

// Get the footer element
const footer = document.getElementById("footer");

// Check if the "Last Updated" div doesn't already exist
if (!footer.querySelector(".last-updated")) {
    // Create a new div element for the "Last Updated" information
    const lastUpdatedDiv = document.createElement("div");
    lastUpdatedDiv.className = "last-updated";
    lastUpdatedDiv.textContent = "Last Updated: " + document.lastModified;

    // Append the "Last Updated" div to the footer
    footer.appendChild(lastUpdatedDiv);
}
