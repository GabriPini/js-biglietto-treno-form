//funzione al click del pulsante genera
function myFunction() {
    let elementName = document.getElementById("inputName").value;
    document.getElementById("Passenger_name").innerHTML = elementName;
    
    let travel_Distance = document.getElementById("inputKm").value
    
    if (isNaN (travel_Distance) ) {
        // if the distance is not given in number
        alert('inserisi un numero valido')
        
    } else if (travel_Distance <= 0){
        // if the distance is negative
        alert('La distanza non puo essere inferiore a 0')
    }

    //seltettore età
    let age_selection = document.getElementById("FormControlSelect").value;

    const price_Per_Km = 0.21;
    let ticket_Full_Price = travel_Distance * price_Per_Km;
    
    // Elderly discount value 
    const elderly_Discount = 0.4;
    
    // youth discount value
    const youth_Discount = 0.2;
    
    let ticket_Price;
    if (age_selection === 'Over 65') {
        // if the passenger is over 65 years
        ticket_Price = ticket_Full_Price - (ticket_Full_Price * elderly_Discount);
        
    } else if (age_selection === 'Minorenne') {
        // if the passenger is under 18 years
        ticket_Price = ticket_Full_Price - (ticket_Full_Price * youth_Discount);   
        
    } else {
        // if the passenger age is between 18 years and 65
        ticket_Price = ticket_Full_Price;
    }
    
    document.getElementById("ms_ticket-price").innerHTML = `${ticket_Price.toFixed(2)} &euro;`

    let element_age_Sales;
    if (age_selection === 'Over 65') {
        // if the passenger is over 65 years
        element_age_Sales = 'Sconto Over 65'
        
    } else if (age_selection === 'Minorenne') {
        // if the passenger is under 18 years
        element_age_Sales = 'Sconto Minorenne'
        
    } else {
        // if the passenger age is between 18 years and 65
        element_age_Sales = 'Nessuno Sconto ... PAAAAAGAAAA'
    }
    
   
    document.getElementById("age_discount").innerHTML = element_age_Sales;

    let train_compartment =  Math.floor(Math.random() * 10);
    console.log(train_compartment)

    document.getElementById("train_section").innerHTML = train_compartment;


    let element_cp_code =  Math.floor(Math.random() * 100000) +10000;
    console.log(element_cp_code)

    document.getElementById("cp_code").innerHTML = element_cp_code;

    
}


