const book = {
    name: 888,
    color: "",
    isbn:999,
    code:null,

     set Id(bid){
         this.name=bid;
         console.log("set "+name);  
 
     }
 };

 console.log("book: "+book.name);  
 book.name = 698;
 book.color="orange";
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
