
    const book ={
        book_Id: null,
        bookTitle :"",
        issue_datetime : null,
        return_datetime: null ,
        studentName:"",
        student_Id: null,
        employeeID: null,
        
      
        get book_Id() {
            return this.book_Id;
            console.log("get--book_id"); 
        },

        get bookTitle() {
            return this.bookTitle;
        },
        get issue_datetime() {
            return this.issue_datetime;
        },
        get return_datetime() {
            return this.return_datetime;
        },
        get studentName() {
            return this.studentName;
        },
        get student_Id() {
            return this.student_Id;
        },
        get employeeID() {
            return this.employeeID;
        },

        set book_Id(bid) {
            this.book_Id = bid;
            console.log("set--bookid"); 
        },

        set bookTitle(btitle) {
            this.bookTitle = btitle;
        },
        set issue_datetime(idatetime) {
            this.issue_datetime = idatetime;
        },
        set return_datetime(rdatetime) {
            this.return_datetime = rdatetime;
        },
        set studentName(sname) {
            this.studentName = sname;
        },
        set student_Id(sid) {
            this.student_Id = sid;
        },
        set employeeID(empid) {
            this.employeeID = empid;
        }
    
    
    };
    
    let employee= {
    employeeID:null,
    employeeName:"", 

    get employeeID() {
        return this.employeeID;
    },

    set employeeID(empid) {e
        this.employeeID = empid;
    },
    
    get employeeName() {
        return this.employeeName;
    },

    set employeeName(ename) {
        this.employeeName = ename;
    }
    
    };

   
  
  book.book_Id= '111';
  console.log(book);


//book.book_Id='1111';
//book.bookTitle ="node";
