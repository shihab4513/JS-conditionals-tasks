/***

if you get more then 80 then inside your friend score. 
    If your friend get more than 80. then go for a lunch. 
    if your friend get below 80 but greater than or equal 60 then tell your friend, good luck next time. 
    if your friend get less than 60 but more than or equal to 40 then, keep your friend's message unseen.
    if your friend get less than 40, block your friend
if you get less than 80 go to home and sleep and act sad

Note: 
use nested if-else-if-else
*/
let myScore = 85, friendScore = 38;
if (myScore > 80) {
    console.log('Inside friend score');
    if (friendScore > 80) {
        console.log('Go for lunch')
    }
    else {
        if (friendScore >= 60) {
            console.log('Good luck next time')
        }
        else {
            if (friendScore >= 40) {
                console.log('Friend message Unseen');
            }
            else {
                console.log('Block my friend')
            }
        }
    }
}
else {
    console.log('Go home and act sad')
}
