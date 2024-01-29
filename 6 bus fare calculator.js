/***

Ticket fare Calculator
    - Children (age < 10): free
    - Students get a 50% discount
    - Senior citizens (age >= 60) gets a 15% Discount
    - Otherwise Regular ticket fare 800 tk
*/
let age = 18, ticketPrice, discount, Students = true;
if (age >= 60) {
    discount = (ticketPrice * 15) / 100;
}
else {
    if (age < 10) {
        console.log('Ticket is Free');
    }
    else {
        if (Students) {
            discount = (ticketPrice * 50) / 100;
        }
        else {
            console.log('Regular price')
        }
    }
}
