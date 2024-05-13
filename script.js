// search.js

function searchProducts() {
    // Get input value
    var input = document.getElementById("searchInput").value.toUpperCase();

    // Get all product items
    var items = document.querySelectorAll(".col-4");

    // Loop through each product item
    items.forEach(function(item) {
        // Get the product name
        var name = item.getElementsByTagName("h4")[0].innerText.toUpperCase();

        // Check if the product name contains the input value
        if (name.indexOf(input) > -1) {
            item.style.display = ""; // Show the item
        } else {
            item.style.display = "none"; // Hide the item
        }
    });
}


document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();

    document.querySelector(".login-form").style.display = "none";

    document.querySelector(".overlay").style.display = "none";
});
