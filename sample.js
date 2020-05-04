const readline = require('readline');
let mygArray =[];

const book = {
    name: [],
    color: [],
     set setbook(c){
         this.color=c;
         //this.name=c;
         console.log("set color: "+color);  
 
     }
 };


 function ShowAll(book) {
    console.log(book);
    const r1 = readline.createInterface({
      input: process.stdin,
      output: process.stdout
     
  });
  
   r1.question('Please enter book name  to get details : ', (answer2) => {

     let myArrayShow = [book];
   // console.log(" Entered Book Name : "+ myArray);    

      if(myArrayShow[0]){
         console.log("No details found for "+ answer2);    
    
}
    else{
    for (let i=0; i<myArray.length; i+=1) {
        console.log(" Book details");
        console.log("Showing All the available book colors :" +myArray[i].color +" " + myArray[i].name );
       
}

 }
});
}

function AddBook(book) {
  console.log(book);
  const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
   
});

 r1.question('Please enter book details in format: name , color: ', (answer2) => {
    //console.log(answer2); 
    book=answer2;
    let myArray = [book];
   
    for (let i=0; i<myArray.length; i+=1) 
    {
        console.log("Added book details :" +myArray[i] );
         mygArray[i]=myArray[i];
        //console.log("mygArray[i]"+mygArray[i]);
}
 });
 console.log("mygArray[i]"+mygArray[i]);

}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Please enter number between 1 to 3: ', (answer1) => {

console.log(answer1); 
let d=Number.parseInt(answer1);

switch(d){

    case 0:
        console.log("ADD");
        AddBook(book);
         break;
       


    case 1:
        console.log("Update");
        break;

    case 2:
        console.log("Delete");
         break;

    case 3:
        ShowAll(book);
        break;

    default:
        console.log("Invalid input");
        
}
           
      
    });
 // rl.close();