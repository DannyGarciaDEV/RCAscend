const arrayObj = [
    {'text': 'apple', 'color': 'red'},
    {'text': 'pineapple', 'color': 'yellow'},
    {'text': 'cucumber', 'color': 'green'},
    {'text': 'orange', 'color': 'orange'},
    {'text': 'grape', 'color': 'purple'}
];

// Creating a <ul> element
const ul = document.createElement('ul');

// Iterating over the array to create <li> elements for each object
arrayObj.forEach(function(item) {
    const li = document.createElement('li');
    li.style.color = item.color; // Setting the color
    li.appendChild(document.createTextNode(item.text)); // Adding text
    ul.appendChild(li); // Appending <li> to <ul>
});

// Appending the <ul> to the div with id "items"
document.getElementById('items').appendChild(ul);