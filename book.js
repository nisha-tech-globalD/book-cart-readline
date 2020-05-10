const readline = require('readline');
let mygArray =[];

const book = {
    name: [],
    color: [],
     set setbook(c){
         this.color=c;
         this.name=c;
         console.log("set color: "+color);  
 
     }
 };


function updateBook(book) {
  book.name = [222,333,444];
  book.color=["green","red","cyan"];
  console.log(book);
const rupdate = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false
});
  
  rupdate.question('To update please enter book ID : ', (answer4) => {
     mygArray=[book];
     let input=answer4;
     let storename=[];
     let storecolor=[];
     storename =mygArray[0].name.slice(0);
     storecolor =mygArray[0].color.slice(0);
    console.log("Showing book details :"  );
      for (let i=0; i<storename.length; i+=1) 
    {
      
       if(storename[i]==answer4)
        {
         
        console.log("current detail available for Book ID :" +input + " are \n Book color :"+ storecolor[i] );

         rupdate.question('To update please enter book color  : ', (answer5) => { book.color[i]=answer5; 
         console.log("New value for "+input+ "are Book Color :"+ book.color[i]);

         });
        
        }
    }
  
 });
  }

function deleteBook(book) {
  book.name = [222,333,444];
  book.color=["green","red","cyan"];
  console.log(book);
  const rdelete = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false
});
  
  rdelete.question('To delete record please enter book ID : ', (answer4) => {
mygArray=[book];
     let input=answer4;
     let storename=[];
     let storecolor=[];
     storename =mygArray[0].name.slice(0);
     storecolor =mygArray[0].color.slice(0);
    console.log("Showing book details :"  );
      for (let i=0; i<storename.length; i+=1) 
    {
      
       if(storename[i]==answer4)
        {
         
        console.log("current detail available for Book ID :" +input + " are \n Book color :"+ storecolor[i] );
        console.log("Do you want to delete record for "+input);
         
         delete book.name[i];
         delete book.color[i];

         console.log("deleted");
         console.log(book);

        }
    }
  
 });
  }
    
        
    
  


 function ShowAll(book) {
   
   const r2= readline.createInterface({
      input: process.stdin,
      output: process.stdout,
      terminal: false
  });
     book.name = [222,333,444];
     book.color=["green","red","cyan"];

     mygArray=[book];
     let storename=[];
     let storecolor=[];
     storename =mygArray[0].name.splice(0);
     storecolor =mygArray[0].color.splice(0);

    r2.question('Please enter book name  to get details : ', (answer2) => {
    console.log("Showing book details :"  );
    
      for (let i=0; i<storename.length; i+=1) 
    {
      
       if(storename[i]==answer2)
        {
        console.log("Book Name :" +storename[i] +"\n"+ "Book Color :" + storecolor[i] );
        break;
        }
/*else {
        console.log("No Details found !! ");
      }*/
      
  }
    
 
});
}
/* ---------ADD BOOK------------*/


function AddBook(book) {
  
const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false
});
  console.log(book);
 r1.question('Please enter book details in format: ID , color: ', (answer3) => {
    book=answer3;
    let myArray = [book];
   
    for (let i=0; i<myArray.length; i+=1) 
    {
        console.log("Added book  :" +myArray[i] );
        
         mygArray.push(myArray[i]);
            
}
 });
}


/* --------SWITCH-------------*/
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false
});

rl.question('Please enter number between 1 to 3: ', (answer1) => {
console.log("You have entered :");
console.log(answer1); 
let d=Number.parseInt(answer1);

switch(d){

    case 0:
        console.log("ADD");
        AddBook(book);
         break;
       


    case 1:
        updateBook(book);
        break;

    case 2:
        deleteBook(book);
         break;

    case 3:
        ShowAll(book);
        break;

    default:
        console.log("Invalid input");
        
}
           
      
    });
 // rl.close();