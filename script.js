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
function menutoggle() {
    var MenuItems = document.getElementById('MenuItems');
    if (MenuItems.style.maxHeight === '0px') {
        MenuItems.style.maxHeight = '200px';
    } else {
        MenuItems.style.maxHeight = '0px';
    }
}

function sortProducts() {
    var selectElement = document.getElementById("sortingOptions");
    var selectedValue = selectElement.value;

    var products = document.querySelectorAll(".col-4");
    var sortedProducts = Array.from(products);

    switch (selectedValue) {
        case "price":
            sortedProducts.sort((a, b) => {
                var priceA = parseFloat(a.querySelector("p").innerText.split(" ")[0]);
                var priceB = parseFloat(b.querySelector("p").innerText.split(" ")[0]);
                return priceA - priceB;
            });
            break;
        case "popularity":
            sortedProducts.sort((a, b) => {
                // Generate random popularity values between 0 and 100
                var popularityA = Math.floor(Math.random() * 101);
                var popularityB = Math.floor(Math.random() * 101);
                return popularityB - popularityA;
            });
            break;
        case "rating":
            sortedProducts.sort((a, b) => {
                // Generate random rating values between 0 and 5
                var ratingA = Math.random() * 5;
                var ratingB = Math.random() * 5;
                return ratingB - ratingA;
            });
            break;
        case "sale":
            sortedProducts.sort((a, b) => {
                // Generate random sale values between 0 and 50 (representing percentage discount)
                var saleA = Math.floor(Math.random() * 51);
                var saleB = Math.floor(Math.random() * 51);
                return saleB - saleA;
            });
            break;
        default:
            // No sorting, do nothing
            break;
    }

    var container = document.querySelector(".row");
    container.innerHTML = "";

    sortedProducts.forEach(product => {
        container.appendChild(product);
    });
}

document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();

    document.querySelector(".login-form").style.display = "none";

    document.querySelector(".overlay").style.display = "none";
});
