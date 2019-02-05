// todo comment everything


// on pageload stuff
let cityNames = ["NYC", "SF", "LA", "ATX", "SYD"];



//loop through city names and store the results in funciton variable city
cityNames.forEach(addCity);

function addCity(city){
//set all the city variables to lower case and append them to <select>
  let newHTML = `<option value="${city.toLowerCase()}">${city}</option>`;
  $('select').append(newHTML);
}

// on user interaction
$('select').change(function (){
  event.preventDefault();
//store the value of select in variable selected
  let selected = $('select').val();
//remove all classes each time the computer loop through the if statement
  $('body').removeClass();
  if (selected === 'nyc'){
    $('body').addClass('nyc');
  } else if (selected === 'sf'){
    $('body').addClass('sf');
  } else if (selected === 'atx'){
    $('body').addClass('austin');
  } else if (selected === 'la'){
    $('body').addClass('la');
  } else if (selected === 'syd'){
    $('body').addClass('sydney');
  } else{
    $('#city-type').val('');

    // remove any existing classes that could conflict
    $('body').removeClass();
  }
  // todo fill in remaining cases
})






//
