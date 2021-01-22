//https://github.com/aks2042/assignment-js-problem-solve


//kilometerToMeter convert. Number 1

function kilometerToMeter(kilometer) {
    const Meter = kilometer*1000;
    return Math.abs(Meter);
}



//budgetCalculator 3 product price sum.  number 2

function budgetCalculator(watch,phone,laptop){
    var result = (watch*50)+(phone*100)+(laptop*500);
    return (result);
}




//hotelCost calculate by day number. number 3

function hotelCost(day){
    if(day >=1 && day<= 10){
        return day*100;
    }
    else if(day>=11 && day<=20){
        return 10*100 + (day -10)*80;
    }
    else if (day >=21){
        return (10*100) + (10*80)+ (day-20)*50;
    }
        
}


//megaFriend: longest word query from the array. number 4

var friends = ['jhankarMahbub','Habib','Shamim','Fahim','Alamin','Abadullah'];

function megaFriend(arr){
    var length = 0;
    var longestWord;
    for(var i =0; i<arr.length; i++){
        if(arr[i].length > length){
            length = arr[i].length;
            longestWord = arr[i];
        }
    }
    return longestWord;

}
