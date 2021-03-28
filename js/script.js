// Question 1 

const cat = {
    complain: function() {
        console.log("Meow!");
    }
};

cat.complain();

//Question 2

const heading = document.querySelector ("h3");

heading.innerHTML = "Updatet Heading";


//Question 3

heading.style.fontSize = "2em";

//Question 4

//const heading = document.querySelector("h3");

console.dir(heading.className);

heading.className = "subheading";

console.log(heading.className)



//Queston 5

const paragraphs = document.querySelectorAll("p");


for(let i = 0; i < paragraphs.length; i++) {
    paragraphs[i].style.color = "red";
}

console.log(paragraphs);

// Question 6

const resultsContainer = document.querySelector(".results"); 

resultsContainer.innerHTML = "<p>New paragraph</p>";
resultsContainer.style.backgroundColor = "yellow";


// Question 7


function catsList(list) {
    for (let i = 0; i < list.length; i++) {
      console.log(list[i].name);
    }
  }
  
  catsList(cats);

 
//Question 8

function createCats(cats) {
    let html = "";
    for (let i = 0; i < cats.length; i++) {
      let ageProperty = "Age unknown";
  
      if (cats[i].age) {
        ageProperty = cats[i].age;
      }
  
      html += `<div>
      <h5>${cats[i].name}</h5>
      <p>${ageProperty}</p>
      </div>
      `;
    }
  
    return html;
  }
  
  const catsHtml = createCats(cats);
  const catsContainer = document.querySelector(".cat-container");
  catsContainer.innerHTML = catsHtml;