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
