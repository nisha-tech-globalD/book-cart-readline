
    let book ={
        book_Id: null,
        bookTitle :"",
        issue_datetime : null,
        return_datetime: null ,
        studentName:"",
        student_Id: null,
        employeeID: null,
    
    };

   
  function Book() {
     console.log("constructor");   
    }
  let b1= new Book();
  b1.book_Id= '111';
  b1.studentName="Kitty"
  console.log(b1.book_Id);
  console.log(b1.studentName);



