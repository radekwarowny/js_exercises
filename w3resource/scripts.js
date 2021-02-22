// Home Page js

function myFunction() {
    document.getElementById('demo5').innerHTML = 'JS provides the result of math calculation (5+6): ' + (5 + 6);

}

function statementsFunction() {
    

    var x, y, z; // Initialising variables
    x = 5;       // Assigning values
    y = 6;
    z = x + y;   // Performing calculation

    document.getElementById('demo6').innerHTML = "The value of z is " + z +".";
}

function externalFunction() {
    document.getElementById('demo4').innerHTML = 'Paragraph changed thanks to the use of external JS file.';
}

function myReturn() {
    return 'Radek is awesome!';

}

function displayReturn() {
    document.getElementById('demo7').innerHTML = myReturn();
}

// Exercises Page js

// Ex_1

function currentTime() {
    var date = new Date();
    var day = date.getDay();
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();

    var days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

    var i;
    for (i=0; i < days.length; i++) {
        if (i == day) {
            document.getElementById('ex_1a').innerHTML = "Today is: " + days[i-1];

            
            i ++;
        }

    }
    if (hours <= 12 ) {
        document.getElementById('ex_1b').innerHTML = "\nCurrent time is: " + hours + " AM  " + minutes + " : " + seconds;  
    }
    else {
        document.getElementById('ex_1b').innerHTML = "\nCurrent time is: " + hours + " PM : " + minutes + " : " + seconds; 
    }

}

// Ex_2

function printWindow() {
    window.print();
}

// Ex_3

function currentDate() {
    var today = new Date();
    var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();

    document.getElementById('ex_3').innerHTML = date;
}
    