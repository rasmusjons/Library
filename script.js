let myLibrary = [];
let list = document.createElement("ul");
let fragment = document.createDocumentFragment();
let table2 = document.querySelector(".table");
let i = 0; 


class ClassBook {
  constructor(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read; 
  }
 
 
}




let bookA = new ClassBook ("Harry Potter 1", "JK Rowling", 100, "Yes");
let bookB = new ClassBook ("Harry Potter 2", "JK Rowling", 200, "Yes");
let bookC = new ClassBook ("Harry Potter 3", "JK Rowling", 300, "No");
let bookD = new ClassBook ("Harry Potter 4", "JK Rowling", 400, "Yes");
let bookE = new ClassBook ("Harry Potter 5", "JK Rowling", 500, "Yes");

function addBookToLibrary(Book){
    myLibrary.push(Book); 
  }

addBookToLibrary(bookA);
addBookToLibrary(bookB);
addBookToLibrary(bookC);
addBookToLibrary(bookD);
addBookToLibrary(bookE);

console.log(bookA)


displayBooks();




addForm()
//pop-up form. 

function addForm(){
  const addForm = document.forms["formId"];
addForm.addEventListener("submit", function (e) {
  e.preventDefault();
  let title = addForm.querySelector('input[name="title"]')
  let titleValue = title.value;

  let author = addForm.querySelector('input[name="author"]');
  let authorValue = author.value;

  let pages = addForm.querySelector('input[name="pages"]');
  let pagesValue = pages.value;

  let read = addForm.querySelector('input[name="read"]');
  let readValue = read.value;
let bookNew = new ClassBook(titleValue, authorValue, pagesValue, readValue);
      myLibrary.push(bookNew);


            // lägger till boken i listan . 
      let li = document.createElement("li");
      let readButton = document.createElement("button");
      readButton.classList.add("readButtons")
      readButton.setAttribute("id", i); 
      readButton.innerHTML = "Read";
      listenerForNewButtons (readButton);

      li.textContent = (`${bookNew.title} ${bookNew.author} ${bookNew.pages}`);
      fragment.appendChild(li);
      fragment.appendChild(readButton);

      list.appendChild(fragment);




      closeForm();
    


        
              //skapar lägger till boken i array 
      



});
}







//form pop-up
function openForm() {
  document.getElementById("myForm").style.display = "block";
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
}



// fixar listan med böcker
function displayBooks() {

  let render = myLibrary.map(book => `${book.title} ${book.author} ${book.pages}`);
  

  render.forEach(function (book) {
    let readButton = document.createElement("button");
    readButton.classList.add("readButtons");
    readButton.setAttribute("id", i); 
    readButton.innerHTML = "Read";
    let li = document.createElement("li");
    li.textContent = book;
    fragment.appendChild(li);
    fragment.appendChild(readButton);
    i++; 
  });

  list.appendChild(fragment);
  table2.appendChild(list);

}

//Readbutton klick-event
let elem = document.querySelectorAll(".readButtons");

elem.forEach(function (e) {
  e.addEventListener("click", function () {

      
      let target = event.target; 
      let id = target.id;
      console.log(id); 
      readStatus(id); 
      

    })

})




function readStatus(i){
  if (myLibrary[i].read === "Yes") {
    myLibrary[i].read = "No";
  } else myLibrary[i].read = "Yes";
    
  let stat = myLibrary[i].read; 
  console.log(stat); 
}



//De nya knapparna som adderades behövde tydligen egna eventlistners. Detta är functionen för de. 
function listenerForNewButtons (element){

  element.addEventListener("click", function () {

      
    let target = event.target; 
    let id = target.id;
    console.log(id); 
    readStatus(id); 
    

  })
}