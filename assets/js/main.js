


// Distance user input
let travel_Distance = ("Inserisci i Km vorresti percorrere") ;

if (isNaN (travel_Distance) ) {
    // if the distance is not given in number
  

} else if (travel_Distance <= 0){
    // if the distance is negative
   
}

// age user input
let passenger_Age = ("Quanti anni hai ?") ;

if (isNaN (passenger_Age) ) {
    // If the age is not given in number
    

} else if ( (passenger_Age < 0) && (passenger_Age > 110) ) {
    // if the age is not between 0 and 120 
    
}

// price per km const
const price_Per_Km = 0.21;

// formula for ticket price before discounts
let ticket_Full_Price = travel_Distance * price_Per_Km;

// Elderly discount value 
const elderly_Discount = 0.4;

// youth discount value
const youth_Discount = 0.2;

// ticket price variable defined
let ticket_Price;

if (passenger_Age >= 65) {
    // if the passenger is over 65 years
    ticket_Price = ticket_Full_Price - (ticket_Full_Price * elderly_Discount);

} else if (passenger_Age <18) {
    // if the passenger is under 18 years
    ticket_Price = ticket_Full_Price - (ticket_Full_Price * youth_Discount);   

} else {
    // if the passenger age is between 18 years and 65
    ticket_Price = ticket_Full_Price;
}

// to display in the html the final price of ticket 
// .toFixed(2) used for cut decimals after 2 of them
document.getElementById("ms_ticket-price").innerHTML = `Costo biglietto ${ticket_Price.toFixed(2)} &euro;`

function myFunction() {
    var elementName = document.getElementById("inputName").value;
    document.getElementById("Passenger_name").innerHTML = elementName;
  }