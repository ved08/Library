let counter = 0
let title = document.getElementById('title');
let author = document.getElementById('author');
let pages = document.getElementById('pages');
const root = document.getElementById('book-info');
let row,
printTitle,
printAuthor,
printPages,
del,
read,
sno;



let data = localStorage.getItem("data");
var bookData;
  if(data){
    bookData = JSON.parse(data)
    console.log(bookData)
  }else{bookData = []}
 
// document.getElementById('btn').addEventListener('click', addNewBook)

function Book(BookTitle,BookAuthor,BookPages){
  this.title = BookTitle,
  this.author = BookAuthor,
  this.pages = BookPages
}

function addNewBook(){
  counter += 1
  let select = document.getElementById('select');
  let option = select.options[select.selectedIndex].text;
 
  
  if(title.value.trim() && author.value.trim() && pages.value > 0 && select.options[select.selectedIndex].value !== 'falsy'){
    let book = new Book(title.value, author.value, pages.value);
   console.log(typeof bookData)
    bookData.push(book);
    localStorage.setItem('data', JSON.stringify(bookData))
    row = document.createElement('tr');
    row.setAttribute('data-index', counter)
  
    printTitle = document.createElement('td');
    printAuthor = document.createElement('td');
    printPages = document.createElement('td');
    
    del = document.createElement('button')
    del.setAttribute('onclick', 'deleteElem()');
    del.setAttribute('data-index', counter)
    del.textContent = 'Delete'
  
    read = document.createElement('button');
    read.setAttribute('onclick', 'read()');
    read.textContent = 'Read the book'

    printTitle.textContent = book.title;
    printAuthor.textContent = book.author;
    printPages.textContent = book.pages;
    row.append(printTitle, printAuthor, printPages, option, del, read);
    root.append(row)
  } else
   alert('Please fill all the details') 
}

function deleteElem() {
let parentTag = event.target.parentElement;
parentTag.remove();
}

// localStorage.clear()