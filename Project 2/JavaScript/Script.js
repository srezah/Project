
console.log("Connected...");


var today=new Date().getDay(); 
var day ;

switch(today)
{

    case 0 :
        day = "Sunday";
        break;

    case 1 :
        day="Monday";
        break;

    case 2 :
        day = "Tuesday";
        break;

    case 3 :
        day="Wensday";
        break;
    
    case 4 :
        day = "Thursday";
        break;

    case 5 :
        day="Fraiday";
        break;

    case 6 :
        day = "Saturday";
        break;
        
        default :
        day = "your Value Not Found ";
}

document.write(day);

