// At the very top above functions 
let favorites = [];

const form = document.getElementById('add-favorite-form');
const favoritesList = document.getElementById('favorites-list');


let today = new DataTransfer().toLocaleDateString();
console.log(today);

 let myFavorite = {
    name: 'Starbucks on University Drive',
    category: 'coffee',
    rating: 5,
    notes: 'Great study spot with fast wifi',
    dateAdded: today
 };

 console.log(myFavorite);
 let displayText = myFavorite.name + '- Rating: ' + myFavorite.rating + '/5';
 console.log(displayText);

 console.log(typeof myFavorite.name);
 console.log(typeof myFavorite.rating);
 
 let placeName = myFavorite.name;
 let rating = myFavorite.rating

 console.log(placeName + '-' + rating + '/5');
 console.log('⭐️'.repeat(rating) + ' ' + placeName);

 function greetFavorite(placeName, rating) {
   console.log(placeName + ' has' + rating + 'stars!');
 }
 greetFavorite('Starbucks', 5); // "Starbucks has 5 stars!"

 const nameInput = document.getElementById('name');
 console.log(nameInput.value); // What the user typed

 function addFavorite(event) {
   event.preventDefault():

   const name = document.getElementById('name'). value.trim();
   const category = document.getElementById('category').value;

   if (!name || !category) {
      alert('Please fill in na,e and category!');
      return;
   }

   const newFavorites = {
      name: name,
      category: category,
      rating: parseInt(document.getElementById('rating').value),
      notes: document.getElementById('rating').value.trim(),
      dateAdded: new Date().toLocaleDateString()
   };

   favorites.push(newFavorite);
   form.requestFullscreen();
   displayFavorites();
}
 form.addEventListener('submit', addfavorite);

 function displayFavorites() {
    favoritesList.innerHTML = '';
    if (favorites.length === 0) {
        favoritesList.innerHTML = '<p class="empty-message">No favorites yet. Add your first favorite place above!</p>';
        return;
    }
    favorites.forEach(function(favorite) {
        const stars = '⭐'.repeat(favorite.rating);
        favoritesList.innerHTML += `
            <div class="favorite-card">
                <h3>${favorite.name}</h3>
                <span class="favorite-category">${favorite.category}</span>
                <div class="favorite-rating">${stars} (${favorite.rating}/5)</div>
                <p class="favorite-notes">${favorite.notes}</p>
                <p class="favorite-date">Added: ${favorite.dateAdded}</p>
            </div>`;
    });
}

// The last line in js/app.js
displayFavorites(); 