let bookData = [];
let counter = 0
let title = document.getElementById('title');
let author = document.getElementById('author');
let pages = document.getElementById('pages');
const root = document.getElementById('book-info');
let row;
let printTitle;
let printAuthor;
let printPages;
let del;
let read;
let sno;

function addNewBook(){
  counter += 1;
  let select = document.getElementById('select');
  let option = select.options[select.selectedIndex].text
  console.log(select.options[select.selectedIndex].value)
 
  
  if(title.value.trim() && author.value.trim() && pages.value > 0 && select.options[select.selectedIndex].value !== 'falsy'){
    function Book(Btitle,Bauthor,Bpages){
      this.title = Btitle,
      this.author = Bauthor,
      this.pages = Bpages
    }
    let book = new Book(title.value, author.value, pages.value);
    bookData.push(book);
    console.log(bookData)
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