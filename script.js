let myLibrary = new Array;
function Book(title, author, pages, status){
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.status = status;
  }

function addBookToLibrary(){
  let bookTitle = document.getElementById('title').value;
  let bookAuthor = document.getElementById('author').value;
  let bookPages = document.getElementById('pages').value;
  let bookStatus;
  document.getElementById('status').checked == true ? bookStatus = true : bookStatus = false;
  const userData = [bookTitle, bookAuthor, bookPages, bookStatus];
  myLibrary.push(userData)
  console.log(myLibrary)
  
}
function render(){
  let table = document.getElementById('table');
  for(let book in myLibrary){
   let row = table.insertRow();
    for(let bookInfo in book){
      let cell = row.insertCell()
      cell.innerHTML = bookInfo;
    }
  }
}