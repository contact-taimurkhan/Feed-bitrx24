// faq question button 
const questionBtn = document.querySelector(".questionBtn");
const questionBtnCardContainer = document.querySelector(".questionBtnCardContainer");
questionBtn.addEventListener("click", questionBtnfunc);

function questionBtnfunc() {
  //   box.classList.add("d-none");
  questionBtnCardContainer.classList.toggle("d-none");

//   if (faqMoreul.classList.contains("d-none")) {
//     faqMoreul.classList.remove("d-none");
//   } else {
//     faqMoreul.classList.add("d-none");
//   }
}

// faq question button 

// faq question button close
const faqlistClosebtn = document.querySelector(".faqlistClose");
faqlistClosebtn.addEventListener("click", faqlistClosebtnfunc);

function faqlistClosebtnfunc() {
  //   box.classList.add("d-none");
  questionBtnCardContainer.classList.toggle("d-none");

//   if (faqMoreul.classList.contains("d-none")) {
//     faqMoreul.classList.remove("d-none");
//   } else {
//     faqMoreul.classList.add("d-none");
//   }
}

// faq question button close

const faqbtnlimore = document.querySelector(".faqBtnliMoreA");
const faqMorecontainer = document.querySelector(".faqMore-container");
faqbtnlimore.addEventListener("click", faqbtnlimorefunc);

function faqbtnlimorefunc() {
  //   box.classList.add("d-none");
  faqMorecontainer.classList.toggle("d-none");

//   if (faqMoreul.classList.contains("d-none")) {
//     faqMoreul.classList.remove("d-none");
//   } else {
//     faqMoreul.classList.add("d-none");
//   }
}
