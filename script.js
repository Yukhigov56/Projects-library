const arrBook = [];

function Book(title, author, pages) {
  this.title = title;
  this.author = author;
  this.pages = pages;
}

const inputOne = document.querySelector(".my-inpOne");
const inputTwo = document.querySelector(".my-inpTwo");
const inputThree = document.querySelector(".my-inpThree");

// Функция которая создает объект и добавляет в массив
function newBook() {
  const obj = new Book(
    inputOne.value,
    inputTwo.value,
    parseInt(inputThree.value)
  );
  arrBook.push(obj);
  console.log(arrBook);
}

const openDialogButton = document.getElementById("openDialog");
const myDialog = document.getElementById("myDialog");
const closeDialogButton = document.getElementById("closeDialog");

openDialogButton.addEventListener("click", () => {
  myDialog.showModal();
});

closeDialogButton.addEventListener("click", () => {
  myDialog.close();
});

const body = document.querySelector(".bodyMain");
const bookContainer = document.createElement("div");
bookContainer.classList = "book-container";
body.appendChild(bookContainer);

function objectOnPage() {
  const card = document.createElement("div");
  const btn1 = document.createElement("button");
  const btn2 = document.createElement("button");

  card.classList = "book-card";
  btn1.classList = "cardBtn1";
  btn2.classList = "cardBtn2";

  btn2.textContent = "Delete";
  btn1.textContent = "Not read";

  btn2.addEventListener("click", () => {
    card.textContent = "";
    card.style.boxShadow = "none";
  });

  btn1.addEventListener("click", () => {
    if (btn1.textContent === "Read") {
      btn1.textContent = "Not read";
      btn1.style.backgroundColor = "rgb(110, 37, 37)";
    } else {
      btn1.textContent = "Read";
      btn1.style.backgroundColor = "green";
    }
  });

  arrBook.forEach((book) => {
    card.innerHTML = `
    <h3>${book.title}</h3>
    <p>Author: ${book.author}</p>
    <p>Pages: ${book.pages}</p>
    `;

    card.append(btn1, btn2);
    bookContainer.appendChild(card);
  });
}

const ready = document.getElementById("ready");
ready.addEventListener("click", () => {
  newBook();
  objectOnPage();
  myDialog.close();
});
