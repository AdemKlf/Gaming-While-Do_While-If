// console.log("*****FOR*****");


// }while(again)


    let due = 5;
    const randomNumber = Math.round(Math.random()*100);
    console.log(randomNumber);
    let prediction;
    let again;
    
    do{
    do{
        prediction = +prompt("Please enter a guess between 0-100");
        due -= 1;
        if(prediction === randomNumber){
            console.log(`Congratulations, you know ${5 - due} times.`);
            break;
        }else if(prediction < randomNumber){
            console.log("increase ⬆️");
        }else{
            console.log("decrease ⬇️");
        }
    
    }while(due > 0);
    
    if (prediction !== randomNumber){
         console.log("Sorry you lost the game");
    }
    
        
        again = prompt("Do you want to play again : Y/N");
        if(again === "Y"){
            again = 1
            due = 5
            console.log(3)
            
        }else if(again === "y"){
            again = 1
            due = 5
            console.log(4)
        }
        else{
            again=0
            console.log("GoodLuck");
        }
   
    }while(again)