class Form{
  constructor(){
   this.input = createInput('Number')
   this.button = createButton('Play');

  } 
  
  hide(){
    this.button.hide();
    this.input.hide();
  }

    
  
  
  display(){
    var nom
    this.input.position(200,200);
    this.button.position(250,250);
    this.button.mousePressed(()=>{
 nom =  this.input.value();
  console.log(nom);

 //    this.input.hide();
   //  this.button.hide();
var number1 = nom/1;
var number2 = nom/10;
var number3 = nom/100;  
var number0 = nom/1000;
/*console.log("number0");
console.log(number0);
console.log("number1");
console.log(number1);
console.log("number2")
console.log(number2);
console.log("number3")
console.log(number3);
console.log("nom")
console.log(nom);
console.log("roundnumber3")
console.log(Math.round(number3));
console.log("roundnumber2")
console.log(Math.round(number2));
console.log("roundnumber1")
console.log(Math.round(number1));*/
var number4 = number2 - Math.round(number2);
var number5 = number4*10;
/*console.log("number4");
console.log(number4);
console.log("number5");
console.log(number5);
console.log("roundnumber5");
console.log(Math.round(number5));*/
if(Math.round(number5)===1){
  console.log("one");
  }
  if(Math.round(number5)===2){
    console.log("two");
    }
if(Math.round(number5)===3){
console.log("three");
}
if(Math.round(number5)===4){
  console.log("four");
  }
  if(Math.round(number5)===-5){
    console.log("five");
    }
 if(Math.round(number5)===-4){
      console.log("six");
      }
 if(Math.round(number5)===-3){
      console.log("seven");
        }
 if(Math.round(number5)===-2){
          console.log("eight");
          }
 if(Math.round(number5)===-1){
            console.log("nine");
            }
var number6 = number3-Math.floor(number3);
var number7 = number6*10;
/*console.log("number6");
console.log(number6);
console.log("number7");
console.log(number7);
console.log("floornumber7");
console.log(Math.floor(number7));*/
if(Math.floor(number5)===1){
  console.log("ten");
  }
  if(Math.floor(number7)===2){
    console.log("twenty");
    }
if(Math.floor(number7)===3){
console.log("thirty");
}
if(Math.floor(number7)===4){
  console.log("fourty");
  }
  if(Math.floor(number7)===5){
    console.log("fifty");
    }
 if(Math.floor(number7)===6){
      console.log("sixty");
      }
 if(Math.floor(number7)===7){
      console.log("seventy");
        }
 if(Math.floor(number7)===8){
          console.log("eighty");
          }
 if(Math.floor(number7)===9){
            console.log("ninety");
            }
 
var number8 = number0-Math.floor(number0);
var number9 = number8*10;
/*console.log("number8");
console.log(number8);
console.log("number9");
console.log(number9);
console.log("floornumber9");
console.log(Math.floor(number9));*/
if(Math.floor(number9)===1){
  console.log("one hundred and");
  }
  if(Math.floor(number9)===2){
    console.log("two hundred and ");
    }
if(Math.floor(number9)===3){
console.log("three hundred and ");
}
if(Math.floor(number9)===4){
  console.log("four hundred and");
  }
  if(Math.floor(number9)===5){
    console.log("five hundred and");
    }
 if(Math.floor(number9)===6){
      console.log("six hundred and");
      }
 if(Math.floor(number9)===7){
      console.log("seven hundred and");
        }
 if(Math.floor(number9)===8){
          console.log("eight hundred and");
          }
 if(Math.floor(number9)===9){
            console.log("nine hundred and");
            }
});


  }
}
