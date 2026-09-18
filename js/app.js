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

 const practiceForm = document.getElementById('ass-favorite-form');

 function handleSubmit(event) {
   event.preventDefault(); // stop the page reload
   console.log('You typed:' + nameInput.value);
 }

 practiceForm.addEventListener('submit', handleSubmit);
