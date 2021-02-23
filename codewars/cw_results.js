/**
 * 
 * Results of JavaScript exercises found on CodeWars.com
 *
 * @summary CodeWars JS katas results.
 * @author Radek Warowny <radekwarownydev@gmail.com>
 *
 * Created at: 23/02/2021 
 * 
 */

// Grasshoper - Summation

var summation = function (num) {

    var total = 0;

    for (i = 1; i <= num; i++) {
        total += i; 
        
    }

    console.log()
    console.log("Grasshopper - Summation")
    console.log("Input: " + num);
    console.log("Answer: " + total)
    return total;

  }

summation(3);

// Reversed String
function solution(str) {
    var splitstr = str.split("");
    var revstr = splitstr.reverse();
    var jointstr = revstr.join("")

    console.log()
    console.log("Reversed String");
    console.log("Input: " + str);
    console.log("Answer: " + jointstr);

    return jointstr;

}

solution('Radek');

// Reduce but Grow
function grow(x){
    var total = 1;
    if (x.length == 0) {
        return 0; 
    }
    else {

        for (i = 0; i < (x.length); i++) {

            total *= x[i];  
        }
       
        console.log()
        console.log("Reduce but Grow");
        console.log("Input: " + x);
        console.log("Answer: " + total);
    
        return total; 

    } 
}

grow([1,2,3]);

// Lost Without a Map
function maps(x) {

    var new_x = [];
    for (i = 0; i < (x.length); i++) {
        new_x.push(x[i]*2);
    }
    console.log()
    console.log("Lost Without a Map");
    console.log("Input: " + x);
    console.log("Answer: " + new_x);
    
    return new_x; 
   
}

maps([1,2,3]);

// Transportation on Vacation
function rentalCarCost(d) {

    var total = 0;
    var day_cost = 40;

    console.log()
    console.log("Transportation on Vacation");
    console.log("Input: " + d);
    
    total = day_cost * d;
    if (d >= 7) {
        console.log("Answer: " + (total - 50));
        return total - 50;
    }
    else if (d >= 3 && d < 7) {
        console.log("Answer: " + (total - 20));
        return total - 20;
    }
    else {
        console.log("Answer: " + total);
        return total;
    }
}

rentalCarCost(8);

// Century From Year
function century(year) {

    var century;
    var str = year.toString();
    var res;
 
    if (year < 100) {
        century = 1;
    }
    else if (year > 100 && year < 1000) {
        res = str.substring(0,1);
        century = parseInt(res) + 1;
    }
    else if (str.substring(str.length-2) == "00") {
        century = str.substring(0,2);
    }
    else if (year > 100 && year < 10000) {
        res = str.substring(0,2);
        century = parseInt(res) + 1;
    }
    else {
        res = str.slice(0,-2);
        century = parseInt(res) + 1;
    }

    console.log()
    console.log("Century From Year");
    console.log("Input: " + year);
    console.log("Answer: " + century);
  
    return parseInt(century);

}

century(887);

// Pre-FizzBuzz Workout #1
function preFizz(n) {
    
    var arr = [];
    for (i = 1; i <= n; i++) {
        arr.push(i);
    } 
    console.log(arr);
    console.log()
    console.log("Pre-FizzBuzz Workout #1");
    console.log("Input: " + n);
    console.log("Answer: " + arr);
  
    return arr;
}

preFizz(8);

// Switcheroo
function switcheroo(x) {

    var arr = [];
    for (i = 0; i < x.length; i++) {
        if (x[i] == 'a') {
            arr.push('b');
        }
        else if (x[i] == 'b') {
            arr.push('a');
        }
        else {
            arr.push(x[i]);
        }
    }
    
    var res = arr.join('');
   
    console.log()
    console.log("Switcheroo");
    console.log("Input: " + x);
    console.log("Answer: " + res);
  
    return res;
}

switcheroo('');

// Chuck Norris II - One Punch
// task required a one-liner

function onePunch(items) {if (items == '' || Number.isInteger(items) || Array.isArray(items)) {console.log('Broken!');return 'Broken!';}else {console.log(items.split(' ').sort().join(' ').replace(/[Aa]/g,'').replace(/[Ee]/g,''));return items.split(' ').sort().join(' ').replace(/[Aa]/g,'').replace(/[Ee]/g,'');}}

onePunch(['s','a']);

// Odd or Even?
function oddOrEven(array) {

    var total = 0;
    var result = '';

    if (array.lenght < 1) {
        result = 'even';
    }
    else {
        for (i = 0; i < array.length; i++) {
            total += array[i];
        }
    }

    if (total % 2 == 0) {
        result = 'even';
    }
    else {
        result = 'odd';
    }

    console.log()
    console.log("Odd or Even?");
    console.log("Input: " + array);
    console.log("Answer: " + result);

    return result;
    
}

oddOrEven([0,1,4]);

// Chuck Norris VI - Shopping with Chuck
function price(start, soil, age) {

    var soil_o_meter = {'Barely used': 10, 'Seen a few high kicks': 25, 'Blood stained': 30, 'Heavily soiled': 50};
    var percent = soil_o_meter[soil];
   
    var n_apr;
    var result = start;
    for (i = 0; i < age; i++) {
        n_apr = start * (percent / 100);
        start += n_apr;

    }



    console.log(start+result);



}

price(27.76, 'Seen a few high kicks', 15);
