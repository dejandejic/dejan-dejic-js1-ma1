/*const cats = [
    {
        name: "Blob",
        age: 10
    },
    {
        name: "Harold",
    },
    {
        name: "Blurt",
        age: 21
    }
];*/


// Question 1 

const cat = {
    complain: "Meow",
    sayHello: function () {
        console.log("My cat says " + this.complain);
    }
};

cat.sayHello();

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
    console.log(paragraphs);
}

paragraphs.style.color[i] = "green";

// Question 6

const resultsContainer = document.querySelector(".results"); 

resultsContainer.innerHTML = "<p>New paragraph</p>";
resultsContainer.style.color = "yellow";

// Question 7