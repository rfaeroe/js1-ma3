// Question 1
(a, b) => {
  return a - b;
};

// Question 2
const GetUrl = "https://api.rawg.io/api/games?genres=sports";

fetch(GetUrl)
  .then(function(response) {
    return response.json();
  })
  .then(function(json) {
    for (let i = 0; i < json.results.length; i++) {
      console.log(json.results[i].name);
    }
  })
  .catch(function(error) {
    window.location.href = "error.html";
  });

// Question 3
let sentence = "These cats are outrageous.";
const replaceCatsWithGiraffes = sentence.replace("cats", "giraffes");

console.log(replaceCatsWithGiraffes);

// Question 4
const givenURL = new URL("https://my.site.com/?userId=7");
const params = new URLSearchParams(givenURL.search);

let id;

id = params.get("userId");

if (params.get("userId")) {
  if (10 <= id) {
    document.location = "second.html";
  } else if (10 > id) {
    document.location = "first.html";
  }
} else {
  document.location = "third.html";
}

// Question 5
const container = document.querySelector(".container");
const button = document.querySelector(".btn");

container.removeChild(button);

// Question 6
const animal = document.querySelector(".animals");
const createList = document.createElement("li");
const elephant = document.querySelector(".elephants");
createList.className = "parrots";
createList.innerText = "Parrots";

animal.appendChild(createList);
elephant.before(createList);

// Question 7
const URLcall = "https://api.rawg.io/api/games/3801";

fetch(URLcall)
  .then(function(response) {
    return response.json();
  })
  .then(function(json) {
    document.querySelector(".rating").innerText = json.rating;
  })
  .catch(function(error) {
    console.log(error);
  });
