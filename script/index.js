// Create a new XMLHttpRequest object
var xhr = new XMLHttpRequest();
console.log(xhr);

// Define the HTTP method (GET) and the URL you want to retrieve data from
xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts', true);

// Set up an event listener for when the request is complete
xhr.onload = function () {
    if (xhr.status === 200) {
        // The request was successful, and data is available in xhr.responseText
        console.log(xhr.responseText);
        var data = JSON.parse(xhr.responseText);
        console.log(data);
    } else {
        // The request failed, handle the error here
        console.error('Request failed with status', xhr.status);
    }
};

// Send the request
xhr.send();