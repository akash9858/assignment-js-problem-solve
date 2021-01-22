//https://github.com/aks2042/assignment-js-problem-solve


//kilometerToMeter convert. Number 1

function kilometerToMeter(kilometer) {
    const Meter = kilometer*1000;
    return Math.abs(Meter);
}



//budgetCalculator 3 product price sum.  number 2

function budgetCalculator(watch,phone,laptop){
    var price = (watch*50)+(phone*100)+(laptop*500);
    return (price);
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


//megaFriend longest word query from the array. number 4

function megaFriend(names){
    var maxword = names[0];
   
        for( var i = 0; i < names.length; i++){
        var element = names[i];
        if(element.length > maxword.length){
        maxword =element;
        }
      }
       return maxword;
    }
   var a=megaFriend(["shamim","akash","fahim","sazidul"]);
