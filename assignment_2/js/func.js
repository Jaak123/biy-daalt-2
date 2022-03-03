// Use window.addEventListener("scroll",) Event listener.
// function scrollDetect(event) {
//     let scrollTop = event.target.scrollingElement.scrollTop,

// }
var navbar = document.querySelector(".navbar");
var sticky = navbar.offsetTop;
window.addEventListener("scroll", function (event) {
  let scrollTop = event.target.scrollingElement.scrollTop;
  console.log(scrollTop);
  if (scrollTop > 615) {
    navbar.classList.add("fixed-top");
  } else {
    navbar.classList.remove("fixed-top");
  }
});

let url = "data/company_intro.json";
getJSON(url);
function getJSON(url) {
  let request = new XMLHttpRequest();
  request.onreadystatechange = function () {
    if (request.readyState === 4 && request.status === 200) {
      let business = JSON.parse(request.responseText);
      // callback(nArr);
      generateHTML(business);
    }
  };

  request.open("GET", url);
  request.send();
}

let dataBusiness = document.querySelector(".busines_strategy");
function generateHTML(gov) {
  console.log(gov);
  gov.data.map((e) => {
    let card = document.createElement("card");
    card.innerHTML = `
    <div class="card">
        <img src="${e.thumbnail}" class="card-img-top" alt="">
      <div>
      <h5 class="card-title">${e.title}</h5>
      <p class="card-text">${e.content}</p>
      </div>
      </div>`;
    dataBusiness.appendChild(card);
  });
}
// then add callback function that includes when the window height scroll down to 100vh and add 'fixed-top' class on Navbar element.
// For your mind: object.classList.add('class') this method is add class on selected element
// e.target.scrollingElement.scrollTop use that method when track scrolling amount

// Add scrollDetect callback function on window.addEventlistener('scroll', callback) Listener

// Define Play button variable

// Create a modal with a single line of JavaScript: https://getbootstrap.com/docs/5.1/components/modal/#via-javascript
// Define finsetModal then use Bootstrap modal Object request

// Create Click Event Listener on Play button variable (you already created above)
// add finsetModal.show() on callback function
// Select '.modal-body' class from finsetModal variable then use innerHTML method and add Youtube embed code

// Create an XMLHttpRequest object
// Create a callback function
// Open a GET request and use data from ../data/company_intro.json
// Send the request

/*  Add subscription email action. When subscription POST request is successful, 
    change the email element and subscribe button into "Your subscription is successful" Text. 
    POST request should be done by AJAX request. We need a POST request end point for subscription email. 
*/
// Define Subscribe by ID name

// Add CLICK Event Listener on the button
// Then using Fetch method POST input value to http://52.221.191.153/subscribe/subscription/create
