document.querySelector(".get-jokes").addEventListener("click", getJokes);

function getJokes(e) {
  // get number of jokes from number input.
  const number = document.getElementById("number").value;
  // format the xhr request
  xhr = new XMLHttpRequest();
  //create the request
  xhr.open("GET", `https://api.icndb.com/jokes/random/${number}`, true);
  // do an onload function
  xhr.onload = function () {
    if (this.status == 200) {
      const response = JSON.parse(this.responseText);
      var output = "";

      if (response.type === "success") {
        Array.prototype.forEach.call(response.value, (element) => {
          output += `<li>${element.joke}</li>`;
        });
      } else {
        output += "<li>something went wrong.</li>";
      }
      document.querySelector(".jokes").innerHTML = output;
    }
  };
  //send it
  xhr.send();

  e.preventDefault();
}
