var data= prompt("Please enter your requirements between 1 to 3 ");
let d=Number.parseInt(data);
console.log(d);

switch(d){

    case 0:
        alert("ADD");
        break;

    case 1:
        alert("Update");
        break;

    case 2:
        alert("Delete");
         break;

    case 3:
        alert("Show All");
        break;

    default:
        alert("Invalid inout");
        
}
const book = {
    color:[],
    isbn: [],
    code: [],
    name: [],

     set Id(bid){
         this.name=bid;
         console.log("set "+name);  
 
     }
 };

 console.log("book: "+book.name);  
 book.name = [222,555,333];
 book.color=["green","",333];
 console.log(book);  

function listofbooks(book) {
    var myArray = [book];
    for (let i=0; i<myArray.length; i+=1) {
    console.log("name :" +myArray[i].name);
    console.log("color :" +myArray[i].color);
    console.log("isbn :" +myArray[i].isbn);
    console.log("code:" +myArray[i].code);

}
    
  }
 console.log("Book 1 ........");
 listofbooks(book);
 book.name = 793;
 book.color="cyan";
 book.isbn = 555;
 book.code=098;
 console.log("Book 2 .........");
 listofbooks(book);
